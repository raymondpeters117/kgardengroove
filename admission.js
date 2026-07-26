// ===================================
// K. GARDEN GROOVE COLLEGE BUDDO
// ADMISSION SYSTEM JAVASCRIPT
// ===================================


// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");


if(menuBtn){

    menuBtn.addEventListener("click", function(){

        navLinks.classList.toggle("show");

    });

}



// ==========================
// ADMISSION FORM
// ==========================


const admissionForm = document.getElementById("admissionForm");


if(admissionForm){


admissionForm.addEventListener("submit", function(e){


    e.preventDefault();



    // Collect form data

    let admission = {


        id: Date.now(),


        studentName:
        document.getElementById("studentName").value,


        dateOfBirth:
        document.getElementById("dob").value,


        gender:
        document.getElementById("gender").value,


        parentName:
        document.getElementById("parentName").value,


        phone:
        document.getElementById("phone").value,


        email:
        document.getElementById("email").value,


        classApplying:
        document.getElementById("classApplying").value,


        previousSchool:
        document.getElementById("previousSchool").value,


        information:
        document.getElementById("information").value,


        status:"Pending",


        dateSubmitted:
        new Date().toLocaleString()

    };




    // Get existing admissions

    let admissions =
    JSON.parse(localStorage.getItem("admissions")) || [];




    // Add new application

    admissions.push(admission);




    // Save admissions

    localStorage.setItem(
        "admissions",
        JSON.stringify(admissions)
    );




    alert(
        "Your admission application has been submitted successfully!"
    );



    // Clear form

    admissionForm.reset();



});


}
