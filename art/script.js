const blocks = [
    {w: 8, h: 8, x: 0, y: 0},
    {w: 12, h: 8, x: 8, y: 0},
    {w: 16, h: 12, x: 20, y: 0},
    {w: 12, h: 8, x: 36, y: 0},
    {w: 10, h: 8, x: 48, y: 0},
    {w: 14, h: 14, x: 58, y: 0},
    {w: 10, h: 8, x: 72, y: 0},
    {w: 10, h: 8, x: 82, y: 0},
    {w: 8, h: 8, x: 92, y: 0},

    {w: 4, h: 16, x: 96, y: 8},
    {w: 6, h: 14, x: 94, y: 24},
    {w: 4, h: 12, x: 96, y: 38},
    {w: 7, h: 14, x: 93, y: 50},
    {w: 4, h: 6, x: 96, y: 64},
    {w: 4, h: 6, x: 96, y: 70},
    {w: 6, h: 12, x: 94, y: 76},
    {w: 4, h: 12, x: 96, y: 88},
    
    {w: 10, h: 8, x: 86, y: 92},
    {w: 8, h: 8, x: 78, y: 92},
    {w: 10, h: 8, x: 68, y: 92},
    {w: 10, h: 4, x: 68, y: 88},
    {w: 12, h: 8, x: 56, y: 92},
    {w: 10, h: 8, x: 46, y: 92},
    {w: 12, h: 12, x: 34, y: 88},
    {w: 10, h: 8, x: 24, y: 92},
    {w: 5, h: 8, x: 19, y: 92},
    {w: 5, h: 8, x: 14, y: 92},
    {w: 8, h: 8, x: 6, y: 92},
    {w: 6, h: 14, x: 0, y: 86},

    {w: 4, h: 16, x: 0, y: 70},
    {w: 4, h: 16, x: 0, y: 54},
    {w: 4, h: 14, x: 0, y: 40},
    {w: 6, h: 14, x: 0, y: 26},
    {w: 6, h: 18, x: 0, y: 8},

    {w: 10, h: 8, x: 6, y: 8},
    {w: 4, h: 8, x: 16, y: 8},
    {w: 8, h: 8, x: 20, y: 12},
    {w: 8, h: 8, x: 28, y: 12},
    {w: 8, h: 8, x: 36, y: 8},
    {w: 8, h: 8, x: 44, y: 8},
    {w: 6, h: 6, x: 52, y: 8},
    {w: 10, h: 8, x: 52, y: 14},
    {w: 10, h: 8, x: 62, y: 14},
    {w: 8, h: 8, x: 72, y: 8},
    {w: 10, h: 6, x: 80, y: 8},
    {w: 6, h: 6, x: 90, y: 8},

    {w: 4, h: 10, x: 92, y: 14},
    {w: 2, h: 14, x: 92, y: 24},
    {w: 6, h: 12, x: 90, y: 38},
    {w: 3, h: 14, x: 90, y: 50},
    {w: 8, h: 12, x: 88, y: 64},
    {w: 8, h: 12, x: 86, y: 76},
    {w: 18, h: 4, x: 78, y: 88},

    {w: 12, h: 8, x: 74, y: 80},
    {w: 14, h: 8, x: 60, y: 80},//54
    {w: 14, h: 4, x: 54, y: 88},
    {w: 8, h: 4, x: 46, y: 88},
    {w: 10, h: 6, x: 38, y: 82},
    {w: 16, h: 6, x: 22, y: 82},
    {w: 12, h: 4, x: 22, y: 88},
    {w: 12, h: 10, x: 10, y: 82},
    {w: 4, h: 12, x: 6, y: 80},

    {w: 2, h: 20, x: 4, y: 66},
    {w: 4, h: 26, x: 4, y: 40},
    {w: 4, h: 24, x: 6, y: 16},

    {w: 10, h: 8, x: 10, y: 16},
    {w: 10, h: 6, x: 20, y: 20},
    {w: 8, h: 6, x: 30, y: 20},
    {w: 10, h: 4, x: 36, y: 16},
    {w: 6, h: 4, x: 46, y: 16},
    {w: 6, h: 8, x: 46, y: 20},
    {w: 6, h: 6, x: 52, y: 22},
    {w: 8, h: 6, x: 58, y: 22},
    {w: 8, h: 6, x: 66, y: 22},
    {w: 8, h: 6, x: 72, y: 16},
    {w: 12, h: 6, x: 80, y: 14},
    {w: 6, h: 6, x: 86, y: 20},

    {w: 4, h: 12, x: 88, y: 26},
    {w: 4, h: 16, x: 86, y: 38},
    {w: 6, h: 10, x: 84, y: 54},
    {w: 6, h: 12, x: 82, y: 64},

    {w: 10, h: 4, x: 76, y: 76},
    {w: 6, h: 4, x: 70, y: 76},
    {w: 10, h: 4, x: 60, y: 76},
    {w: 12, h: 16, x: 48, y: 72},
    {w: 14, h: 8, x: 34, y: 74},
    {w: 16, h: 8, x: 18, y: 74},
    {w: 8, h: 8, x: 10, y: 74},
    {w: 4, h: 14, x: 6, y: 66},
    {w: 4, h: 26, x: 8, y: 40},
    {w: 4, h: 16, x: 10, y: 24},//90
    {w: 6, h: 12, x: 14, y: 24},

    {w: 6, h: 6, x: 20, y: 26},
    {w: 12, h: 6, x: 26, y: 26},
    {w: 8, h: 14, x: 38, y: 20},
    {w: 8, h: 14, x: 46, y: 28},//95
    {w: 8, h: 8, x: 54, y: 28},
    {w: 12, h: 6, x: 62, y: 28},
    {w: 6, h: 12, x: 74, y: 22},
    {w: 6, h: 18, x: 80, y: 20},
    {w: 2, h: 12, x: 86, y: 26},

    {w: 6, h: 16, x: 80, y: 38},//101
    {w: 6, h: 10, x: 78, y: 54},
    {w: 8, h: 12, x: 74, y: 64},
    {w: 8, h: 12, x: 66, y: 64},
    {w: 6, h: 12, x: 60, y: 64},
    {w: 12, h: 12, x: 48, y: 60},
    {w: 8, h: 10, x: 40, y: 64},
    {w: 10, h: 8, x: 30, y: 66},
    {w: 10, h: 8, x: 20, y: 66},
    {w: 10, h: 8, x: 10, y: 66},

    {w: 4, h: 8, x: 12, y: 58},//111
    {w: 2, h: 18, x: 12, y: 40},
    {w: 6, h: 22, x: 14, y: 36},
    {w: 6, h: 16, x: 20, y: 32},
    {w: 6, h: 12, x: 26, y: 32},
    {w: 6, h: 12, x: 32, y: 32},
    {w: 8, h: 12, x: 38, y: 34},
    {w: 8, h: 12, x: 46, y: 42},//118
    {w: 8, h: 12, x: 54, y: 36},
    {w: 18, h: 8, x: 62, y: 34},

    {w: 8, h: 12, x: 72, y: 42},
    {w: 8, h: 10, x: 70, y: 54},
    {w: 10, h: 10, x: 60, y: 54},

    {w: 10, h: 12, x: 62, y: 42},
    {w: 8, h: 6, x: 54, y: 48},
    {w: 12, h: 6, x: 48, y: 54},
    {w: 8, h: 10, x: 40, y: 54},
    {w: 8, h: 8, x: 38, y: 46},

    {w: 12, h: 10, x: 26, y: 44},
    {w: 6, h: 10, x: 20, y: 48},
    {w: 10, h: 8, x: 16, y: 58},
    {w: 14, h: 12, x: 26, y: 54},
]

