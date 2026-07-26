// ==========================
// MOBILE MENU
// ==========================

const menuToggle =
document.getElementById("menuToggle");


const navLinks =
document.getElementById("navLinks");


if(menuToggle){

menuToggle.onclick=function(){

navLinks.classList.toggle("show");

}

}



// ==========================
// ADMISSION FORM
// ==========================


const admissionForm =
document.getElementById("admissionForm");



if(admissionForm){


admissionForm.addEventListener(
"submit",
function(e){


e.preventDefault();



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


status:
"Pending",


dateSubmitted:
new Date().toLocaleString()


};



// GET OLD DATA

let admissions =
JSON.parse(
localStorage.getItem("admissions")
) || [];



// ADD NEW APPLICATION

admissions.push(admission);



// SAVE

localStorage.setItem(
"admissions",
JSON.stringify(admissions)
);



console.log(
"Saved Admission:",
admission
);



alert(
"Application submitted successfully!"
);



admissionForm.reset();



});


}



console.log(
"Admission JS Loaded"
);
