function create_navbar() {
    const html_ref = document.getElementById("navbar")
    const firstName = html_ref.getAttribute("first-name")
    const colormode = html_ref.getAttribute("color-mode")

    const backgroundColor = colormode == "light" ? "#FFFFFF60" : "#00000020"
    const textColor = colormode == "light" ? "black" : "white"

    html_ref.classList.add("container")
    html_ref.style = `background-color: ${backgroundColor}; z-index: 2`

    const backspace = document.createElement("button")
    backspace.onclick = () => history.back()
    const backImg = document.createElement("img")
    backImg.classList.add("back-img")
    backImg.src = `../../imgs/backarrow-${colormode}.png`
    const backtext = document.createElement("h3")
    backtext.style = `color: ${textColor}; margin-bottom: 0`
    backtext.innerHTML = "Indietro"
    backspace.appendChild(backImg)
    backspace.appendChild(backtext)

    const name = document.createElement("h3")
    name.innerHTML = `~ ${firstName}`
    name.style = `color: ${textColor}; margin-bottom: 0`

    html_ref.appendChild(backspace)
    html_ref.appendChild(name)
}

window.onload = () => {
    create_navbar()
}