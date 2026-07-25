// USERS

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
}

];

function login(){

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const user = users.find(u =>
        u.username === username &&
        u.password === password
    );

    if(user){

        localStorage.setItem("loggedIn","true");
        localStorage.setItem("username",user.username);
        localStorage.setItem("role",user.role);

        window.location="admin.html";

    }else{

        document.getElementById("message").innerHTML =
        "Invalid username or password";

    }

}
// Check Login

if(localStorage.getItem("loggedIn") !== "true"){

    window.location = "admin-login.html";

}
const role = localStorage.getItem("role");
const role = localStorage.getItem("role");

if(role === "secretary"){

    document.getElementById("gallery").style.display = "none";

    document.getElementById("admissions").style.display = "none";

    document.getElementById("students").style.display = "none";

}
if(role === "secretary"){

    document.getElementById("galleryLink").style.display = "none";

    document.getElementById("admissionLink").style.display = "none";

    document.getElementById("studentLink").style.display = "none";

}const username = localStorage.getItem("username");

const role = localStorage.getItem("role");

document.getElementById("welcome").innerHTML =
"Welcome " + username + " (" + role + ")";
function logout(){

    localStorage.removeItem("loggedIn");

    localStorage.removeItem("username");

    localStorage.removeItem("role");

    window.location = "admin-login.html";

}
