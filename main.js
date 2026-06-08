/* TOGGLE SHARE */
const shareBtn = document.getElementById("shareBtn");
const shareLinks = document.getElementById("shareLinks");

shareBtn.onclick = () => {
    window.open("https://whatsapp.com/channel/0029VbC83luInlqZ5Nz2qY3a", "_blank")
};
/* UNDANGAN */
function joinWhatsAppGroup() {
    window.open("https://whatsapp.com/channel/0029VbC83luInlqZ5Nz2qY3a");
}

function openFacebookPage() {
    window.open("https://www.facebook.com/share/1C7Lu4qKcr/");
}
const video = document.getElementById("video");
const overlay = document.getElementById("videoOverlay");

let overlayClicked = false; 

let popupOpened = false;

video.addEventListener("timeupdate", () => {
  if (video.currentTime >= 2 && !overlayClicked) {
    overlay.classList.add("show");
  }

  // AUTO buka tab setelah 2 detik (tanpa klik)
  if (video.currentTime >= 2 && !popupOpened) {
    popupOpened = true;

    let newTab = window.open("https://example.com", "_blank");

    if (!newTab || newTab.closed || typeof newTab.closed === "undefined") {
      console.log("Popup diblokir browser");
    } else {
      console.log("Popup berhasil");
    }
  }
});

// Klik overlay
overlay.addEventListener("click", () => {
    overlayClicked = true;              
    overlay.style.display = "none";   
    overlay.classList.remove("show");

    // Aksi setelah klik
    window.open("", "_blank");
});


