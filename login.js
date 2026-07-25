// ===============================
// USERS
// ===============================

const users = [

{
    username: "admin",
    password: "12345",
    role: "admin"
},

{
    username: "secretary",
    password: "12345",
    role: "secretary"
},

{
    username: "bursar",
    password: "12345",
    role: "bursar"
},

{
    username: "teacher",
    password: "12345",
    role: "teacher"
},

{
    username: "librarian",
    password: "12345",
    role: "librarian"
},

{
    username: "headteacher",
    password: "12345",
    role: "headteacher"
},

{
    username: "ict",
    password: "12345",
    role: "ict"
}

];

// ===============================
// LOGIN
// ===============================

function login(){

    const username = document.getElementById("username").value.trim();

    const password = document.getElementById("password").value.trim();

    const message = document.getElementById("message");

    const user = users.find(u =>
        u.username === username &&
        u.password === password
    );

    if(user){

        localStorage.setItem("loggedIn","true");
        localStorage.setItem("username",user.username);
        localStorage.setItem("role",user.role);

        window.location.href = "admin.html";

    }else{

        message.textContent = "Invalid username or password.";

    }

}