const bgs = [
    "#E6ECE5",
    "#E6ECE5",
    "#E6ECE5",
    "#E6ECE5",
    "#E6ECE5",
    "#E70604",
    "#201A68",
    "#F7C904",
]

const explosion_coords = [
    [116, [115, 93, 129, 117], [130, 114, 92, 132, 128, 95, 94, 67]],
    [105, [104, 123, 106, 83], [54, 84, 82, 107, 126, 122, 103, 82, 83, 124, 125]],
    [80, [79, 50, 51, 81, 103], [122, 102, 78, 49, 13, 14, 53, 81]]
]

const group_coords = [
    [111, 109, 110, 131],
    [119, 118, 125],
    [38, 39, 68, 69],
    [93, 115, 116],
    [88, 110, 87],
    [65, 90, 91],
    [63, 89],
    [106, 107, 126, 127],
    [120, 121, 124],
    [106, 126],
    [82, 83, 54],
    [64, 65, 90, 91],
    [66, 67, 92, 93],
    [41, 42, 71, 72],
    [99, 76, 100, 77],
    [100, 78, 77, 48],
    [51, 53, 81],
    [61, 62, 88],
    [39, 40, 41, 69],
    [104, 105, 82, 83],
    [57, 58, 59, 85],
]

const lights = ["0, 0", "0, 50", "0, 100", "50, 0", "100, 0", "100, 50", "100, 100", "50, 100"]

function generate_singlepulse(data) {
    const {index, colors, times, type = "block"} = data
    
    if (index !== null) {
        const color = typeof colors === "string" ? colors : colors[Math.round(Math.random() * (colors.length - 1))]

        if (type === "block") {
            function lightup_block(block) {
                const original_color = block.style.background
                const color = typeof colors === "string" ? colors : colors[Math.round(Math.random() * (colors.length - 1))]

                setTimeout(() => {
                    block.animate(
                        [{background: color}],
                        {duration: times.start, easing: "ease-out", fill: "forwards"},
                    )
                
                    setTimeout(() => {
                        block.animate(
                            [{background: original_color}],
                            {duration: times.end, easing: "ease-out", fill: "forwards"},
                        )
                    }, times.middle + times.start - times.end);
                }, times.delay);
            }
            if (typeof index === "number" || index === undefined) {
                const block = document.getElementById(index ?? Math.round(Math.random() * (blocks.length - 1)))
                lightup_block(block)
            } else if (Array.isArray(index)) {
                index.forEach(i => {
                    const block = document.getElementById(i ?? Math.round(Math.random() * (blocks.length - 1)))
                    lightup_block(block)
                })
            }
        } else if (type === "bg") {
            const bg = document.getElementsByClassName("bg")[0]
            const original_color = bg.style.background || "#000000"

            setTimeout(() => {
                bg.animate(
                    [{background: color}],
                    {duration: times.start, easing: "ease-out", fill: "forwards"},
                )
            
                setTimeout(() => {
                    bg.animate(
                        [{background: original_color}],
                        {duration: times.end, easing: "ease-out", fill: "forwards"},
                    )
                }, times.middle + times.start - times.end);
            }, times.delay);
        } else if (type === "light") {
            const light = document.getElementById(`light_${index || Math.round(Math.random() * (lights.length - 1))}`)

            setTimeout(() => {
                const x = light.style.background.replace(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d+(\.\d+)?)\)/, color)
                light.style.background = x
                light.animate(
                    [{opacity: 1}],
                    {duration: times.start, easing: "ease-out", fill: "forwards"},
                )
            
                setTimeout(() => {
                    light.animate(
                        [{opacity: 0}],
                        {duration: times.end, easing: "ease-out", fill: "forwards"},
                    )
                }, times.middle + times.start - times.end);
            }, times.delay || 0);
        }
    }
}

function pulse(data) {
    if (Array.isArray(data)) {
        data.forEach((item) => {
            generate_singlepulse(item)
        })
    } else {
        generate_singlepulse(data)
    }
}

function block_coords(i) {
    const b = blocks[i]

    return [
        `${b.x}; ${b.y}`,
        `${b.x}; ${b.y + b.h}`,
        `${b.x + b.w}; ${b.y}`,
        `${b.x + b.w}; ${b.y + b.h}`,
    ]
}

const animations = {
    linear_expansive: config => {
        const ar = [
            [0], 
            [1, 33], 
            [35, 34, 64, 32], 
            [31, 90, 91, 36, 65, 2], 
            [3, 37, 38, 66, 92, 113, 112, 89, 63, 30],
            [4, 39, 68, 67, 93, 114, 130, 115, 111, 88, 62, 29], 
            [28, 61, 110, 131, 87, 129, 116, 94, 69, 40, 5], 
            [27, 60, 86, 109, 132, 128, 117, 70, 41, 42, 95, 71, 6],
            [26, 58, 108, 127, 118, 96, 72, 43, 7],
            [25, 59, 85, 107, 126, 125, 119, 97, 73, 74, 44, 8],
            [24, 57, 106, 124, 120, 98, 75, 45],
            [23, 84, 123, 121, 99, 76, 46, 9],
            [56, 22, 83, 105, 122, 101, 100, 77, 47, 10],
            [21, 54, 55, 82, 102, 103, 104, 78, 48],
            [20, 19, 53, 81, 80, 79, 49, 11],
            [18, 51, 52, 50, 12],
            [13, 14, 15, 16, 17],
        ]

        ar.forEach((indexes, i) => {
            const blocks_ar = indexes.map(index => ({...config, index, times: {...config.times, delay: (config.times.delay || 0) + (i * (config.times.speed || 25))}}))
            pulse(blocks_ar)
        })
    },
    explosion: (c) => {
        const [i, i_1, i_2] = c || explosion_coords[Math.round(Math.random() * (explosion_coords.length - 1))]
        const pulsecode_1 = i_1.map(index => ({
            colors: ["#FF000030"], 
            index,
            times: {start: 0, middle: 150, end: 300, delay: 50}
        }))

        const pulsecode_2 = i_2.map(index => ({
            colors: ["#FF000010"], 
            index,
            times: {start: 0, middle: 150, end: 300, delay: 100}
        }))

        pulse([
            {colors: ["#FF0000"], index: i, times: {start: 0, middle: 150, end: 300, delay: 0}},
            ...pulsecode_1,
            ...pulsecode_2,
        ])
    },
    mondrian: () => {
        const container = document.getElementsByClassName("container")[0]
        const ar = Array.from(Array(133).keys())
        const pulse_map = ar.map(a => ({colors: bgs, index: a, times: {start: 1500, middle: 10000, end: 1500}}))
        container.style["animation-name"] = "null"
        pulse(pulse_map)
    }
}

function generate_canvas() {
    const canvas = document.getElementsByClassName("container")[0]
    const absolute_canvas = document.getElementsByClassName("bg")[0]
    
    blocks.map((block, i) => {
        const new_block = document.createElement("div")
        new_block.id = `${i}`

        const p = document.createElement("p")
        p.innerHTML = i
        p.style = "color: white"
        //new_block.appendChild(p)

        new_block.classList.add("rectangle")
        new_block.style = `width: calc(${block.w}vw - .4vw); height: calc(${block.h}vh - .4vw); background: #0000; position: absolute; left: calc(${block.x}% + .2vw); top: calc(${block.y}% + .2vw)`
        canvas.appendChild(new_block)
    })

    lights.map((light, i) => {
        const new_light = document.createElement("div")
        const [ x, y ] = light.split(", ")
        new_light.id = `light_${i}`
        new_light.classList.add("light")
        new_light.style = `background: radial-gradient(circle at ${x}vw ${y}vh, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 75%)`

        absolute_canvas.appendChild(new_light)
    })

    pulse({colors: "#FFFFFF", index: alre, times: {start: 0, middle: 100000, end: 0}})
}

