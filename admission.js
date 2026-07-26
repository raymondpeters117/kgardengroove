// ===================================
// K. GARDEN GROOVE COLLEGE BUDDO
// ADMISSIONS JAVASCRIPT
// ===================================


// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("show");

    });

}


// ==========================
// ADMISSION FORM
// ==========================

const admissionForm = document.getElementById("admissionForm");

if (admissionForm) {

    admissionForm.addEventListener("submit", function (e) {

        e.preventDefault();

        // Check all required elements

        const studentName = document.getElementById("studentName");
        const dob = document.getElementById("dob");
        const gender = document.getElementById("gender");
        const parentName = document.getElementById("parentName");
        const phone = document.getElementById("phone");
        const email = document.getElementById("email");
        const classApplying = document.getElementById("classApplying");
        const previousSchool = document.getElementById("previousSchool");
        const information = document.getElementById("information");

        if (
            !studentName ||
            !dob ||
            !gender ||
            !parentName ||
            !phone ||
            !email ||
            !classApplying ||
            !previousSchool ||
            !information
        ) {

            console.error("Some form IDs are missing.");

            alert("Form error. Check your HTML IDs.");

            return;

        }

        // Create admission object

        const admission = {

            id: Date.now(),

            studentName: studentName.value.trim(),

            dateOfBirth: dob.value,

            gender: gender.value,

            parentName: parentName.value.trim(),

            phone: phone.value.trim(),

            email: email.value.trim(),

            classApplying: classApplying.value,

            previousSchool: previousSchool.value.trim(),

            information: information.value.trim(),

            status: "Pending",

            dateSubmitted: new Date().toLocaleString()

        };

        // Get existing admissions

        let admissions = [];

        try {

            admissions = JSON.parse(localStorage.getItem("admissions")) || [];

        } catch {

            admissions = [];

        }

        // Save

        admissions.push(admission);

        localStorage.setItem(
            "admissions",
            JSON.stringify(admissions)
        );

        console.log("Admission Saved");

        console.table(admissions);

        alert("Admission application submitted successfully!");

        admissionForm.reset();

    });

}
else {

    console.error("admissionForm not found.");

}
