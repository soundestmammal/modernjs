function User(id) {
    this.id = id;
}

function generateId() {
    return Math.random() * 999999;
}

function createAdminUser() {
    user.admin = true;

    return user;
}

// To make this work...
// createAdminUser(new User(generateId()));
// Wow that is messy