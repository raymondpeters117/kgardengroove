// ======================================
// CHECK LOGIN
// ======================================

if(localStorage.getItem("loggedIn") !== "true"){

    window.location.href = "admin-login.html";

}

// ======================================
// USER DETAILS
// ======================================

const username = localStorage.getItem("username");

const role = localStorage.getItem("role");

// ======================================
// SHOW USER NAME
// ======================================

const welcome = document.getElementById("welcome");

if(welcome){

    welcome.innerHTML =
    "Welcome " + username + " (" + role + ")";

}

// ======================================
// ROLE PERMISSIONS
// ======================================

window.onload = function(){

    if(role === "secretary"){

        hideSection("gallery");
        hideSection("students");

        hideLink("galleryLink");
        hideLink("studentLink");

    }

    else if(role === "bursar"){

        hideSection("announcements");
        hideSection("gallery");
        hideSection("students");
        hideSection("messages");

        hideLink("galleryLink");
        hideLink("studentLink");

    }

    else if(role === "teacher"){

        hideSection("announcements");
        hideSection("gallery");
        hideSection("admissions");
        hideSection("messages");

        hideLink("galleryLink");
        hideLink("admissionLink");

    }

    else if(role === "librarian"){

        hideSection("announcements");
        hideSection("gallery");
        hideSection("students");
        hideSection("admissions");
        hideSection("messages");

        hideLink("galleryLink");
        hideLink("studentLink");
        hideLink("admissionLink");

    }

    else if(role === "ict"){

        hideSection("students");
        hideSection("admissions");
        hideSection("messages");

        hideLink("studentLink");
        hideLink("admissionLink");

    }

};

// ======================================
// HIDE SECTION
// ======================================

function hideSection(id){

    const section = document.getElementById(id);

    if(section){

        section.style.display = "none";

    }

}

// ======================================
// HIDE MENU LINK
// ======================================

function hideLink(id){

    const link = document.getElementById(id);

    if(link){

        link.style.display = "none";

    }

}

// ======================================
// LOGOUT
// ======================================

function logout(){

    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("role");

    window.location.href = "admin-login.html";

}
