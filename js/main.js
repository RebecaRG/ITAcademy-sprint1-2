
        (function () {
            'use strict';
    
            var forms = document.querySelectorAll('.needs-validation');
    
            Array.prototype.slice.call(forms).forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault();
                        event.stopPropagation();
                        form.classList.add('was-validated');
                    } else {
                        var emailInput = form.querySelector('#email').value;
    
                        if (!isValidEmail(emailInput)) {
                            var emailField = form.querySelector('#email');
                            emailField.classList.add('is-invalid');
                            emailField.nextElementSibling.textContent = "Whoops, make sure it's an email";
                            event.preventDefault();
                            event.stopPropagation();
                            form.classList.add('was-validated');
                        } else {
                            emailField.classList.remove('is-invalid');
                            emailField.nextElementSibling.textContent = "";
                        }
                    }
                }, false);
            });
    
            function isValidEmail(email) {
                var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
            }
        })();