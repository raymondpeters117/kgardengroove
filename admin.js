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

loadApplications()
    // ==========================
// DISPLAY ADMISSIONS
// ==========================


function loadAdmissions(){


let admissions =
JSON.parse(localStorage.getItem("admissions")) || [];


let box =
document.getElementById("applications");


box.innerHTML="";


if(admissions.length === 0){

box.innerHTML =
"<p>No applications yet.</p>";

return;

}



admissions.forEach((student,index)=>{


box.innerHTML += `

<div class="application-card">

<h3>${student.studentName}</h3>

<p>
<b>Date of Birth:</b>
${student.dateOfBirth}
</p>


<p>
<b>Gender:</b>
${student.gender}
</p>


<p>
<b>Parent:</b>
${student.parentName}
</p>


<p>
<b>Phone:</b>
${student.phone}
</p>


<p>
<b>Class:</b>
${student.classApplying}
</p>


<p>
<b>Status:</b>
${student.status}
</p>


</div>

`;

});


}





// ==========================
// ADD STUDENTS FROM APPLICATIONS
// ==========================


function loadStudents(){


let admissions =
JSON.parse(localStorage.getItem("admissions")) || [];


let list =
document.getElementById("studentList");


list.innerHTML="";


admissions.forEach(student=>{


list.innerHTML += `

<li>

${student.studentName}

-
${student.classApplying}

</li>


`;


});


}






// ==========================
// IMAGE UPLOAD
// ==========================


function addImage(){


let file =
document.getElementById("imageUpload").files[0];


if(!file){

alert("Select an image first");

return;

}



let reader = new FileReader();



reader.onload=function(e){


let images =
JSON.parse(localStorage.getItem("gallery")) || [];



images.push(e.target.result);



localStorage.setItem(
"gallery",
JSON.stringify(images)
);



displayImages();


};



reader.readAsDataURL(file);



}





function displayImages(){


let images =
JSON.parse(localStorage.getItem("gallery")) || [];


let gallery =
document.getElementById("galleryList");


gallery.innerHTML="";


images.forEach(img=>{


gallery.innerHTML += `

<img src="${img}" width="150">

`;

});


}






// LOAD DATA WHEN PAGE OPENS

loadAdmissions();

loadStudents();

displayImages();;
