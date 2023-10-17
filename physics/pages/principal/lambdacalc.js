import { materials } from "../../src/data/materials.js";

let measures = 0
let lambda_global = 0

function scientific_notation(num, fixedNum) {
    const string = JSON.stringify(num)
    const dotIndex = string.indexOf(".") >= 0 ? string.indexOf(".") : string.length
    const forcedInteger = string.replace(/\./g, "")

    for (let i = 0; i < forcedInteger.length + 1; i ++) {
        const dottedNumber = `${forcedInteger.slice(0, i)}.${forcedInteger.slice(i)}`
        const dotnum = parseFloat(dottedNumber)
        if (dotnum >= 1 && dotnum < 10) {
            return {
                num: dotnum.toFixed(fixedNum),
                exp: dotIndex - i
            };
        }
    }
}

function editMeasureItem(editMethod, index) {
    let shouldRender = true

    if (editMethod == "add") {
        measures += 1
    } else if (editMethod == "del" && measures > 1) {
        measures -= 1
    } else {
        shouldRender = false
    }

    if (shouldRender) {
        renderMeasures(editMethod, index)
    }
}

function renderMeasures(editMethod, index = measures - 1) {
    const list = document.getElementById("measures-list")

    if (editMethod == "add") {
        const previousTempInput = document.getElementById(`temp_${index - 1}`)
        const nextTemp = previousTempInput?.value ? previousTempInput?.value - 5 : undefined

        const container = document.createElement("div")
        container.classList.add("measure-container")
        
        const title = document.createElement("p")
        title.classList.add("primary")
        title.style = "color: #2e2e2e"
        title.innerHTML = `Istante ${index}`
        container.appendChild(title)




        //Definizione dei pulsanti e delleform
        const btns_space = document.createElement("div")
        btns_space.classList.add("btns-space")

        //Form su lunghezza e temperatura
        const data_space = document.createElement("div")
        data_space.classList.add("data-space")
        btns_space.appendChild(data_space)

        const temp_container = document.createElement("div")
        temp_container.classList.add("gray-container")

        const temp_indicator = document.createElement("p")
        temp_indicator.classList.add("secondary", "measure-indicator")
        temp_indicator.innerHTML = "T ="

        const celsius_indicator = document.createElement("p")
        celsius_indicator.classList.add("secondary", "measure-indicator")
        celsius_indicator.innerHTML = "°C"

        const temp_input = document.createElement("input")
        temp_input.maxLength = "2"
        if (nextTemp) {
            temp_input.value = nextTemp
        }
        temp_input.id = `temp_${index}`
        temp_input.classList.add("primary")

        temp_container.appendChild(temp_indicator)
        temp_container.appendChild(temp_input)
        temp_container.appendChild(celsius_indicator)

        const length_container = document.createElement("div")
        length_container.classList.add("gray-container")

        const length_indicator = document.createElement("p")
        length_indicator.classList.add("secondary", "measure-indicator")
        length_indicator.innerHTML = "Δl ="

        const mm_indicator = document.createElement("p")
        mm_indicator.classList.add("secondary", "measure-indicator")
        mm_indicator.innerHTML = "mm"

        const mm_exponent = document.createElement("p")
        mm_exponent.classList.add("secondary", "exponent")
        mm_exponent.innerHTML = "-2"

        const length_input = document.createElement("input")
        length_input.maxLength = "2"

        length_input.id = `length_${index}`
        length_input.classList.add("primary")
        length_container.appendChild(length_indicator)
        length_container.appendChild(length_input)
        length_container.appendChild(mm_indicator)
        length_container.appendChild(mm_exponent)

        data_space.appendChild(temp_container)
        data_space.appendChild(length_container)






        //Bottone di eliminazione
        const del_btn = document.createElement("div")
        del_btn.classList.add("del-btn")
        del_btn.onclick = () => {
            editMeasureItem("del", index)
        }

        const bin_icon = document.createElement("img")
        bin_icon.classList.add("bin-icon")
        bin_icon.src = "../../src/images/icons/bin.png"
        del_btn.appendChild(bin_icon)

        const del_text = document.createElement("p")
        del_text.classList.add("secondary")
        del_text.style = "color: #4e4e4e"
        del_text.innerHTML = "Elimina"
        del_btn.appendChild(del_text)
        
        btns_space.appendChild(del_btn)

        container.appendChild(btns_space)

        list.appendChild(container)
    } else if (editMethod == "del") {
        const renderedMeasures = list.children
        list.removeChild(renderedMeasures[index])

        for (let i = 0; i < measures; i ++) {
            const renderedMeasure = renderedMeasures[i]
            const p = renderedMeasure.children[0]
            const delBtn = renderedMeasure.children[1].children[1]
            const [
                temp_input,
                length_input
            ] = renderedMeasure.children[1].children[0].children

            temp_input.children[1].id = `temp_${i}`
            length_input.children[1].id = `length_${i}`

            delBtn.onclick = () => {
                editMeasureItem("del", i)
            }
            p.innerHTML = `Istante ${i}`
        }
    }
}




function reglin(points) {
    //La funzione si basa sulla formula: m = (n * Σ(xy) - Σx * Σy) / (n * Σ(x^2) - (Σx)^2)
    let sumX = 0
    let sumY = 0
    let sumXY = 0
    let sumX2 = 0

    for (const coord of points) {
        sumX += coord.x;
        sumY += coord.y;
        sumXY += coord.x * coord.y;
        sumX2 += coord.x ** 2;
    }

    const n = points.length
    const m = ( n * sumXY - sumX * sumY ) / ( n * sumX2 - sumX ** 2 )
    
    return m
}

