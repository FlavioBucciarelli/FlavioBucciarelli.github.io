function edit_playback() {
    const vid = document.getElementById("bg-vid")
    vid.playbackRate = .8
}

window.onkeydown = () => {
    const section = document.getElementById("blur-section-2")
    section.classList.toggle("blur-section-2-show")
}