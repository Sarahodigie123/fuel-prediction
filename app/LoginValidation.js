function Validation(values) {
    let errors = {};
    const usernamePattern = /^[a-zA-Z0-9_]{3,20}$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (!values.username.trim()) {
        errors.username = "Username is required";
    } else if (!usernamePattern.test(values.username)) {
        errors.username = "Username must be 3-20 characters long and contain only letters, numbers, and underscores";
    } else {
        errors.username = "";
    }

    if (!values.password.trim()) {
        errors.password = "Password is required";
    } else if (!passwordPattern.test(values.password)) {
        errors.password = "Password must contain at least one digit, one lowercase letter, one uppercase letter, and be at least 8 characters long";
    } else {
        errors.password = "";
    }

    return errors;
}

export default Validation;
