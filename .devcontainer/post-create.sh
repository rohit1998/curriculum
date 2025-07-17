#!/bin/bash

# Setup git configuration
git config --global user.name "Rohit Gupta"
git config --global user.email "gupta.rohit21198@gmail.com"
git config --global --add safe.directory /app

# Update history file location
echo "
HISTFILE=/commandhistory/.zsh_history
HISTSIZE=10000
SAVEHIST=10000
" >> ~/.zshrc

# update nvm path
echo "
export NVM_DIR="$HOME/.nvm" 
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
" >> ~/.zshrc

# Set zsh as default shell for root
chsh -s $(which zsh)

