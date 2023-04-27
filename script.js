const pink = document.getElementById("pink");
const blue = document.getElementById("blue");
const yello = document.getElementById("yello");
const orange = document.getElementById("orange");
const myImg = document.getElementById("myImg");
const loader = document.getElementById("loader");

// Get the file input element
const fileInput = document.getElementById("file-input");
const imagePreview = document.getElementById("imagePreview");

const body = document.body;

pink.addEventListener("click", () => {
  loader.style.display = "block"; // show loader
  myImg.style.display = "none"; // hide image
  setTimeout(() => {
    myImg.src = "./images/Pink umbrella.png";
    body.style.backgroundColor = "#f4dff7";
    myImg.style.display = "block"; // show image
    loader.style.display = "none"; // hide loader after image is loaded
  }, 1000); // delay for 1 second
});

blue.addEventListener("click", () => {
  loader.style.display = "block"; // show loader
  myImg.style.display = "none"; // hide image
  setTimeout(() => {
    myImg.src = "./images/Blue umbrella.png";
    body.style.backgroundColor = "#e6f7fc";
    myImg.style.display = "block"; // show image
    loader.style.display = "none"; // hide loader after image is loaded
  }, 1000); // delay for 1 second
});

yello.addEventListener("click", () => {
  loader.style.display = "block"; // show loader
  myImg.style.display = "none"; // hide image
  setTimeout(() => {
    myImg.src = "./images/Yello umbrella.png";
    body.style.backgroundColor = "#fffbee";
    myImg.style.display = "block"; // show image
    loader.style.display = "none"; // hide loader after image is loaded
  }, 1000); // delay for 1 second
});

orange.addEventListener("click", () => {
  loader.style.display = "block"; // show loader
  myImg.style.display = "none"; // hide image
  setTimeout(() => {
    myImg.src = "./images/Yello umbrella.png";
    body.style.backgroundColor = "#fef5eb";
    myImg.style.display = "block"; // show image
    loader.style.display = "none"; // hide loader after image is loaded
  }, 1000); // delay for 1 second
});

// Listen for file input change event
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      imagePreview.innerHTML = `<img src="${reader.result}" alt="Image preview">`;
    });
    reader.readAsDataURL(file);
  }
});
