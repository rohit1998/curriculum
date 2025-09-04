// Form Validation UX Enhancement JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // ======================
    // PROGRESSIVE VALIDATION
    // ======================
    
    const progressiveForm = document.querySelector('.progressive-form');
    if (progressiveForm) {
        setupProgressiveValidation(progressiveForm);
    }
    
    // ======================
    // CUSTOM VALIDATION
    // ======================
    
    const customForm = document.querySelector('.custom-validation-form');
    if (customForm) {
        setupCustomValidation(customForm);
    }
    
    // ======================
    // ERROR SUMMARY
    // ======================
    
    const summaryForm = document.querySelector('.summary-form');
    if (summaryForm) {
        setupErrorSummary(summaryForm);
    }
    
    // ======================
    // UTILITY FUNCTIONS
    // ======================
    
    function setupProgressiveValidation(form) {
        const inputs = form.querySelectorAll('.field-input');
        
        inputs.forEach(input => {
            // Validate on blur (when user leaves field)
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            // Clear errors on input (as user types)
            input.addEventListener('input', function() {
                if (this.classList.contains('is-invalid')) {
                    clearFieldError(this);
                }
            });
        });
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            inputs.forEach(input => {
                if (!validateField(input)) {
                    isValid = false;
                }
            });
            
            if (isValid) {
                showSuccessMessage('Form submitted successfully!');
            }
        });
    }
    
    function setupCustomValidation(form) {
        const passwordInput = document.getElementById('confirm-password');
        const originalPassword = document.getElementById('password1'); // From first form
        const termsCheckbox = document.getElementById('terms');
        
        // Custom password confirmation validation
        if (passwordInput && originalPassword) {
            passwordInput.addEventListener('blur', function() {
                validatePasswordConfirmation(this, originalPassword);
            });
        }
        
        // Custom checkbox validation
        if (termsCheckbox) {
            termsCheckbox.addEventListener('change', function() {
                validateCheckbox(this);
            });
        }
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            if (passwordInput && !validatePasswordConfirmation(passwordInput, originalPassword)) {
                isValid = false;
            }
            
            if (termsCheckbox && !validateCheckbox(termsCheckbox)) {
                isValid = false;
            }
            
            if (isValid) {
                showSuccessMessage('Registration completed successfully!');
            }
        });
    }
    
    function setupErrorSummary(form) {
        const errorSummary = document.querySelector('.error-summary');
        const errorList = document.querySelector('.error-summary-list');
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const inputs = form.querySelectorAll('.field-input');
            const errors = [];
            
            inputs.forEach(input => {
                if (!input.checkValidity()) {
                    const label = form.querySelector(`label[for="${input.id}"]`);
                    const fieldName = label ? label.textContent.replace('*', '').trim() : input.name;
                    errors.push({
                        field: input.id,
                        message: getCustomErrorMessage(input),
                        name: fieldName
                    });
                    
                    showFieldError(input, getCustomErrorMessage(input));
                } else {
                    clearFieldError(input);
                }
            });
            
            if (errors.length > 0) {
                showErrorSummary(errorSummary, errorList, errors);
            } else {
                hideErrorSummary(errorSummary);
                showSuccessMessage('Form submitted successfully!');
            }
        });
    }
    
    function validateField(input) {
        if (input.checkValidity()) {
            showFieldSuccess(input);
            return true;
        } else {
            showFieldError(input, getCustomErrorMessage(input));
            return false;
        }
    }
    
    function validatePasswordConfirmation(confirmInput, originalInput) {
        const errorContainer = confirmInput.parentNode.querySelector('.field-error');
        
        if (confirmInput.value !== originalInput.value) {
            confirmInput.classList.add('is-invalid');
            confirmInput.classList.remove('is-valid');
            errorContainer.textContent = 'Passwords do not match';
            errorContainer.classList.add('show');
            return false;
        } else if (confirmInput.value !== '') {
            confirmInput.classList.add('is-valid');
            confirmInput.classList.remove('is-invalid');
            errorContainer.classList.remove('show');
            return true;
        }
        return true;
    }
    
    function validateCheckbox(checkbox) {
        const errorContainer = checkbox.closest('.field-group').querySelector('.field-error');
        
        if (!checkbox.checked) {
            errorContainer.textContent = 'You must agree to the Terms of Service';
            errorContainer.classList.add('show');
            return false;
        } else {
            errorContainer.classList.remove('show');
            return true;
        }
    }
    
    function showFieldError(input, message) {
        const errorContainer = input.parentNode.querySelector('.field-error');
        const successContainer = input.parentNode.querySelector('.field-success');
        
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        
        if (errorContainer) {
            errorContainer.textContent = message;
            errorContainer.classList.add('show', 'fade-in');
        }
        
        if (successContainer) {
            successContainer.classList.remove('show');
        }
        
        // Add shake animation
        input.classList.add('shake');
        setTimeout(() => input.classList.remove('shake'), 500);
    }
    
    function showFieldSuccess(input) {
        const errorContainer = input.parentNode.querySelector('.field-error');
        const successContainer = input.parentNode.querySelector('.field-success');
        
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
        
        if (errorContainer) {
            errorContainer.classList.remove('show');
        }
        
        if (successContainer) {
            successContainer.classList.add('show', 'fade-in');
        }
    }
    
    function clearFieldError(input) {
        const errorContainer = input.parentNode.querySelector('.field-error');
        
        input.classList.remove('is-invalid');
        
        if (errorContainer) {
            errorContainer.classList.remove('show');
        }
    }
    
    function getCustomErrorMessage(input) {
        const validity = input.validity;
        
        if (validity.valueMissing) {
            return `${getFieldName(input)} is required`;
        }
        
        if (validity.typeMismatch) {
            if (input.type === 'email') {
                return 'Please enter a valid email address';
            }
            if (input.type === 'url') {
                return 'Please enter a valid URL';
            }
        }
        
        if (validity.tooShort) {
            return `${getFieldName(input)} must be at least ${input.minLength} characters long`;
        }
        
        if (validity.tooLong) {
            return `${getFieldName(input)} must be no more than ${input.maxLength} characters long`;
        }
        
        if (validity.rangeUnderflow) {
            return `${getFieldName(input)} must be at least ${input.min}`;
        }
        
        if (validity.rangeOverflow) {
            return `${getFieldName(input)} must be no more than ${input.max}`;
        }
        
        if (validity.patternMismatch) {
            return `${getFieldName(input)} format is invalid`;
        }
        
        return 'Please enter a valid value';
    }
    
    function getFieldName(input) {
        const label = document.querySelector(`label[for="${input.id}"]`);
        return label ? label.textContent.replace('*', '').trim() : input.name;
    }
    
    function showErrorSummary(summary, list, errors) {
        list.innerHTML = '';
        
        errors.forEach(error => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = `#${error.field}`;
            link.textContent = `${error.name}: ${error.message}`;
            link.addEventListener('click', function(e) {
                e.preventDefault();
                document.getElementById(error.field).focus();
            });
            li.appendChild(link);
            list.appendChild(li);
        });
        
        summary.style.display = 'block';
        summary.classList.add('fade-in');
        summary.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    function hideErrorSummary(summary) {
        summary.style.display = 'none';
    }
    
    function showSuccessMessage(message) {
        // Create temporary success message
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: #27ae60;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 4px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1000;
            font-weight: 600;
        `;
        successDiv.textContent = message;
        
        document.body.appendChild(successDiv);
        
        // Remove after 3 seconds
        setTimeout(() => {
            if (successDiv.parentNode) {
                successDiv.parentNode.removeChild(successDiv);
            }
        }, 3000);
    }
});
