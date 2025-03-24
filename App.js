

let users = [];

function signup() {
    let username = document.getElementById("signup-username").value;
    let password = document.getElementById("signup-password").value;

    let existingUser = users.find(user => user.username === username);
    if (existingUser) {
        alert("Username is already taken!");
        return;
    }

    users.push({ username: username, password: password });


    document.getElementById("signup-username").value = '';
    document.getElementById("signup-password").value = '';


    showMessage("User registered successfully!");
}

function login() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;


    let user = users.find(user => user.username === username && user.password === password);

    if (user) {
        showMessage("Login successful!");
    } else {
        showMessage("Invalid username or password", true);
    }


    document.getElementById("login-username").value = '';
    document.getElementById("login-password").value = '';
}

function editUser() {
    let username = document.getElementById("edit-username").value;
    let password = document.getElementById("edit-password").value;

    let user = users.find(user => user.username === username && user.password === password);

    if(user){
        showMessage(`Now you can edit!`);

        document.getElementById("editSection").style.display = "block";

        document.getElementById("new-username").value = user.username;
        document.getElementById("new-password").value = user.password;
        
        currentUser = user;
    }

    else{

        showMessage("Invalid username or password! ");
    }

    document.getElementById("edit-username").value = '';
    document.getElementById("edit-password").value = '';

}

function updateUser(){

    if(!currentUser){
        showMessage("no user available");
        return
    }

    let newUsername = document.getElementById("new-username").value;
    let newPassword = document.getElementById("new-password").value;

        currentUser.username = newUsername;
        currentUser.password = newPassword;

        showMessage("User details updated successfully!");

        document.getElementById("editSection").style.display = "none";
        currentUser = null
}


function showAllUsers() {
    let userList = document.getElementById("user-list");
    userList.innerHTML = ''; 


    users.forEach(user => {
        let li = document.createElement("li");
        li.textContent = `Username: ${user.username}`;
        userList.appendChild(li);
    });
}

function deleteUser() {
    let username = document.getElementById("delete-username").value;


    let userIndex = users.findIndex(user => user.username === username);

    if (userIndex === -1) {
        showMessage("User not found", true);
    } else {
        users.splice(userIndex, 1); 
        showMessage(`User ${username} deleted successfully!`);
    }


    document.getElementById("delete-username").value = '';
}

function showMessage(message, isError = false) {
    let messageDiv = document.getElementById("message");
    messageDiv.textContent = message;
    messageDiv.style.color = isError ? "red" : "green";
}



