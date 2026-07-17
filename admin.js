// ================================
// ANNOUNCEMENTS SYSTEM
// ================================


function addAnnouncement(){


let title =
document.getElementById("announcementTitle").value.trim();


let text =
document.getElementById("announcementText").value.trim();



if(title === "" || text === ""){

alert("Please fill all fields");

return;

}



let announcements =
JSON.parse(localStorage.getItem("announcements")) || [];



announcements.unshift({

title:title,

text:text,

date:new Date().toLocaleDateString()

});



localStorage.setItem(
"announcements",
JSON.stringify(announcements)
);



alert("Announcement published successfully");


document.getElementById("announcementTitle").value="";
document.getElementById("announcementText").value="";


loadAnnouncements();


}




function loadAnnouncements(){


let box =
document.getElementById("announcementList");


if(!box) return;



let announcements =
JSON.parse(localStorage.getItem("announcements")) || [];



box.innerHTML="";



announcements.forEach((item,index)=>{


box.innerHTML += `

<div class="announcement-card">

<h3>${item.title}</h3>

<p>${item.text}</p>

<small>${item.date}</small>

<br>

<button onclick="deleteAnnouncement(${index})">
Delete
</button>


</div>

`;

});


}





function deleteAnnouncement(index){


let announcements =
JSON.parse(localStorage.getItem("announcements")) || [];



announcements.splice(index,1);



localStorage.setItem(

"announcements",

JSON.stringify(announcements)

);



loadAnnouncements();


}



loadAnnouncements();