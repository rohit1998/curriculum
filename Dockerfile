FROM python:3.13-slim as prod

WORKDIR /app

# Install shell utilities
RUN apt update

ENV UV_SYSTEM_PYTHON=1
ENV UV_PROJECT=/app/services/agent_service/pyproject.toml
ENV UV_LINK_MODE=copy

# Install uv using the official installer
RUN pip install --no-cache-dir uv

####################DEV#################################

# Dev image
FROM prod as dev

# Install zsh, curl, git, and vim
RUN apt install -y zsh git curl fonts-powerline
ENV NVM_DIR /root/.nvm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash \
    && . "$NVM_DIR/nvm.sh" \
    && nvm install --lts \
    && nvm use --lts \
    && node -v \
    && npm -v

# Install Oh My Zsh
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended

# Install Powerlevel10k theme
RUN git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

# Install additional plugins
RUN git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
RUN git clone https://github.com/zsh-users/zsh-syntax-highlighting ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

# Copy custom configuration files
COPY ./.devcontainer/.zshrc /root/.zshrc
COPY ./.devcontainer/.p10k.zsh /root/.p10k.zsh

########################################################

CMD ["sh", "-c", "sleep infinity"]


# docker build -t agent-service -f services/agent_service/Dockerfile .
# docker run -p 8000:8000 -t agent-service
# docker run -it agent-service /bin/bash
# curl http://localhost:8000/