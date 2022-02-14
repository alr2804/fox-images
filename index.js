import { registerImage } from "./lazy.js";


const random = () => {
    return Math.floor(Math.random()*(122-1)) + 1
}


const createImageNode = () => {

    const container = document.createElement("div");
    container.id = "container"


    const image = document.createElement("img");
    image.width = "300";


    image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`; 

    container.appendChild(image);
    
    return container;
}


const newContainer = createImageNode();
const mountNode = document.getElementById("images-container");



const addButton = document.querySelector("button");
const addImage = () => {
    const newImage = createImageNode();

    mountNode.append(newImage);
    registerImage(newImage);
}

addButton.addEventListener("click", addImage);
