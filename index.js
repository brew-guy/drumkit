// Sound generation handler
const soundHandler = (key) => {
    switch (key) {
        case "w":
            playSound("./sounds/tom-1.mp3");
            break;
        case "a":
            playSound("./sounds/tom-2.mp3");
            break;
        case "s":
            playSound("./sounds/tom-3.mp3");
            break;
        case "d":
            playSound("./sounds/tom-4.mp3");
            break;
        case "j":
            playSound("./sounds/snare.mp3");
            break;
        case "k":
            playSound("./sounds/crash.mp3");
            break;
        case "l":
            playSound("./sounds/kick-bass.mp3");
            break;

        default:
            console.log(key);
            break;
    }
}

// Animation generation handler
const animationHandler = (key) => {
    let activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(() => { activeButton.classList.remove("pressed") }, 100);
}


// Website button click event listeners
document.querySelectorAll(".drum")
    .forEach(button => {
        button.addEventListener("click", (event) => {
            soundHandler(event.target.innerHTML);
            animationHandler(event.target.innerHTML);
        });
    });


// Keyboard button event listener
document.addEventListener("keydown", (event) => {
    soundHandler(event.key);
    animationHandler(event.key);
});

// Play sound function
playSound = (file) => {
    let sound = new Audio(file);
    sound.play();
}