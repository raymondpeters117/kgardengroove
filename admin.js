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
function loadApplications(){

    const container = document.getElementById("applications");

    const applications =
    JSON.parse(localStorage.getItem("applications")) || [];

    if(applications.length === 0){

        container.innerHTML = "<p>No admission applications yet.</p>";

        return;

    }

    container.innerHTML = "";

    applications.forEach((app,index)=>{

        container.innerHTML += `

        <div class="application-card">

            <h3>${app.studentName}</h3>

            <p><strong>Class:</strong> ${app.classApplying}</p>

            <p><strong>Gender:</strong> ${app.gender}</p>

            <p><strong>Date of Birth:</strong> ${app.dob}</p>

            <p><strong>Parent:</strong> ${app.parentName}</p>

            <p><strong>Phone:</strong> ${app.phone}</p>

            <p><strong>Email:</strong> ${app.email}</p>

            <p><strong>Previous School:</strong> ${app.previousSchool}</p>

            <p><strong>Information:</strong> ${app.information}</p>

            <p><strong>Submitted:</strong> ${app.submitted}</p>

            <button onclick="deleteApplication(${index})">
                Delete
            </button>

        </div>

        `;

    });

}

function deleteApplication(index){

    let applications =
    JSON.parse(localStorage.getItem("applications")) || [];

    applications.splice(index,1);

    localStorage.setItem(
        "applications",
        JSON.stringify(applications)
    );

    loadApplications();

}

loadApplications();
