const isIntersecting = (entry) => {
    return entry.isIntersecting;
};

const loadImage = (entry) => {
    const container = entry.target;
    const image = container.querySelector("img");

    image.src = image.dataset.src;
    

    console.log("creado ")
    observer.unobserve(container);

};

const observer = new IntersectionObserver( (entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage);
});

export const registerImage = (image) => {
    observer.observe(image);
};