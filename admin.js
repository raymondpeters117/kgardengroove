// ======================================
// CHECK LOGIN
// ======================================

if(localStorage.getItem("loggedIn") !== "true"){

    window.location.href="admin-login.html";

}


// ======================================
// USER DETAILS
// ======================================

const username = localStorage.getItem("username");
const role = localStorage.getItem("role");



const welcome = document.getElementById("welcome");

if(welcome){

    welcome.innerHTML =
    `Welcome ${username} (${role})`;

}



// ======================================
// ROLE PERMISSIONS
// ======================================

window.onload=function(){


if(role==="secretary"){


hideSection("gallery");
hideSection("students");


hideLink("galleryLink");
hideLink("studentLink");


}



if(role==="bursar"){


hideSection("announcements");
hideSection("gallery");
hideSection("students");
hideSection("messages");


hideLink("galleryLink");
hideLink("studentLink");


}



if(role==="teacher"){


hideSection("announcements");
hideSection("gallery");
hideSection("admissions");
hideSection("messages");


hideLink("galleryLink");
hideLink("admissionLink");


}



if(role==="librarian"){


hideSection("announcements");
hideSection("gallery");
hideSection("students");
hideSection("admissions");
hideSection("messages");


hideLink("galleryLink");
hideLink("studentLink");
hideLink("admissionLink");


}



if(role==="ict"){


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
// HIDE FUNCTIONS
// ======================================


function hideSection(id){

let element=document.getElementById(id);

if(element){

element.style.display="none";

}

}



function hideLink(id){

let element=document.getElementById(id);

if(element){

element.style.display="none";

}

}





// ======================================
// ADMISSION DISPLAY
// ======================================


function loadAdmissions(){


let container =
document.getElementById("applications");


if(!container) return;



let admissions =
JSON.parse(localStorage.getItem("admissions")) || [];



container.innerHTML="";



if(admissions.length===0){


container.innerHTML=
"<p>No admission applications yet.</p>";


return;


}




admissions.forEach((student,index)=>{


container.innerHTML +=`


<div class="application-card">


<h3>${student.studentName}</h3>


<p>
<b>Class:</b>
${student.classApplying}
</p>


<p>
<b>Gender:</b>
${student.gender}
</p>


<p>
<b>Date of Birth:</b>
${student.dob}
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
<b>Email:</b>
${student.email}
</p>


<p>
<b>Previous School:</b>
${student.previousSchool}
</p>


<p>
<b>Information:</b>
${student.information}
</p>


<p>
<b>Status:</b>
${student.status}
</p>


<p>
<b>Date Submitted:</b>
${student.dateSubmitted}
</p>



<button onclick="deleteAdmission(${index})">

Delete

</button>


</div>


`;



});



}





function deleteAdmission(index){


let admissions =
JSON.parse(localStorage.getItem("admissions")) || [];



admissions.splice(index,1);



localStorage.setItem(
"admissions",
JSON.stringify(admissions)
);



loadAdmissions();


}





// ======================================
// STUDENTS
// ======================================


function loadStudents(){


let list =
document.getElementById("studentList");


if(!list)return;



let admissions =
JSON.parse(localStorage.getItem("admissions")) || [];



list.innerHTML="";



admissions.forEach(student=>{


list.innerHTML +=`


<li>

${student.studentName}
-
${student.classApplying}

</li>


`;


});



}







// ======================================
// GALLERY IMAGE UPLOAD
// ======================================


function addImage(){


let file =
document.getElementById("imageUpload").files[0];



if(!file){

alert("Please select an image");

return;

}



let reader=new FileReader();



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


let gallery =
document.getElementById("galleryList");


if(!gallery)return;



let images =
JSON.parse(localStorage.getItem("gallery")) || [];



gallery.innerHTML="";



images.forEach(image=>{


gallery.innerHTML +=`

<img src="${image}" width="150">

`;

});


}







// ======================================
// LOGOUT
// ======================================


function logout(){


localStorage.removeItem("loggedIn");

localStorage.removeItem("username");

localStorage.removeItem("role");


window.location.href="admin-login.html";


}