const alre = []

window.onload = () => {
    generate_canvas()
}

function tileDuration(bpm) {
    return 60000 / bpm
}

const cols = [
    [
        "#A041FF",
        "#CE41FF",
        "#FB41FF",
        "#FF41D5",
        "#FF419C",
    ],
    [
        "#41C6FF",
        "#418DFF",
        "#4154FF",
        "#5B41FF",
    ],
    [
        "#FF419C",
        "#FF416E",
        "#FF4141",
        "#FF4C41",
        "#FF6E41",
    ],
    [
        "#FF8541",
        "#FFB341",
        "#FFD541",
        "#FBFF41",
    ],
    [
        "#5CFF41",
        "#41FF5F",
        "#41FF8D",
        "#41FFD1",
        "#41F4FF",
    ]
]

function hexToRgbA(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',.2)';
    }
    throw new Error(`Bad hex: ${hex}`);
}

let keys_alabama = [
    [
        [114, 113, 115, 91, 92, 130],
        114,
        114,
        [115, 113, 130, 91, 92],
        [90, 112, 131, 129, 93, 66],
        [116, 132, 109, 111, 89, 64, 65, 36, 67],
        [32, 33, 34, 35, 2, 37, 68, 94, 117, 128, 127, 107, 108, 86, 110, 88, 63],
        [0, 1, 3, 38, 39, 69, 70, 95, 118, 126, 106, 84, 85, 58, 87, 61, 62, 30, 31],
        [29, 27, 60, 59, 57, 56, 55, 54, 83, 105, 123, 125, 119, 96, 71, 41, 40, 4]
    ],
    [
        [122, 103, 80, 79, 101, 121, 102],
        102,
        102,
        [122, 103, 80, 79, 101, 121, 102],
        [123, 124, 120, 99, 78, 49, 50, 51, 81, 82, 104],
        [105, 83, 53, 52, 15, 14, 13, 12, 48, 77, 100, 76, 75, 98, 97, 119, 125, 126, 106],
        [107, 84, 54, 20, 18, 17, 16, 11, 47, 46, 45, 44, 74, 73, 96, 118, 128, 127, 10],
        [9, 8, 7, 43, 42, 72, 95, 117, 108, 85, 57, 56, 55, 19],
        [6, 5, 41, 40, 71, 70, 94, 116, 129, 132, 109, 86, 23, 22, 21],
    ],
    [
        [117, 118, 119, 96, 71, 70, 94, 95],
        95,
        95,
        [117, 118, 119, 96, 71, 70, 94, 95],
        [116, 128, 126, 125, 120, 97, 72, 41, 69, 68, 67, 93],
        [127, 106, 123, 124, 73, 42, 40, 39, 38, 37, 115, 129],
        [132, 107, 84, 105, 122, 121, 98, 74, 5, 4, 3, 2, 36, 66, 92, 114, 130],
        [35, 65, 91, 113, 131, 108, 85, 57, 56, 55, 54, 83, 104, 103, 102, 101, 99, 75, 43, 6],
        [1, 34, 90, 112, 111, 109, 86, 58, 23, 22, 21, 20, 53, 82, 81, 80, 79, 78, 100, 76, 44, 7],
    ],
    [
        [107, 108, 84, 85, 57],
        85,
        85,
        [107, 108, 84, 85, 57, 86],
        [109, 132, 127, 106, 83, 55, 56, 58],
        [23, 59, 22, 21, 54, 105, 126, 128, 129, 130, 131, 110, 87, 60],
        [24, 25, 26, 61, 88, 111, 113, 114, 115, 116, 117, 118, 125, 123, 104, 82, 53, 20, 19],
        [27, 112, 91, 92, 93, 94, 95, 119, 124, 122, 103, 81, 52, 18],
        [89, 90, 66, 67, 70, 96, 120, 121, 102, 80, 51, 17],
    ],
    [
        [28, 27, 29, 62, 61],
        28,
        28,
        [28, 27, 29, 62, 61],
        [30, 88, 60, 26],
        [25, 87, 110, 63, 31, 89],
        [32, 112, 111, 131, 86, 58, 59, 24],
        [109, 130, 113, 90, 64, 33],
        [0, 34, 65, 91, 114, 132, 108, 85, 23, 57],
    ],
    [
        [7, 8, 45, 9],
        8,
        8,
        [7, 8, 45, 9],
        [44, 46, 75, 10, 47],
        [76, 77, 100, 6, 43, 11, 48],
        [12, 49, 78, 99, 74, 5],
        [13, 14, 50, 79, 101, 98, 73, 42, 40, 41, 4],
        [72, 97, 120, 124, 121, 96, 119, 125, 122, 102, 80, 103, 15, 51],
    ]
]

const colors_alabama = [
    [
        "#41C6FF40",
        "#41C6FF",
        "#41C6FF",

        "#418DFF",
        "#4154FF",
        "#5B41FF",
        "#A041FF",
        "#CE41FF",
        "#FB41FF"
    ],
    [
        "#FB41FF40",
        "#FB41FF",
        "#FB41FF",

        "#FF41D5",
        "#FF419C",
        "#FF416E",
        "#FF4141",
        "#FF4C41",
        "#FF6E41"
    ],
    [
        "#FF6E4140",
        "#FF6E41",
        "#FF6E41",

        "#FF8541",
        "#FFB341",
        "#FFD541",
        "#FBFF41",
        "#C2FF41",
        "#A0FF41"
    ],
    [
        "#A0FF4140",
        "#A0FF41",
        "#A0FF41",

        "#5CFF41",
        "#41FF5F",
        "#41FF8D",
        "#41FFD1",
        "#41F4FF",
        "#41C6FF"
    ],
    [
        "#41C6FF40",
        "#41C6FF",
        "#41C6FF",

        "#41A4FF",
        "#418DFF",
        "#4154FF",
        "#7241FF",
        "#AB41FF",
        "#E441FF"
    ],
    [
        "#FF6E4140",
        "#FF6E41",
        "#FF6E41",

        "#FF8541",
        "#FFB341",
        "#FFD541",
        "#FBFF41",
        "#C2FF41",
        "#A0FF41"
    ],
]


