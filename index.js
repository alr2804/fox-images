import { registerImage } from "./lazy.js";

//Function that generates random number between the limits of the API
const random = () => {
    return Math.floor(Math.random()*(122-1)) + 1
}

//Use DOM manipulation to create the images
const createImageNode = () => {

    //Create the image container
    const container = document.createElement("div");
    container.id = "container"

    //Create the image inside
    const image = document.createElement("img");
    image.width = "300";

    //Save the srtc info
    image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`; 

    container.appendChild(image);
    
    return container;
}

//select the nodes from HTML
const mountNode = document.getElementById("images-container");
const addButton = document.getElementById("addButton");
const clearButton = document.getElementById("clearButton");


//functions for the buttons
const addImage = () => {
    const newImage = createImageNode();

    mountNode.append(newImage);
    registerImage(newImage);
}

//Remove all child nodes
const clearImages = () => {
    while(mountNode.firstChild){
        mountNode.removeChild(mountNode.firstChild);
    }
}


addButton.addEventListener("click", addImage);
clearButton.addEventListener("click", clearImages);