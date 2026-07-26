console.log("Admission JS loaded");

const form = document.getElementById("admissionForm");


form.addEventListener("submit", function(e){

    e.preventDefault();


    let admission = {

        studentName:
        document.getElementById("studentName").value,

        dob:
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

        status:"Pending"

    };


    console.log(admission);


    let data =
    JSON.parse(localStorage.getItem("admissions")) || [];


    data.push(admission);


    localStorage.setItem(
        "admissions",
        JSON.stringify(data)
    );


    alert("Saved successfully");


});
