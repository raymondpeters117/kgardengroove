/*=====================================
    ANNOUNCEMENTS SYSTEM
=====================================*/

const STORAGE_KEY = "announcements";

/* Get announcements */
function getAnnouncements() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (error) {
        return [];
    }
}

/* Save announcements */
function saveAnnouncements(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

/* Add announcement */
function addAnnouncement() {

    const title = document
        .getElementById("announcementTitle")
        .value
        .trim();

    const text = document
        .getElementById("announcementText")
        .value
        .trim();

    if (!title || !text) {
        alert("Please fill in all fields.");
        return;
    }

    let announcements = getAnnouncements();

    announcements.unshift({
        id: Date.now(),
        title,
        text,
        date: new Date().toLocaleDateString()
    });

    saveAnnouncements(announcements);

    document.getElementById("announcementTitle").value = "";
    document.getElementById("announcementText").value = "";

    loadAnnouncements();
    updateNewsTicker();

    alert("Announcement published successfully!");
}

/* Load announcements */
function loadAnnouncements() {

    const box = document.getElementById("announcementList");

    if (!box) return;

    const announcements = getAnnouncements();

    if (announcements.length === 0) {

        box.innerHTML = `
            <p class="empty-message">
                No announcements available.
            </p>
        `;

        return;
    }

    box.innerHTML = announcements.map(item => `
        <div class="announcement-card">

            <h3>${item.title}</h3>

            <p>${item.text}</p>

            <small>${item.date}</small>

            <button
                class="delete-btn"
                onclick="deleteAnnouncement(${item.id})">
                Delete
            </button>

        </div>
    `).join("");
}

/* Delete announcement */
function deleteAnnouncement(id) {

    if (!confirm("Delete this announcement?")) return;

    let announcements = getAnnouncements();

    announcements = announcements.filter(item => item.id !== id);

    saveAnnouncements(announcements);

    loadAnnouncements();
    updateNewsTicker();
}

/* News ticker */
function updateNewsTicker() {

    const ticker = document.getElementById("newsTicker");

    if (!ticker) return;

    const announcements = getAnnouncements();

    if (announcements.length === 0) {

        ticker.innerHTML = "📢 No new announcements.";

        return;
    }

    ticker.innerHTML = announcements
        .map(item => `📢 ${item.title} - ${item.text}`)
        .join(" &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; ");
}

/* Initialize */
document.addEventListener("DOMContentLoaded", () => {

    loadAnnouncements();
    updateNewsTicker();

});
