function showContent(section) {
    document.querySelectorAll('.sidebar .menu li').forEach(item => item.classList.remove('active'));

    document.getElementById('dashboard-content').style.display = 'none';
    document.getElementById('events-content').style.display = 'none';

    if (section === 'dashboard') {
        document.getElementById('dashboard-content').style.display = 'block';
        document.querySelector('.sidebar .menu li:nth-child(1)').classList.add('active');
    } else if (section === 'events') {
        document.getElementById('events-content').style.display = 'block';
        document.querySelector('.sidebar .menu li:nth-child(2)').classList.add('active');
    } else if (section === 'logout') {
        alert("Logging out...");
    }
}

function showProfile() {
    document.getElementById("profile-modal").style.display = "block";
}

function closeProfile() {
    document.getElementById("profile-modal").style.display = "none";
}
