function scroll_toend() {
    const scroll = document.querySelector("html")
    scroll.scrollTo({
        behavior: "smooth",
        top: scroll.offsetHeight,
        left: 0
    })
}

function open_page(page) {
    const link = `../${page}/index.html`
    document.location.href = link
}

window.onload = () => {
    const html_ref = document.querySelector("html")
    html_ref.scrollTo({left: 0})
    const didPlayAnimation = sessionStorage.getItem("animationPlayed")
    console.log(didPlayAnimation, "???", didPlayAnimation === "true")

    if (didPlayAnimation !== "true") {
        const bg = document.getElementById("bg")
        const credits = document.getElementById("credits-canvas")
        credits.style.display = "flex"
        bg.classList.add("animating-bg")
        sessionStorage.setItem("animationPlayed", "true")
        console.log("Setting item.", sessionStorage.getItem("animationPlayed"))
    }
}