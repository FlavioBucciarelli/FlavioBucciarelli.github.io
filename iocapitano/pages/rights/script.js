function positionblock() {
    const offsetheight = document.body.scrollHeight
    const article = document.querySelector("html")

    const greyBlock = document.createElement("div")
    greyBlock.style = `width: 100%; height: 60vh; background-color: #F3F3F3; position: absolute; top: calc(${offsetheight}px - 60vh)`

    article.appendChild(greyBlock)
}

setTimeout(() => {
    positionblock()
}, 300);