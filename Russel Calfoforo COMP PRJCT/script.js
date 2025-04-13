// Popup logic
const modal = document.getElementById("popup-modal");
const modalImg = document.getElementById("popup-img");
const images = document.querySelectorAll(".popup-image");
const closeBtn = document.querySelector(".close-btn");

images.forEach(img => {
  img.addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Close modal when clicking outside the image
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