let indexes_alabama_final = [
    [
        [0, 33, 32, 31, 30, 29, 28],
        [1, 34, 64, 63, 62, 61, 27],
        [35, 65, 90, 89, 112, 88, 87, 60, 26],
        [91, 113, 111, 110, 86, 58, 59, 24, 25],
        [2, 36, 66, 92, 114, 130, 131, 109, 108, 85, 57, 23],
        [37, 67, 93, 115, 116, 129, 132, 107],
        [3, 38, 68, 94, 117, 128, 127],
        [4, 39, 69, 70, 95, 118, 126, 106, 84, 56, 22],
        [40, 41, 71, 96, 119, 125, 123, 55, 21],
        [5, 42, 72, 97, 120, 124, 105, 83, 54],
        [6, 43, 74, 73, 121, 122, 104, 82, 53, 20, 19],
        [7, 44, 75, 98, 101, 102, 103, 81, 52, 18],
        [8, 45, 99, 78, 79, 80, 51, 17],
        [76, 100, 48, 49, 50, 15, 16],
        [46, 47, 77, 12, 13, 14],
        [9, 10, 11],
    ],
    [
        [0, 1, 33, 34],
        [32, 64, 65, 35, 2],
        [31, 63, 90, 91, 66, 36, 37, 3],
        [30, 89, 112, 113, 92, 93, 67, 68, 38, 39, 4, 114],
        [29, 62, 88, 111, 131, 130, 129, 115, 116, 94, 69, 40, 5],
        [28, 61, 87, 110, 109, 132, 128, 117, 95, 70, 41],
        [27, 60, 86, 108, 127, 118, 119, 96, 71, 72, 42, 43, 6],
        [26, 25, 59, 58, 85, 107, 126, 125, 124, 120, 97, 73, 74, 44, 7],
        [24, 23, 57, 84, 106, 123, 121, 98, 75, 45, 8],
        [56, 22, 83, 105, 104, 122, 101, 99, 76, 46, 9],
        [21, 55, 54, 82, 103, 102, 78, 100, 77, 47, 10],
        [19, 20, 81, 53, 80, 79, 48, 11],
        [18, 52, 51, 50, 49, 12],
        [17, 16, 15, 14, 13],
    ],
    [
        [0, 1, 2, 3, 4, 5, 6, 7, 8],
        [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 9],
        [32, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 46, 10, 47],
        [31, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 76, 100, 77, 48, 11],
        [30, 63, 89, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 101, 78, 49, 12],
        [29, 62, 88, 110, 11, 131, 130, 129, 128, 127, 126, 125, 124, 123, 122, 102, 79, 111],
        [87, 109, 132, 108, 107, 106, 105, 104, 103, 80, 50, 13, 14],
        [28, 61, 60, 86, 85, 84, 83, 82, 81, 51, 15],
        [58, 57, 56, 55, 54, 53, 52, 16],
        [27, 26, 25, 59, 24, 23, 22, 21, 19, 20, 18, 17],
    ],
    [
        [28, 27, 29, 62, 88, 61, 60, 26, 25],
        [30, 63, 89, 110, 87, 86, 58, 59, 24],
        [31, 112, 111, 131, 109, 108, 85, 57, 23],
        [32, 64, 90, 113, 130, 132, 127, 107, 84, 56, 22],
        [33, 65, 91, 114, 129, 128, 126, 106, 83, 54, 55, 21],
        [0, 1, 34, 35, 36, 66, 92, 93, 115, 116, 117, 118, 125, 123, 105, 104, 82, 53, 20, 19],
        [2, 37, 67, 94, 95, 119, 124, 122, 103, 81, 52, 18],
        [3, 38, 68, 70, 69, 71, 96, 120, 121, 102, 80, 51, 17, 16],
        [4, 39, 40, 41, 72, 97, 101, 79, 50, 15],
        [5, 42, 73, 98, 99, 78, 49, 13, 14],
        [6, 43, 74, 75, 76, 100, 77, 48, 12],
        [7, 44, 45, 46, 47, 10, 11, 8, 9]
    ]
]

