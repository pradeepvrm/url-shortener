const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const VALIDATORS = {
    username(value) {
        if (value === '') return 'Username is required.';
        if (value.length < 3) return 'Username must be at least 3 characters.';
        return '';
    },
    email(value) {
        if (value === '') return 'Email is required.';
        if (!EMAIL_PATTERN.test(value)) return 'Please enter a valid email address.';
        return '';
    },
    password(value) {
        if (value === '') return 'Password is required.';
        if (value.length < 8) return 'Password must be at least 8 characters long.';
        return '';
    }
};

function validateForm(form, fields) {
    let isValid = true;

    for (const name of fields) {
            const input = form.elements[name];
            const errorEl = form.querySelector(`#${name}Error`);
            const value = input ? input.value.trim() : '';
            const message = VALIDATORS[name] ? VALIDATORS[name](value) : '';

        if (errorEl) errorEl.textContent = message;
        if (message) isValid = false;
    }

    return isValid;
}

function setSubmitState(submitBtn, isValid) {
    submitBtn.classList.remove('is-valid', 'is-invalid');
    submitBtn.classList.add(isValid ? 'is-valid' : 'is-invalid');
}

function handleSubmit(form, fields) {
    if (!form) return;

    const submitBtn = form.querySelector('#submitBtn');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const isValid = validateForm(form, fields);

        setSubmitState(submitBtn, isValid);
        if (isValid) {
            form.reset();
            window.location.href = form.dataset.redirect || '../index.html';
        }
    });

    if (submitBtn) {
        submitBtn.addEventListener('click', (event) => {
            event.preventDefault();
            form.requestSubmit();
        });
    }
} 

handleSubmit(document.getElementById('signupForm'), ['username', 'email', 'password']);
handleSubmit(document.getElementById('loginForm'), ['email', 'password']);