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

// ======================================
// WELCOME MESSAGE
// ======================================

const welcome = document.getElementById("welcome");

if (welcome) {
    welcome.innerHTML = `Welcome ${username} (${role})`;
}

// ======================================
// PAGE LOAD
// ======================================

window.onload = function () {

    // Role Permissions

    if (role === "secretary") {

        hideSection("gallery");
        hideSection("students");

        hideLink("galleryLink");
        hideLink("studentLink");

    }

    if (role === "bursar") {

        hideSection("announcements");
        hideSection("gallery");
        hideSection("students");
        hideSection("messages");

        hideLink("galleryLink");
        hideLink("studentLink");

    }

    if (role === "teacher") {

        hideSection("announcements");
        hideSection("gallery");
        hideSection("admissions");
        hideSection("messages");

        hideLink("galleryLink");
        hideLink("admissionLink");

    }

    if (role === "librarian") {

        hideSection("announcements");
        hideSection("gallery");
        hideSection("students");
        hideSection("admissions");
        hideSection("messages");

        hideLink("galleryLink");
        hideLink("studentLink");
        hideLink("admissionLink");

    }

    if (role === "ict") {

        hideSection("students");
        hideSection("admissions");
        hideSection("messages");

        hideLink("studentLink");
        hideLink("admissionLink");

    }

    loadAdmissions();
    loadStudents();
    displayImages();

};

// ======================================
// HIDE SECTION
// ======================================

function hideSection(id) {

    const element = document.getElementById(id);

    if (element) {
        element.style.display = "none";
    }

}

// ======================================
// HIDE LINK
// ======================================

function hideLink(id) {

    const element = document.getElementById(id);

    if (element) {
        element.style.display = "none";
    }

}

// ======================================
// LOAD ADMISSIONS
// ======================================

function loadAdmissions() {

    const container = document.getElementById("applications");

    if (!container) return;

    const admissions =
        JSON.parse(localStorage.getItem("admissions")) || [];

    container.innerHTML = "";

    if (admissions.length === 0) {

        container.innerHTML =
            "<p>No admission applications yet.</p>";

        return;

    }

    admissions.forEach((student, index) => {

        container.innerHTML += `

        <div class="application-card">

            <h3>${student.studentName}</h3>

            <p><b>Class:</b> ${student.classApplying}</p>

            <p><b>Gender:</b> ${student.gender}</p>

            <p><b>Date of Birth:</b> ${student.dateOfBirth}</p>

            <p><b>Parent:</b> ${student.parentName}</p>

            <p><b>Phone:</b> ${student.phone}</p>

            <p><b>Email:</b> ${student.email}</p>

            <p><b>Previous School:</b> ${student.previousSchool}</p>

            <p><b>Information:</b> ${student.information}</p>

            <p><b>Status:</b> ${student.status}</p>

            <p><b>Submitted:</b> ${student.dateSubmitted}</p>

            <button onclick="deleteAdmission(${index})">
                Delete
            </button>

        </div>

        `;

    });

}

// ======================================
// DELETE ADMISSION
// ======================================

function deleteAdmission(index) {

    let admissions =
        JSON.parse(localStorage.getItem("admissions")) || [];

    admissions.splice(index, 1);

    localStorage.setItem(
        "admissions",
        JSON.stringify(admissions)
    );

    loadAdmissions();
    loadStudents();

}

// ======================================
// LOAD STUDENTS
// ======================================

function loadStudents() {

    const list =
        document.getElementById("studentList");

    if (!list) return;

    const admissions =
        JSON.parse(localStorage.getItem("admissions")) || [];

    list.innerHTML = "";

    admissions.forEach(student => {

        list.innerHTML += `

        <li>

            ${student.studentName}

            -

            ${student.classApplying}

        </li>

        `;

    });

}

// ======================================
// IMAGE UPLOAD
// ======================================

function addImage() {

    const input =
        document.getElementById("imageUpload");

    if (!input || input.files.length === 0) {

        alert("Please choose an image.");

        return;

    }

    const file = input.files[0];

    const reader = new FileReader();

    reader.onload = function (e) {

        let gallery =
            JSON.parse(localStorage.getItem("gallery")) || [];

        gallery.push(e.target.result);

        localStorage.setItem(
            "gallery",
            JSON.stringify(gallery)
        );

        displayImages();

        input.value = "";

    };

    reader.readAsDataURL(file);

}

// ======================================
// DISPLAY IMAGES
// ======================================

function displayImages() {

    const galleryList =
        document.getElementById("galleryList");

    if (!galleryList) return;

    const gallery =
        JSON.parse(localStorage.getItem("gallery")) || [];

    galleryList.innerHTML = "";

    gallery.forEach((image, index) => {

        galleryList.innerHTML += `

        <div class="gallery-card">

            <img src="${image}" alt="Gallery Image">

            <br><br>

            <button onclick="deleteImage(${index})">

                Delete

            </button>

        </div>

        `;

    });

}

// ======================================
// DELETE IMAGE
// ======================================

function deleteImage(index) {

    let gallery =
        JSON.parse(localStorage.getItem("gallery")) || [];

    gallery.splice(index, 1);

    localStorage.setItem(
        "gallery",
        JSON.stringify(gallery)
    );

    displayImages();

}

// ======================================
// LOGOUT
// ======================================

function logout() {

    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("role");

    window.location.href = "admin-login.html";

}