function points_ends(points) {
    let temps = {
        min: 0,
        max: 0
    }
    let lengths = {
        min: 0,
        max: 0
    }
    
    points.forEach((point, index) => {
        if (temps.min > point.x || index == 0) {
            temps.min = point.x.toFixed(2)
        }

        if (temps.max < point.x || index == 0) {
            temps.max = point.x.toFixed(2)
        }

        if (lengths.min > point.y || index == 0) {
            lengths.min = point.y
        }

        if (lengths.max < point.y || index == 0) {
            lengths.max = point.y
        }
    })

    return {
        temps,
        lengths,
    }
}

function editMatPage() {
    const name_p = document.getElementById("mat-name")
    const desc_p = document.getElementById("mat-desc")
    const lambda_p2 = document.getElementById("mat-lambda")
    const mat_img = document.getElementById("mat-bg")

    console.log("")
    console.log("Confronto il lambda calcolato con quello di ogni materiale")
    console.log(`Ho una lista di ${materials.length} materiali. ( VEDI "MATERIALI E VALORI" )`)

    
    let sortedMaterials = JSON.parse(JSON.stringify(materials))
    sortedMaterials.sort((a, b) => {
        const c = lambda_global
        return Math.abs(a.lambda - c) - Math.abs(b.lambda - c)
    })

    const material = sortedMaterials[0]
    const {
        name,
        desc,
        src
    } = material
    const img_src = `../../src/images/materials/${src}.jpg`

    console.log(`Il valore del lambda calcolato è ${lambda_global}. Il materiale "${name}" ha un valore del lambda pari a ${material.lambda}.`)
    console.log(`Questo è il materiale con il valore del lambda più vicino a quello calcolato.`)

    name_p.innerHTML = name
    desc_p.innerHTML = desc
    lambda_p2.innerHTML = `Coefficiente di dilatazione lineare: ${material.lambda}`

    if (mat_img.src !== img_src) {
        mat_img.src = img_src
    }
}

function getMeasures() {
    if (measures > 1) {
        let points = []
        for (let i = 0; i < measures; i ++) {
            const temp_input = document.getElementById(`temp_${i}`)
            const length_input = document.getElementById(`length_${i}`)
            points.push({
                x: Number(temp_input.value || 1),
                y: Number(length_input.value || 1) / 100000
            })
        }

        const lambda = reglin(points)
        const stats = points_ends(points)
        const scientificNotation_lambda = scientific_notation(lambda, 2)

        console.log("CALCOLO DEL LAMBDA - FLAVIO BUCCIARELLI")
        console.log("")
        console.log(`Dal client (dispositivo) ricevo ${measures} misurazioni.`)
        console.log("")
        console.log(`Punti nel grafico: ${JSON.stringify(points)}.`)
        console.log("")
        console.log("Inizio a calcolare il lambda")
        console.log("Con i dati dei punti, calcolo il coefficiente angolare della retta di regressione.")
        console.log(`Lambda = ${lambda}`)

        const measures_num_p = document.getElementById("measures-num")
        const temp_range_p = document.getElementById("temp-range")
        const length_range_p = document.getElementById("length-range")
        const lambda_p = document.getElementById("lambda-val")
        const lambda_exponent_p = document.getElementById("lambda-exponent")
        const matbtn = document.getElementById("matbtn")

        lambda_global = lambda

        measures_num_p.classList.remove("unappearing")
        temp_range_p.classList.remove("unappearing")
        length_range_p.classList.remove("unappearing")
        lambda_p.classList.remove("unappearing")
        lambda_exponent_p.classList.remove("unappearing")
        matbtn.classList.remove("unappearing")
        
        measures_num_p.innerHTML = `> ${measures} Misurazioni inserite.`
        temp_range_p.innerHTML = `> Temperature comprese tra ${stats.temps.min} e ${stats.temps.max} gradi centigradi.`
        length_range_p.innerHTML = `> Variazioni di lunghezza comprese tra i ${(stats.lengths.min * 10 ** 5).toFixed(2)} e ${(stats.lengths.max * 10 ** 5).toFixed(2)} centesimi di millimetro.`
        lambda_p.innerHTML = `λ = ${scientificNotation_lambda.num} x 10`
        lambda_exponent_p.innerHTML = scientificNotation_lambda.exp
        
        editMatPage()
    }
}





function createTableItem({name, lambda}) {
    const item = document.createElement("div")
    item.classList.add("listitem")



    const name_p = document.createElement("p")
    const lambda_p = document.createElement("p")

    name_p.classList.add("tertiary")
    name_p.innerHTML = name

    lambda_p.classList.add("tertiary")
    lambda_p.innerHTML = `λ = ${lambda}`



    const line = document.createElement("div")

    line.classList.add("listline")



    item.appendChild(name_p)
    item.appendChild(lambda_p)
    item.appendChild(line)

    return item
}

function rendermaterials() {
    const table = document.getElementById("mats_table")
    materials.map(material => {
        table.appendChild(createTableItem(material))
    })
}

function editMaterialsNumber() {
    const matsnum_p = document.getElementById("mats_num")
    matsnum_p.innerHTML = `${materials.length} materiali trovati`
}




function getto_material() {
    const page = document.getElementById("mat_page")

    page.classList.add("opened")
}

function goback() {
    const page = document.getElementById("mat_page")
    
    page.classList.remove("opened")
}




function bindfunctions() {
    const addBtn = document.getElementById("addbtn")
    const calcbtn = document.getElementById("calcbtn")
    const backbtn = document.getElementById("back-btn")
    const matbtn = document.getElementById("matbtn")

    addBtn.onclick = () => {
        editMeasureItem("add")
    }

    calcbtn.onclick = getMeasures
    matbtn.onclick = getto_material
    backbtn.onclick = goback
}

//Al primo render
bindfunctions()
rendermaterials()
editMeasureItem("add")
editMaterialsNumber()