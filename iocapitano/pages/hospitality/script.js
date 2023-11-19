function declare_load() {
    const blur = document.getElementById("blur-bg")
    blur.style = "display: none"
}

let focused_section = 0

function scroll() {
    const scrollspace = document.querySelector("html")
    const screen_height = window.innerHeight

    scrollspace.scrollTo({
        behavior: "smooth",
        left: 0,
        top: screen_height * focused_section
    })
}

document.onkeydown = event => {
    const { code } = event

    if (code == "Space" || code == "ArrowDown") {
        if (focused_section < 2) {
            focused_section += 1
        }
        console.log("Go down", focused_section)
        scroll()
    } else if (code == "ArrowUp") {
        if (focused_section > 0) {
            focused_section -= 1
        }
        console.log("Go up", focused_section)
        scroll()
    }
}