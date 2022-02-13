
const createImageNode = () => {

    const container = document.createElement("div");
    container.id = "container"


    const image = document.createElement("img");
    image.width = "300";
    image.src = "https://randomfox.ca/images/12.jpg";

    container.appendChild(image);
    
    return container;
}


const newContainer = createImageNode();
const mountNode = document.getElementById("images-container");

mountNode.append(newContainer , createImageNode(), createImageNode());