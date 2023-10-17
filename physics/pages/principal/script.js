let shownpage = "calc"

function getto(path) {
    document.location.href = path
}

function showpage(id) {
    //Da "id" dipende la sezione scelta
    //Nascondo la sezione attuale e mostro quella scelta
    const chosenSection = document.getElementById(id)
    const lastSection = document.getElementById(shownpage)

    lastSection.style.display = "none"
    chosenSection.style.display = "block"

    //Modifico lo stile del componente della dashboard relativo alla sezione scelta
    const chosenDashSection = document.getElementById(`dash_${id}`)
    const lastDashSection = document.getElementById(`dash_${shownpage}`)
    lastDashSection.classList.remove("chosenli")
    chosenDashSection.classList.add("chosenli")
    
    //Aggiorno la variabile con cui ci si riferisce alla pagina visualizzata dall'utente 
    shownpage = id
}