const songs = [
    {
        name: "void",
        bpms: [
            {
                val: 60,
                count: -1,
                action: c => {
                    console.log(c)
                }
            }
        ]
    },
    {
        name: "stairway",
        bpms: [
            {
                val: 82 * 4,
                count: -1,
                action: count => {
                    console.log(count)
                    const tile = tileDuration(82 * 2)
                    if (count === 74 || count === 83 || count === 92 || count === 101 || count === 110 || count === 121) {
                        generate_singlepulse({colors: "#FFFFFF30", times: {start: 700, middle: tile * 4, end: 700, delay: 0}})
                    } else if (count === 147 || count === 151 || count === 156 || count === 160 || count === 165 || count === 170 || count === 174 || count === 179 || count === 183 || count === 188 || count === 192 || count === 197) {
                        pulse([
                            {colors: "#7DE8FF30", times: {start: 700, middle: tile * 2, end: 700, delay: 0}},
                            {colors: "#7DE8FF05", times: {start: 700, middle: tile, end: 700, delay: 0}},
                        ])
                    } else if (count === 221 || count === 223 || count === 225 || count === 227 || count === 230 || count === 232 || count === 234 || count === 237 || count === 239 || count === 241 || count === 244 || count === 246 || count === 248 || count === 251 || count === 253 || count === 255 || count === 257 || count === 260 || count === 262 || count === 264 || count === 267 || count === 269 || count === 271 || count === 273 || count === 276 || count === 279 || count === 281) {
                        pulse([
                            {colors: "#8AFF8830", times: {start: 300, middle: tile / 2, end: 300, delay: 0}},
                            {colors: "#8AFF8805", times: {start: 300, middle: tile, end: 300, delay: 0}},
                        ])
                    }
                }
            },
        ]
    },
    {
        name: "south",
        bpms: [
            {
                val: 278,
                count: -1,
                action: c => {
                    console.log(c)
                    const tile = tileDuration(278 * 2) * 2
                    if (c === 3 || c === 8 || c === 12 || c === 24 || c === 29 || c === 33 || c === 45 || c === 50 || c === 54 || c === 66 || c === 71 || c === 75) {
                        const blocks_number = c <= 12 ? 1 : c >= 24 && c <= 33 ? 2 : c >= 45 && c <= 54 ? 3 : 4
                        const index = Array.from(Array(blocks_number).keys()).map(() => (Math.round(Math.random() * (blocks.length - 1))))
                        const middle_time = ((c === 3 || c === 24 || c === 45 || c === 66) ? 3 : (c === 8 || c === 29 || c === 50 || c === 71) ? 2 : 1.4) * tile
                        pulse([
                            {colors: "#FF000070", times: {start: 100, middle: middle_time, end: 150}, type: "bg"},
                            {colors: "#000", index, times: {start: 100, middle: middle_time, end: 150}},
                            {colors: "#FF0000", index, times: {start: 100, middle: tile, end: 150, delay: middle_time}},
                            {colors: "rgba(255, 0, 0, .2)", times: {start: 100, middle: tile, end: 150, delay: middle_time}, type: "light"}
                        ])
                    } else if (c === 86 || c === 92 || c === 95) {
                        const index = c === 86 ? 132 : c === 92 ? 95 : 123
                        pulse([
                            {colors: "#FF000070", index, times: {start: 100, middle: tile * 25, end: 150}},
                            {colors: "rgba(255, 0, 0, .2)", times: {start: 100, middle: tile, end: 150}, type: "light"}
                        ])
                    } else if (c === 103) {
                        pulse([
                            {colors: "#FF000070", index: 4, times: {start: 100, middle: 100, end: 350}},
                            {colors: "rgba(255, 0, 0, .4)", times: {start: 100, middle: 100, end: 350}, type: "light"},
                            {colors: ["#FF0000", "#FF0000fa", "#FF0000aa", "#FF0000af"], index: [4, 3, 38, 39, 40, 5], times: {start: 300, middle: tile * 6, end: 700, delay: 300}},
                            {colors: ["#FF0000", "#FF0000fa", "#FF0000aa", "#FF0000af"], index: [2, 37, 68, 69, 41, 42, 43, 6], times: {start: 300, middle: tile * 6, end: 700, delay: 320}},
                            {colors: ["#FF0000", "#FF0000fa", "#FF0000aa", "#FF0000af"], index: [1, 35, 36, 66, 67, 94, 70, 71, 72, 73, 74, 44, 7], times: {start: 300, middle: tile * 6, end: 700, delay: 340}},
                            {colors: ["#FF0000", "#FF0000fa", "#FF0000aa", "#FF0000af"], index: [0, 34, 65, 91, 92, 93, 116, 117, 95, 96, 97, 98, 75, 45, 8], times: {start: 300, middle: tile * 6, end: 700, delay: 360}},
                            {colors: ["#FF0000", "#FF0000fa", "#FF0000aa", "#FF0000af"], index: [33, 64, 90, 113, 114, 115, 129, 128, 118, 119, 120, 99, 76, 46, 9], times: {start: 300, middle: tile * 6, end: 700, delay: 380}},
                            {colors: ["#FF0000", "#FF0000fa", "#FF0000aa", "#FF0000af"], index: [32, 63, 89, 112, 130, 132, 127, 126, 125, 124, 121, 101, 100, 77, 47, 10], times: {start: 300, middle: tile * 6, end: 700, delay: 400}},
                            {colors: ["#FF0000", "#FF0000fa", "#FF0000aa", "#FF0000af"], index: [31, 111, 131, 109, 108, 107, 106, 123, 122, 102, 78, 48, 11], times: {start: 300, middle: tile * 6, end: 700, delay: 420}},
                            {colors: ["#FF0000", "#FF0000fa", "#FF0000aa", "#FF0000af"], index: [30, 62, 88, 110, 86, 85, 84, 105, 104, 103, 80, 79, 49, 12], times: {start: 300, middle: tile * 6, end: 700, delay: 440}},
                            {colors: ["#FF0000", "#FF0000fa", "#FF0000aa", "#FF0000af"], index: [29, 61, 87, 60, 58, 59, 57, 83, 82, 81, 50, 51, 13], times: {start: 300, middle: tile * 6, end: 700, delay: 460}},
                            {colors: ["#FF0000", "#FF0000fa", "#FF0000aa", "#FF0000af"], index: [28, 27, 26, 25, 24, 23, 56, 55, 54, 53, 14, 15], times: {start: 300, middle: tile * 6, end: 700, delay: 480}},
                            {colors: ["#FF0000", "#FF0000fa", "#FF0000aa", "#FF0000af"], index: [22, 21, 20, 19, 52, 18, 17, 16], times: {start: 300, middle: tile * 6, end: 700, delay: 500}},
                        ])
                    } else if (c === 125) {
                        pulse([
                            {colors: "#FF000090", index: 118, times: {start: 300, middle: tile * 6, end: 700}},
                            {colors: "#FF000050", index: [128, 127, 126, 125, 119, 95, 117], times: {start: 300, middle: tile * 6, end: 700, delay: 150}},
                            {colors: "#FF000030", index: [116, 129, 132, 108, 107, 106, 123, 124, 120, 96, 71, 70, 94], times: {start: 300, middle: tile * 6, end: 700, delay: 300}},
                        ])
                    } else if (c === 144) {
                        pulse([
                            {colors: "#FF000090", index: 28, times: {start: 300, middle: tile * 6, end: 700}},
                            {colors: "#FF000050", index: [29, 62, 61, 27], times: {start: 300, middle: tile * 6, end: 700, delay: 100}},
                            {colors: "#FF000030", index: [30, 31, 63, 88, 87, 60, 26, 87, 26, 25, 24], times: {start: 300, middle: tile * 6, end: 700, delay: 200}},
                        ])
                    } else if (c === 146) {
                        pulse([
                            {colors: "#FF000090", index: 8, times: {start: 300, middle: tile * 6, end: 700}},
                            {colors: "#FF000050", index: [7, 45, 9, 46, 10], times: {start: 300, middle: tile * 6, end: 700, delay: 100}},
                            {colors: "#FF000030", index: [11, 48, 77, 76, 75, 44, 6, 47, 12], times: {start: 300, middle: tile * 6, end: 700, delay: 200}},
                        ])
                    } else if (c === 167 || c === 186 || c === 206 || c === 225 || c === 320 || c === 339 || c === 359 || c === 378) {
                        pulse([ 
                            {colors: "#FF0000", times: {start: 50, middle: tile, end: 150}, type: "bg"},
                            {colors: "rgba(255, 127.5, 0, .1)", times: {start: 50, middle: 100, end: 50}, type: "light"},
                            {colors: "#000000", times: {start: 50, middle: 100, end: 50}},
                            {colors: "#000000", times: {start: 50, middle: 100, end: 50}},
                            {colors: "#000000", times: {start: 50, middle: 100, end: 50}},
                            {colors: "#000000", times: {start: 50, middle: 100, end: 50}},
                            {colors: "#000000", times: {start: 50, middle: 100, end: 50}},
                            {colors: "#000000", times: {start: 50, middle: 100, end: 50}},
                        ])
                    } else if (c === 168 || c === 187 || c === 207 || c === 226 || c === 321 || c === 340 || c === 360 || c === 379) {
                        pulse([
                            {colors: "#FF000010", times: {start: 50, middle: tile, end: 150}, type: "bg"},
                            {colors: "rgba(255, 0, 0, .1)", times: {start: 50, middle: 100, end: 50}, type: "light"},
                            {colors: "#FF000070", times: {start: 50, middle: 100, end: 50}},
                            {colors: "#FF000070", times: {start: 50, middle: 100, end: 50}},
                            {colors: "#FF000070", times: {start: 50, middle: 100, end: 50}},
                            {colors: "#FF000070", times: {start: 50, middle: 100, end: 50}},
                            {colors: "#FF000070", times: {start: 50, middle: 100, end: 50}},
                            {colors: "#FF000070", times: {start: 50, middle: 100, end: 50}},
                        ])
                    } else if (
                        c === 169 || c === 170 || c === 171 || c === 174 || c === 175 || c >= 178 && c <= 182 || c >= 189 && c <= 191 ||
                        c === 194 || c === 195 || c >= 197 && c <= 200 || c >= 207 && c <= 210 || c === 213 || c === 214 || c >= 217 && c <= 221 ||
                        c >= 228 & c <= 230 || c === 233 || c === 234 || c >= 237 && c <= 240 ||
                        c >= 322 && c <= 324 || c === 327 || c === 328 || c >= 331 && c <= 335 ||
                        c >= 342 && c <= 344 || c === 347 || c === 348 || c >= 350 && c <= 352 ||
                        c >= 361 && c <= 363 || c === 366 || c === 367 || c >= 370 && c <= 374 ||
                        c >= 381 && c <= 383 || c === 385 || c === 386 || c >= 389 && c <= 393
                    ) {
                        const indexes = group_coords[Math.round(Math.random() * (group_coords.length - 1))]
                        pulse([
                            {colors: "#FF000070", index: indexes, times: {start: 0, middle: tile, end: 300}},
                            {colors: "rgba(255, 0, 0, .2)", times: {start: 50, middle: tile * 4, end: 300}, type: "light"},
                        ])
                    } else if (c >= 245 && c < 320) {
                        pulse([
                            {colors: "#FF000070", times: {start: 50, middle: tile, end: 300}},
                            {colors: "#FF000070", times: {start: 50, middle: tile, end: 300}},
                            {colors: "rgba(255, 0, 0, .2)", times: {start: 50, middle: tile, end: 300}, type: "light"},
                        ])
                    }
                }
            },
        ]
    },
    {
        name: "blues",
        bpms: [
            {
                val: 170 * 2,
                count: -1,
                action: count => {
                    console.log(count)
                    const colors = ["#FFFFFF", "#FFFFFF", "#CBA1FF", "#88A2FF"]
                    const tile = tileDuration(170)
                    
                    if (count === 0 || count === 30 || count === 53) {
                        const ar = Array.from(Array(34).keys())
                        const corner = ar.map(index => ({colors, index, times: {start: 100, middle: tile / 2, end: 300, delay: 0}}))
                        pulse(corner)
                    } else if (count === 1 || count === 29 || count === 54) {
                        const ar = Array.from(Array(91 - 33).keys())
                        const corner = ar.map(i => ({colors, index: i + 34, times: {start: 100, middle: tile / 2, end: 300, delay: 0}}))
                        pulse(corner)
                    } else if (count === 2 || count === 28 || count === 55) {
                        const ar = Array.from(Array(131 - 88).keys())
                        const corner = ar.map(i => ({colors, index: i + 90, times: {start: 100, middle: tile / 2, end: 300, delay: 0}}))
                        pulse(corner)
                    } else if (count === 3 || count === 56) {
                        animations.linear_expansive({colors, times: {start: 300, middle: tile * 2, end: 700, speed: 25}})
                    } else if (
                        count === 12 || count === 17 || count === 38 || count === 43 || count === 64 || count === 69 || count === 77 || count === 79 || count === 81 || count === 115 || count === 120 || count === 140 || count === 145 || count === 165 || count === 169 || 
                        count === 178 || count === 180 || count === 182 || count === 188 || count === 194 ||
                        count === 215 || count === 218 || count === 220 || count === 240 || count === 242 || count === 243 || count === 245 ||
                        count === 281 || count === 286 || count === 290
                        ) {
                        const indexes = group_coords[Math.round(Math.random() * (group_coords.length - 1))]
                        pulse([
                            {colors, index: indexes[0], times: {start: 300, middle: tile, end: 700}},
                            {colors, index: indexes[1], times: {start: 300, middle: tile, end: 700}},
                            {colors, index: indexes[2] || null, times: {start: 300, middle: tile, end: 700}},
                            {colors, index: indexes[3] || null, times: {start: 300, middle: tile, end: 700}},
                            {colors: "rgba(255, 255, 255, .1)", times: {start: 100, middle: tile, end: 300}, type: "light"},
                        ])
                    } else if (count === 104 || count === 132 || count === 154) {
                        pulse({colors, index: [118, 126, 127, 128], times: {start: 700, middle: tile, end: 700}})
                    } else if (count === 105 || count === 131 || count === 156) {
                        pulse({colors, index: [106, 107, 132, 129, 116, 117, 95, 119, 125, 123,], times: {start: 700, middle: tile, end: 700}})
                    } else if (count === 106 || count === 130 || count === 155) {
                        pulse({colors, index: [114, 115, 93, 67, 94, 70, 71, 96, 97, 120, 124, 122, 121, 104, 105, 84, 85, 108, 109, 131, 130, 113, 92, 66, 37, 68, 69, 41, 72, 73, 98, 101, 99, 102, 103, 82, 83, 54, 55, 56, 57, 58, 86, 110, 111, 112, 91, 36, 42, 74, 87], times: {start: 700, middle: tile, end: 700}})
                    } else if (count === 107 || count === 129 || count === 157) {
                        pulse({colors, index: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 38, 39, 40, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 59, 60, 61, 62, 63, 64, 65, 74, 75, 76, 77, 78, 79, 80, 81, 87, 88, 89, 90, 91, 100], times: {start: 700, middle: tile, end: 700}})
                    } else if (count === 203 || count === 227 || count === 252 || count === 258 || count === 265) {
                        pulse([
                            {colors, index: 22, times: {start: 300, middle: tile / 4, end: 300}},
                            {colors, index: 56, times: {start: 300, middle: tile / 4, end: 300, delay: 30}},
                            {colors, index: 84, times: {start: 300, middle: tile / 4, end: 300, delay: 60}},
                            {colors, index: 106, times: {start: 300, middle: tile / 4, end: 300, delay: 90}},
                            {colors, index: 126, times: {start: 300, middle: tile / 4, end: 300, delay: 120}},
                            {colors, index: 118, times: {start: 300, middle: tile, end: 300, delay: 150}},
                        ])
                    } else if (count === 206 || count === 230 || count === 255 || count === 261 || count === 268) {
                        pulse([
                            {colors, index: [128, 117, 95, 96, 119, 125, 126, 127], times: {start: 100, middle: tile * 2, end: 700}},
                            {colors, index: [106, 107, 132, 129, 116, 94, 70, 71, 72, 97, 120, 124, 123], times: {start: 100, middle: tile * 2, end: 700, delay: 30}},
                            {colors, index: [108, 131, 130, 115, 93, 67, 68, 69, 41, 42, 73, 98, 121, 122, 105, 84, 85,], times: {start: 100, middle: tile * 2, end: 700, delay: 60}},
                            {colors, index: [104, 83, 54, 55, 56, 57, 86, 109, 111, 113, 114, 92, 66, 37, 38, 39, 40, 74, 99, 101, 102, 103], times: {start: 100, middle: tile * 2, end: 700, delay: 90}},
                            {colors, index: [91, 36, 2, 3, 4, 5, 43, 75, 76, 100, 78, 79, 80, 81, 82, 53, 20, 21, 22, 23, 58, 87, 110, 112], times: {start: 100, middle: tile * 2, end: 700, delay: 120}},
                            {colors, index: [6, 44, 77, 48, 49, 50, 51, 52, 19, 24, 59, 60, 88, 89, 90, 65, 35, 1], times: {start: 100, middle: tile * 2, end: 700, delay: 150}},
                            {colors, index: [7, 45, 46, 47, 12, 15, 18, 17, 25, 26, 61, 62, 63, 64, 34], times: {start: 100, middle: tile * 2, end: 700, delay: 180}},
                            {colors, index: [8, 9, 10, 11, 13, 14, 16, 27, 28, 29, 30, 31, 32, 33, 0], times: {start: 100, middle: tile * 2, end: 700, delay: 210}},
                        ])
                    } else if (count >= 291 && count <= 303) {
                        pulse([
                            {colors, times: {start: 300, middle: tile, end: 300, delay: 150}},
                            {colors, times: {start: 300, middle: tile, end: 300, delay: 150, delay: tile / 2}},
                            {colors: "rgba(255, 255, 255, .1)", times: {start: 50, middle: tile, end: 700}, type: "light"},
                        ])
                    }
                }
            },
        ]
    },
    {
        name: "sweethome",
        bpms: [
            {
                val: 98 * 2,
                count: -1,
                action: c => {
                    const tile = tileDuration(98 * 2)
                    console.log(c)
                    if (
                        c <= 1 || c === 4 || c === 5 || c === 8 || c === 9 ||
                        c === 17 || c === 21 || c === 25 ||
                        c === 34 | c === 38 || c === 42
                    ) {
                        pulse([
                            {colors: "#FFFFFF", times: {start: 50, middle: tile / 2, end: 300, delay: 0}},
                        ])
                    } else if (
                        c === 16 || c === 20 || c === 24 ||
                        c === 77 || c === 78 ||
                        c === 49 || c === 50 ||
                        c === 62 || c === 61 ||
                        c === 97 || c === 98 || 
                        c === 101 || c === 102 ||
                        c === 113 || c === 114 ||
                        c === 117 || c === 118 ||
                        c === 121 || c === 122 ||
                        c === 105 || c === 106
                        ) {
                            const c = () => {
                                if (c === 77 || c === 78)  {
                                    return[
                                        "#41C6FF",
                                        "rgba(65, 198, 255, .2)"
                                    ]
                                } else if (c === 49 || c === 50) {
                                    return[
                                        "#A0FF41",
                                        "rgba(160, 255, 65, .2)"
                                    ]
                                } else {
                                    return[
                                        "#FFFFFF",
                                        "rgba(255, 255, 255, .2)"
                                    ]
                                }
                            }

                            const col = c()

                            pulse([
                                {colors: col[0], times: {start: 50, middle: tile / 2, end: 300, delay: 0}},
                                {colors: col[1], times: {start: 50, middle: tile, end: 300, delay: 0}, type: "light"},
                            ])
                    } else if (c === 27) {
                        pulse([
                            {colors: "#FFFFFF80", times: {start: 50, middle: tile / 2, end: 300, delay: 0}},
                            {colors: "#FFFFFF80", times: {start: 50, middle: tile / 2, end: 300, delay: tile}},
                            {colors: "#FFFFFF80", times: {start: 50, middle: tile / 2, end: 300, delay: tile * 3 / 2}},
                            {colors: "#FFFFFF80", times: {start: 50, middle: tile / 2, end: 300, delay: tile * 2}},
                            {colors: "#FFFFFF80", times: {start: 50, middle: tile / 2, end: 300, delay: tile * 5 / 2}},
                            {colors: "#FFFFFF80", times: {start: 50, middle: tile / 2, end: 300, delay: tile * 3}},
                            {colors: "#FFFFFF80", times: {start: 50, middle: tile / 2, end: 300, delay: tile * 7 / 2}},
                            {colors: "#FFFFFF80", times: {start: 50, middle: tile / 2, end: 300, delay: tile * 4}},
                            {colors: "#FFFFFF80", times: {start: 50, middle: tile / 2, end: 300, delay: tile * 9 / 2}},
                        ])
                    } else if (c === 33 || c === 37 || c === 41) {
                        pulse([
                            {colors: "#0d0b05", times: {start: 50, middle: tile * 2, end: 300, delay: 0}, type: "bg"},
                            {colors: "#FFFFFF", times: {start: 50, middle: tile / 2, end: 300}},
                        ])
                    } else if (c === 35) {
                       pulse([
                            {colors: "#FCFF57", index: [31, 11], times: {start: 150, middle: tile * 2, end: 300, delay: 0}},
                            {colors: "#FDFFB4", index: [30, 63, 32,     12, 48, 10], times: {start: 300, middle: tile, end: 300, delay: tile / 8}},
                            {colors: "#FEFFE2", index: [29, 62, 88, 89, 64, 33,     13, 14, 49, 78, 77, 47, 46, 9], times: {start: 300, middle: tile, end: 300, delay: tile / 4}},
                            {colors: "#FEFFE2", index: [28, 61, 87, 110, 111, 112, 90, 65, 34, 0, 91, 113, 131, 130, 114, 92, 66,     15, 50, 79, 101, 100, 76, 45, 8, 99, 75, 120, 121, 102, 80], times: {start: 300, middle: tile / 2, end: 300, delay: tile / 4}},
                        ])
                    } else if (c === 39) {
                        pulse([
                            {colors: "#FCFF57", index: [0,     16], times: {start: 150, middle: tile * 2, end: 300, delay: 0}},
                            {colors: "#FDFFB4", index: [33, 1, 65, 36,     17, 52, 15], times: {start: 300, middle: tile, end: 300, delay: tile / 8}},
                            {colors: "#FEFFE2", index: [32, 64, 34, 35, 2,     18, 51, 14, 13], times: {start: 300, middle: tile, end: 300, delay: tile / 4}},
                            {colors: "#FEFFE2", index: [31, 63, 89, 90, 91, 66, 37, 38, 3,     19, 20, 53, 81, 80, 50, 49, 12], times: {start: 300, middle: tile / 2, end: 300, delay: tile / 4}},
                        ])
                    } else if (c === 43) {
                        pulse([
                            {colors: "#FCFF57", index: [28,     8], times: {start: 150, middle: tile * 2, end: 300, delay: 0}},
                            {colors: "#FDFFB4", index: [27, 61, 62, 29,     7, 45, 46, 9], times: {start: 300, middle: tile, end: 300, delay: tile / 8}},
                            {colors: "#FEFFE2", index: [30, 63, 88, 87, 60, 26,     6, 44, 75, 76, 77, 47, 10], times: {start: 300, middle: tile, end: 300, delay: tile / 4}},
                            {colors: "#FEFFE2", index: [30, 31, 63, 88, 87, 60, 26, 25, 24, 58, 59, 89, 110, 86, 32, 23,     5, 43, 74, 99, 100, 78, 48, 11], times: {start: 300, middle: tile / 2, end: 300, delay: tile / 4}},
                        ])
                    } else if (c === 44) {
                        pulse([
                            {colors: "#FFFFFF", times: {start: 50, middle: tile / 2, end: 300, delay: 0}},
                            {colors: "#FFFFFF", times: {start: 50, middle: tile / 2, end: 300, delay: tile}},
                            {colors: "#FFFFFF", times: {start: 50, middle: tile / 2, end: 300, delay: tile * 3 / 2}},
                            {colors: "#FFFFFF", times: {start: 50, middle: tile / 2, end: 300, delay: tile * 2}},
                            {colors: "#FFFFFF", times: {start: 50, middle: tile / 2, end: 300, delay: tile * 5 / 2}},
                            {colors: "#FFFFFF", times: {start: 50, middle: tile / 2, end: 300, delay: tile * 3}},
                            {colors: "#FFFFFF", times: {start: 50, middle: tile / 2, end: 300, delay: tile * 7 / 2}},
                            {colors: "#FFFFFF", times: {start: 50, middle: tile / 2, end: 300, delay: tile * 4}},
                        ])
                    } else if (c === 51) {
                        pulse([
                            {colors: "#FFFFFF", index: [117, 94],  times: {start: 50, middle: tile / 2, end: 400, delay: 0}},
                            {colors: "rgba(255, 255, 255, .2)", times: {start: 50, middle: tile / 2, end: 400}, type: "light"},
                            {colors: "#F9FFB6", index: [95, 70],  times: {start: 50, middle: tile / 2, end: 400, delay: tile / 12}},
                            {colors: "#F5FF81", index: [119, 96, 71],  times: {start: 50, middle: tile / 2, end: 400, delay: 2 * tile / 12}},
                            {colors: "#EFFF3A", index: [124, 120],  times: {start: 50, middle: tile / 2, end: 400, delay: 3 * tile / 12}},
                            {colors: "#EDFF23", index: [121, 122],  times: {start: 50, middle: tile / 2, end: 400, delay: 4 * tile / 12}},
                            {colors: "#EBFF00", index: [101, 102],  times: {start: 50, middle: tile / 2, end: 400, delay: 5 * tile / 12}},
                        ])
                    } else if (c === 53 || c === 54) {
                        pulse([
                            {colors: "#EBFF00", index: c === 53 ? [102, 79, 78] : [103, 80, 81],  times: {start: 50, middle: tile / 2, end: 300, delay: 0}},
                            {colors: "rgba(235, 255, 0, .2)", times: {start: 50, middle: tile / 2, end: 300}, type: "light"},
                        ])
                    } else if (c === 55) {
                        pulse([
                            {colors: "#EBFF00", index: [104, 122],  times: {start: 50, middle: tile / 2, end: 400, delay: 0}},
                            {colors: "rgba(235, 255, 0, .2)", times: {start: 50, middle: tile / 2, end: 400}, type: "light"},
                            {colors: "#D5FF2C", index: [105, 123],  times: {start: 50, middle: tile / 2, end: 400, delay: tile / 12}},
                            {colors: "#BBFF2C", index: [106, 126],  times: {start: 50, middle: tile / 2, end: 400, delay: 2 * tile / 12}},
                            {colors: "#95FF2C", index: [107, 127],  times: {start: 50, middle: tile / 2, end: 400, delay: 3 * tile / 12}},
                            {colors: "#63FF2C", index: [108, 132],  times: {start: 50, middle: tile / 2, end: 400, delay: 4 * tile / 12}},
                            {colors: "#2CFF34", index: [109, 131],  times: {start: 50, middle: tile / 2, end: 400, delay: 5 * tile / 12}},
                        ])
                    } else if (c === 57 || c === 58) {
                        pulse([
                            {colors: "#2CFF34", index: c === 57 ? [110, 111, 131] : [112, 113, 130],  times: {start: 50, middle: tile / 2, end: 300, delay: 0}},
                            {colors: "rgba(44, 255, 52, .2)", times: {start: 50, middle: tile / 2, end: 300}, type: "light"},
                        ])
                    } else if (c === 59) {
                        pulse([
                            {colors: "#2CFF34", index: [114, 92],  times: {start: 50, middle: tile / 2, end: 400, delay: 0}},
                            {colors: "rgba(44, 255, 52, .2)", times: {start: 50, middle: tile / 2, end: 400}, type: "light"},
                            {colors: "#2CFF73", index: [115, 93],  times: {start: 50, middle: tile / 2, end: 400, delay: tile / 12}},
                            {colors: "#2CFFA6", index: [116, 129],  times: {start: 50, middle: tile / 2, end: 400, delay: 2 * tile / 12}},
                            {colors: "#2CFFF2", index: [117, 128],  times: {start: 50, middle: tile / 2, end: 400, delay: 3 * tile / 12}},
                            {colors: "#2CE6FF", index: [95, 118],  times: {start: 50, middle: tile / 2, end: 400, delay: 4 * tile / 12}},
                            {colors: "#41C6FF", index: [96, 119],  times: {start: 50, middle: tile / 2, end: 400, delay: 5 * tile / 12}},
                        ])
                    } else if (c === 65 || c === 69 || c === 73 || c === 81 || c === 85 || c === 89) {
                        const ind = Math.round(Math.random() * (keys_alabama.length - 1))

                        const keys_ar = keys_alabama[ind]
                        const colors_ar = colors_alabama[ind]
                        
                        
                        const pulse_ar = keys_ar.map((ar, ind) => {
                            const delay = ind === 0
                            ? 0
                            : ind === 1
                            ? tile
                            : 2 * tile + tile / 2 * (ind - 1) / (keys_ar.length - 2)

                            return {colors: colors_ar[ind], index: ar,  times: {start: 50, middle: tile / 2, end: 400, delay}}
                        })


                        pulse(pulse_ar)

                        keys_alabama.splice(ind, 1)
                        colors_alabama.splice(ind, 1)
                    } else if (c === 99 || c === 103 || c === 115 || c === 119 || c === 123 || c === 107) {
                        const ar = Array.from(Array(blocks.length).keys())
                        const cols_singlear = cols[Math.round(Math.random() * (cols.length - 1))]

                        const pulse_ar = ar.map(ind => ({colors: cols_singlear, index: ind, times: {start: 0, middle: tile / 200, end: 700, delay: tile * ind / blocks.length / 2}}))

                        pulse(pulse_ar)
                    } else if (
                        c === 130 || c >= 132 && c <= 133 || c >= 138 && c <= 140 ||
                        c === 146 || c >= 148 && c <= 149 || c >= 154 && c <= 156 ||
                        c === 162 || c >= 164 && c <= 165 || c >= 169 && c <= 171 ||
                        c === 178 || c >= 180 && c <= 181 || c >= 186 && c <= 188
                    ) {
                        const indexes = group_coords[Math.round(Math.random() * (group_coords.length - 1))]
                        const cols_singlear = cols[Math.round(Math.random() * (cols.length - 1))]
                        pulse([
                            {colors: cols_singlear[0], index: indexes, times: {start: 50, middle: tile / 2, end: 300}},
                            {colors: hexToRgbA(cols_singlear[0]), times: {start: 50, middle: tile / 2, end: 300}, type: "light"},
                        ])
                    } else if (c === 129 || c === 145 || c === 161 || c === 177) {
                        const indexes = [
                            group_coords[Math.round(Math.random() * (group_coords.length - 1))],
                            group_coords[Math.round(Math.random() * (group_coords.length - 1))],
                            group_coords[Math.round(Math.random() * (group_coords.length - 1))]
                        ]
                        const cols_singlear = [
                            cols[Math.round(Math.random() * (cols.length - 1))],
                            cols[Math.round(Math.random() * (cols.length - 1))],
                            cols[Math.round(Math.random() * (cols.length - 1))]
                        ]
                        pulse([
                            {colors: cols_singlear[0][0], index: indexes[0], times: {start: 50, middle: tile / 2, end: 300}},
                            {colors: hexToRgbA(cols_singlear[0][0]), times: {start: 50, middle: tile, end: 300}, type: "light"},

                            {colors: cols_singlear[1][1], index: indexes[1], times: {start: 50, middle: tile / 2, end: 300, delay: tile / 3}},

                            {colors: cols_singlear[2][2], index: indexes[2], times: {start: 50, middle: tile / 2, end: 300, delay: 2 * tile / 3}},
                        ])
                    } else if (c === 134 || c === 150 || c === 166 || c === 182) {
                        const colors_sets = [
                            cols[Math.round(Math.random() * (cols.length - 1))],
                            cols[Math.round(Math.random() * (cols.length - 1))]
                        ]

                        const ind = Math.round(Math.random() * (indexes_alabama_final.length - 1))
                        const index_set = indexes_alabama_final[ind]

                        index_set.forEach((nums, ind) => {
                            pulse([
                                {index: nums, colors: colors_sets[0][Math.floor(colors_sets[0].length * ind / index_set.length)], times: {start: 50, middle: 0, end: 350, delay: ind * tile / (index_set.length * 2)}},
                                {index: nums, colors: colors_sets[1][Math.floor(colors_sets[1].length * ind / index_set.length)], times: {start: 50, middle: 0, end: 350, delay: tile + ((index_set.length - ind) * tile / (index_set.length * 2))}}
                            ])
                        })

                        indexes_alabama_final.splice(ind, 1)
                    } else if (c === 136 || c === 137 || c === 152 || c === 153 || c === 168 || c === 169 || c === 184 || c === 185) {
                        const indexes = [
                            group_coords[Math.round(Math.random() * (group_coords.length - 1))],
                            group_coords[Math.round(Math.random() * (group_coords.length - 1))],
                        ]

                        const cols_singlear = [
                            cols[Math.round(Math.random() * (cols.length - 1))],
                            cols[Math.round(Math.random() * (cols.length - 1))]
                        ]

                        pulse([
                            {colors: cols_singlear[0], index: indexes[0], times: {start: 50, middle: tile / 2, end: 300}},
                            {colors: hexToRgbA(cols_singlear[0][0]), times: {start: 50, middle: tile, end: 300}, type: "light"},

                            {colors: cols_singlear[1], index: indexes[1], times: {start: 50, middle: tile / 2, end: 300, delay: tile / 2}},
                        ])
                    }
                }
            },
        ]
    },
    {
        name: "classic",
        bpms: [
            {
                val: 1,
                count: -1,
                action: count => {
                    animations.mondrian()
                }
            },
        ]
    },
]

async function tiled_song(song) {
    return new Promise(async (res, rej) => {
        const song_html = document.getElementById(`song_${song.name}`)

        song_html.onplaying = d => {
            console.log("onplaying")
            let start = new Date()
            const i = setInterval(() => {
                const current = Date.now()
                const count = current - start
        
                song.bpms.forEach(b => {
                    const progress_1 = Math.floor(count / ( 60000 / b.val ))
                    if (progress_1 > b.count) {
                        b.count = progress_1
                        b.action(b.count)
                    }
                })
            }, 10)
    
            song_html.onended = () => {
                clearInterval(i)
                res()
            }
        }
        
        setTimeout(async () => {
            await song_html.play()
        }, 1500)
    })
}

async function start_song() {
    for (const song of songs) {
        await tiled_song(song)
    }
}

document.onkeydown = key => {
    const { code } = key
    
    if (code === "Space") {
        start_song()
    }
}