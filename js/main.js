const app = document.getElementById("typewriter")
const typeWriter = new Typewriter(app, {
    loop: true,
    delay: 75
});

typeWriter
 .typeString("Capital of Sun")
 .pauseFor(200)
 .start();