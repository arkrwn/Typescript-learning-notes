"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
// Our simulated "JSON database" (in-memory array)
var users = [];
// Global variable to track the next ID for new users
var nextId = 1;
// Function to create a new user
function createUser() {
    var rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question('Enter name: ', function (name) {
        rl.question('Enter email: ', function (email) {
            var newUser = { id: nextId++, name: name, email: email };
            users.push(newUser);
            console.log("User created successfully!");
            rl.close();
        });
    });
}
// Function to read all existing users
function readUsers() {
    if (!users.length) {
        console.log('No users found.');
        return;
    }
    console.log('List of Users:');
    users.forEach(function (user) {
        console.log("ID: ".concat(user.id, ", Name: ").concat(user.name, ", Email: ").concat(user.email));
    });
}
// Function to update an existing user
function updateUser() {
    var rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question('Enter the ID of the user to update: ', function (id) {
        var userId = parseInt(id);
        var existingUserIndex = users.findIndex(function (user) { return user.id === userId; });
        if (existingUserIndex === -1) {
            console.log('User not found.');
            rl.close();
            return;
        }
        rl.question('Enter new name (press Enter to keep existing): ', function (newName) {
            var newEmail = newName.trim() ? newName : users[existingUserIndex].name;
            rl.question('Enter new email (press Enter to keep existing): ', function (newEmailInput) {
                var newEmail = newEmailInput.trim() ? newEmailInput : users[existingUserIndex].email;
                users[existingUserIndex] = { id: userId, name: newEmail, email: newEmail };
                console.log('User updated successfully!');
                rl.close();
            });
        });
    });
}
// Function to delete a user
function deleteUser() {
    var rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question('Enter the ID of the user to delete: ', function (id) {
        var userId = parseInt(id);
        var existingUserIndex = users.findIndex(function (user) { return user.id === userId; });
        if (existingUserIndex === -1) {
            console.log('User not found.');
            rl.close();
            return;
        }
        users.splice(existingUserIndex, 1);
        console.log('User deleted successfully!');
        rl.close();
    });
}
// Main function to display the menu and handle user input
function mainMenu() {
    console.log('\nUser CRUD');
    console.log('1. Create User');
    console.log('2. Read Users');
    console.log('3. Update User');
    console.log('4. Delete User');
    console.log('5. Exit');
    var rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question('Enter your choice: ', function (choice) {
        var option = parseInt(choice);
        switch (option) {
            case 1:
                createUser();
                break;
            case 2:
                readUsers();
                break;
            case 3:
                updateUser();
                break;
            case 4:
                deleteUser();
                break;
            case 5:
                console.log('Exiting...');
                rl.close();
                process.exit(0); // Exit the program gracefully
            default:
                console.log('Invalid choice.');
        }
        rl.close(); // Close the readline interface after each option selection
    });
}
// Start the program by displaying the main menu
mainMenu();
