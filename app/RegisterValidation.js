function Validation(values) {
    let errors = {};
    const usernamePattern = /^[a-zA-Z0-9_]{3,30}$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (!values.name.trim()) {
        errors.name = "Name should not be empty";
    } else {
        errors.name = "";
    }

    if (!values.username.trim()) {
        errors.username = "Username should not be empty";
    } else if (!usernamePattern.test(values.username)) {
        errors.username = "Invalid username format";
    } else {
        errors.username = "";
    }

    if (!values.password.trim()) {
        errors.password = "Password should not be empty";
    } else if (!passwordPattern.test(values.password)) {
        errors.password = "Password must be at least 8 characters long and contain at least one digit, one lowercase letter, and one uppercase letter";
    } else {
        errors.password = "";
    }

    return errors;
}

export default Validation;
