
// account.js

const account = {
    username: "kainahlopez",
    password: "Kainah2026!",
    age: 24,
    status: "active",
    email: "kainah@gmail.com"
};

function validate(data) {
    const errors = [];

    if (!data.username || data.username.length < 4) {
        errors.push("Username must be at least 4 characters");
    }

    if (!data.password || data.password.length < 8) {
        errors.push("Password must be at least 8 characters");
    }

    if (data.age < 16 || data.age > 70) {
        errors.push("Age must be between 16 and 70");
    }

    if (data.status !== "active") {
        errors.push("Account is not active");
    }

    if (!data.email || !data.email.includes("@")) {
        errors.push("Invalid email address");
    }

    if (data.age >= 18 && data.age <= 60) {
        console.log("Eligible age");
    }

    return errors;
}

const result = validate(account);

console.log("===== ACCOUNT VALIDATION =====");
console.log("Username:", account.username);
console.log("Age:", account.age);
console.log("Status:", account.status);
console.log("Email:", account.email);
console.log("Validation Errors:", result);
