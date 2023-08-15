function animationBox() {
    const box = document.querySelector("#box");
    const button = document.querySelector("#btnAnimation");

    if (button.className === "play") {
        box.style.animation = "movement 3s linear infinite";
        button.className = "stop";
        button.innerHTML = `
            <span class="material-symbols-rounded">stop</span>
            STOP
        `
    }
    else {
        box.style.animation = false;
        button.className = "play";
        button.innerHTML = `
            <span class="material-symbols-rounded">play_arrow</span>
            PLAY
        `
    }
}