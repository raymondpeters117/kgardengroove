console.log("Admission JS Loaded");


const admissionForm = document.getElementById("admissionForm");


if(!admissionForm){

    console.log("Form not found");

}
else{


admissionForm.addEventListener("submit", function(e){


e.preventDefault();


console.log("Submit button clicked");



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



console.log(admission);



let admissions =
JSON.parse(localStorage.getItem("admissions")) || [];



admissions.push(admission);



localStorage.setItem(
"admissions",
JSON.stringify(admissions)
);



console.log(
"Saved:",
localStorage.getItem("admissions")
);



alert("Application saved successfully");


admissionForm.reset();


});


}
