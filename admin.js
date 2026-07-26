// ======================================
// CHECK LOGIN
// ======================================

if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "admin-login.html";
}

// ======================================
// USER DETAILS
// ======================================

const username = localStorage.getItem("username") || "User";
const role = localStorage.getItem("role") || "";

const welcome = document.getElementById("welcome");

if (welcome) {
    welcome.textContent = `Welcome ${username} (${role})`;
}

// ======================================
// PAGE LOAD
// ======================================

window.addEventListener("DOMContentLoaded", () => {

    applyRolePermissions();

    loadAdmissions();

    loadStudents();

});

// ======================================
// ROLE PERMISSIONS
// ======================================

function applyRolePermissions() {

    switch(role){

        case "secretary":

            hideSection("gallery");
            hideSection("students");

            hideLink("galleryLink");
            hideLink("studentLink");

            break;

        case "bursar":

            hideSection("announcements");
            hideSection("gallery");
            hideSection("students");
            hideSection("messages");

            hideLink("galleryLink");
            hideLink("studentLink");

            break;

        case "teacher":

            hideSection("announcements");
            hideSection("gallery");
            hideSection("admissions");
            hideSection("messages");

            hideLink("galleryLink");
            hideLink("admissionLink");

            break;

        case "librarian":

            hideSection("announcements");
            hideSection("gallery");
            hideSection("students");
            hideSection("admissions");
            hideSection("messages");

            hideLink("galleryLink");
            hideLink("studentLink");
            hideLink("admissionLink");

            break;

        case "ict":

            hideSection("students");
            hideSection("admissions");
            hideSection("messages");

            hideLink("studentLink");
            hideLink("admissionLink");

            break;

    }

}

// ======================================
// HIDE
// ======================================

function hideSection(id){

    const element = document.getElementById(id);

    if(element){

        element.style.display="none";

    }

}

function hideLink(id){

    const element=document.getElementById(id);

    if(element){

        element.style.display="none";

    }

}

// ======================================
// LOAD ADMISSIONS
// ======================================

function loadAdmissions(){

    const container=document.getElementById("applications");

    if(!container) return;

    const admissions=JSON.parse(localStorage.getItem("admissions")) || [];

    if(admissions.length===0){

        container.innerHTML="<p>No admission applications found.</p>";

        return;

    }

    let html="";

    admissions.forEach((student,index)=>{

        html += `

        <div class="application-card">

            <h3>${student.studentName}</h3>

            <p><strong>Class:</strong> ${student.classApplying}</p>

            <p><strong>Date of Birth:</strong> ${student.dateOfBirth}</p>

            <p><strong>Gender:</strong> ${student.gender}</p>

            <p><strong>Parent:</strong> ${student.parentName}</p>

            <p><strong>Phone:</strong> ${student.phone}</p>

            <p><strong>Email:</strong> ${student.email}</p>

            <p><strong>Previous School:</strong> ${student.previousSchool}</p>

            <p><strong>Information:</strong> ${student.information}</p>

            <p><strong>Status:</strong> ${student.status}</p>

            <p><strong>Submitted:</strong> ${student.dateSubmitted}</p>

            <button onclick="deleteAdmission(${index})">
                Delete
            </button>

        </div>

        `;

    });

    container.innerHTML=html;

}

// ======================================
// DELETE ADMISSION
// ======================================

function deleteAdmission(index){

    let admissions=JSON.parse(localStorage.getItem("admissions")) || [];

    admissions.splice(index,1);

    localStorage.setItem(
        "admissions",
        JSON.stringify(admissions)
    );

    loadAdmissions();

    loadStudents();

}

// ======================================
// STUDENTS
// ======================================

function loadStudents(){

    const list=document.getElementById("studentList");

    if(!list) return;

    const admissions=JSON.parse(localStorage.getItem("admissions")) || [];

    let html="";

    admissions.forEach(student=>{

        html += `

        <li>

            ${student.studentName}
            (${student.classApplying})

        </li>

        `;

    });

    list.innerHTML=html;

}
function loadAdmissions() {

    const container = document.getElementById("applications");

    if (!container) return;

    const admissions =
    JSON.parse(localStorage.getItem("admissions")) || [];

    if (admissions.length === 0) {

        container.innerHTML = "<h3>No admission applications found.</h3>";

        return;

    }

    container.innerHTML = "";

    admissions.forEach((student, index) => {

        container.innerHTML += `

        <div class="application-card">

            <h3>${student.studentName}</h3>

            <p><strong>Class:</strong> ${student.classApplying}</p>

            <p><strong>Date of Birth:</strong> ${student.dateOfBirth}</p>

            <p><strong>Gender:</strong> ${student.gender}</p>

            <p><strong>Parent:</strong> ${student.parentName}</p>

            <p><strong>Phone:</strong> ${student.phone}</p>

            <p><strong>Email:</strong> ${student.email}</p>

            <p><strong>Previous School:</strong> ${student.previousSchool}</p>

            <p><strong>Status:</strong> ${student.status}</p>

            <p><strong>Submitted:</strong> ${student.dateSubmitted}</p>

            <button onclick="deleteAdmission(${index})">
                Delete
            </button>

        </div>

        `;

    });

}
window.onload = function () {

    loadAdmissions();

};
// ======================================
// LOGOUT
// ======================================

function logout(){

    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("role");

    window.location.href="admin-login.html";

}
