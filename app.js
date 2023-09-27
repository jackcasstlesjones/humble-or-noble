const apiKey = "5cebdee27ede4449b345b2a763fd0068";
const imgDiv = document.getElementById("image-div");
const titleDiv = document.getElementById("title-div");

async function getData() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`,
    { mode: "cors" }
  );
  const myData = await response.json();
  imageSource = myData.recipes[0].image;
  createImg(imageSource);
  const recipeTitle = myData.recipes[0].title;
  titleDiv.textContent = recipeTitle;
}

function createImg(imgSrc) {
  imgDiv.innerHTML = "";
  const newImg = document.createElement("img");
  newImg.src = imgSrc;
  imgDiv.appendChild(newImg);
}

getData();
