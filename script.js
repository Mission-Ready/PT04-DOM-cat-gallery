const images = [
  { src: "images/face.jpg", name: "Handsome 1" },
  { src: "images/flufy.jpg", name: "Fluffy 1" },  
  { src: "images/pepper1.jpg", name: "Pepper 1" },
  { src: "images/pepper2.jpg", name: "Pepper 2" },
  { src: "images/pepper3.jpg", name: "Pepper 3" },
  { src: "images/pepper4.jpg", name: "Pepper 4" },
  { src: "images/pepper5.jpg", name: "Pepper 5" },
  { src: "images/snickers1.jpg", name: "Snickers 1" },
  { src: "images/snickers2.jpg", name: "Snickers 2" },
  { src: "images/snickers3.jpg", name: "Snickers 3" },
  { src: "images/snickers4.jpg", name: "Snickers 4" },
  { src: "images/snickers5.jpg", name: "Snickers 5" },
];

let currentIndex = 0;

// get elements by id for selected-Image, image-name, left-arrow and right arrow
// get elements by query selector all for .thumbnail
const selectedImage = document.getElementById("selected-image");
const imageName = document.getElementById("image-name");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const thumbnails = document.querySelectorAll(".thumbnail");

// to update the selected image and the displayed image name
function updateGallery() {
  selectedImage.src = images[currentIndex].src;
  imageName.innerHTML = images[currentIndex].name;
}

updateGallery();

// to change current index to the next one
// if at end of gallery, start from begining again
// call update gallery
function nextImage() {
  currentIndex++;
  if (currentIndex === images.length) {
    currentIndex = 0;
  }
  updateGallery();
}

// to change current index to the prevous one
// if at begining of gallery, change to end
// call update gallery
function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  updateGallery();
}

// change current index to selected thumbnail index
// call updateGallery
function selectThumbnail(index) {
    currentIndex = index
    updateGallery();
}

// add functions to elements by adding event listners or directly in the html

leftArrow.addEventListener("click", prevImage);
rightArrow.addEventListener("click", nextImage);

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => selectThumbnail(index))
})