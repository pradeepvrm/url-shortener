const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");

if (signupForm) {
    signupForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const submitBtn = document.getElementById("submitBtn");

        const usernameError = document.getElementById("usernameError");
        const emailError = document.getElementById("emailError");
        const passwordError = document.getElementById("passwordError");

        let isValid = true;

        usernameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';

        if (username === '') {
            usernameError.textContent = 'Username is required.';
            isValid = false;
        } else if (username.length < 3) {
            usernameError.textContent = 'Username must be at least 3 characters.';
            isValid = false;
        }

        if (email === '') {
            emailError.textContent = 'Email is required.';
            isValid = false;
        } else if (!emailPattern.test(email)) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        if (password === '') {
            passwordError.textContent = 'Password is required.';
            isValid = false;
        } else if (password.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters long.';
            isValid = false;
        }

        submitBtn.classList.remove("is-valid", "is-invalid");

        if (!isValid) {
            submitBtn.classList.add("is-invalid");
            return;
        }

        submitBtn.classList.add("is-valid");
        console.log({ username, email, password });
        signupForm.reset();
        window.location.href = "../index.html";
    });

    document.getElementById("submitBtn").addEventListener("click", (event) => {
        event.preventDefault();
        signupForm.requestSubmit();
    });
}

if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const submitBtn = document.getElementById("submitBtn");

        const emailError = document.getElementById("emailError");
        const passwordError = document.getElementById("passwordError");

        let isValid = true;

        emailError.textContent = '';
        passwordError.textContent = '';

        if (email === '') {
            emailError.textContent = 'Email is required.';
            isValid = false;
        } else if (!emailPattern.test(email)) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        if (password === '') {
            passwordError.textContent = 'Password is required.';
            isValid = false;
        } else if (password.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters long.';
            isValid = false;
        }

        submitBtn.classList.remove("is-valid", "is-invalid");

        if (!isValid) {
            submitBtn.classList.add("is-invalid");
            return;
        }

        submitBtn.classList.add("is-valid");
        console.log({ email, password });
        loginForm.reset();
        window.location.href = "../index.html";
    });

    document.getElementById("submitBtn").addEventListener("click", (event) => {
        event.preventDefault();
        loginForm.requestSubmit();
    });
}