const grandparent = document.querySelector("#grandparent");
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

// Capturing phase (top -> down)
grandparent.addEventListener("click", () => {
    console.log("capturing: grandparent");
}, true);

parent.addEventListener("click", () => {
    console.log("capturing: parent");
}, true);

child.addEventListener("click", () => {
    console.log("capturing: child");
}, true);

// Bubbling phase (target -> up)
child.addEventListener("click", () => {
    console.log("bubbling: child");
});

parent.addEventListener("click", () => {
    console.log("bubbling: parent");
});

grandparent.addEventListener("click", () => {
    console.log("bubbling: grandparent");
});