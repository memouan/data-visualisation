let div = document.createElement('div');
let canvas = document.createElement('canvas');
canvas.id = 'canvas2';
canvas.width = 800;
canvas.height = 800;
div.append(canvas);
const table2 = document.getElementById('table2');
table2.parentNode.insertBefore(div, table2);

let dataCountry= [];
let dataGlobal = [];

function gatherDomData(e) {

    /* Getting the number of rows in the table. */
    let rowLength = e.rows.length;

    for (let i = 1; i < rowLength; i++) {
        /* Getting the cells of the table. */
        let row = e.rows[i];
        
        let colCountry = row.cells[1].innerText;
        dataCountry.push(colCountry);

        let temp = [];


        for (var j = 2, col; col = row.cells[j]; j++) {
            temp.push(col.innerText);

        }
        dataGlobal.push(temp)

    }

}

gatherDomData(table2);

console.log(dataGlobal);
console.log(dataCountry);

const labelYrs = ['2007-09', '2010-12']

const Latvia = {
    label: dataCountry[1],
    data: dataGlobal[1],
    backgroundColor: [
        '#FFD300',
        ],
        borderColor: [
        '#FFD300',
        ],
    borderWidth: 2
}

const Lithuania= {
    label: dataCountry[2],
    data: dataGlobal[2],
    backgroundColor: [
        '#1A0CE8',
        ],
        borderColor: [
        '#1A0CE8',
        ],
    borderWidth: 2
}

const Czech= {
    label: dataCountry[3],
    data: dataGlobal[3],
    backgroundColor: [
        '#33E80C',
        ],
        borderColor: [
        '#33E80C',
        ],
    borderWidth: 2
}

const Poland= {
    label: dataCountry[4],
    data: dataGlobal[4],
    backgroundColor: [
        '#33E80C',
        ],
        borderColor: [
        '#33E80C',
        ],
    borderWidth: 2
}

const Slovakia= {
    label: dataCountry[5],
    data: dataGlobal[5],
    backgroundColor: [
        '#FFD300',
        ],
        borderColor: [
        '#FFD300',
        ],
    borderWidth: 2
}

const Hungary= {
    label: dataCountry[6],
    data: dataGlobal[6],
    backgroundColor: [
        '#00FFFF',
        ],
        borderColor: [
        '#00FFFF',
        ],
    borderWidth: 2
}

const England= {
    label: dataCountry[7],
    data: dataGlobal[7],
    backgroundColor: [
    '#1A0CE8',
    ],
    borderColor: [
    '#1A0CE8',
    ],
    borderWidth: 2
}

const Scotland= {
    label: dataCountry[8],
    data: dataGlobal[8],
    backgroundColor: [
    '#33E80C',
    ],
    borderColor: [
    '#33E80C',
    ],
    borderWidth: 2
}

const Spain= {
    label: dataCountry[9],
    data: dataGlobal[9],
    backgroundColor: [
    '#33E80C',
    ],
    borderColor: [
    '#33E80C',
    ],
    borderWidth: 2
}

const Romania= {
    label: dataCountry[10],
    data: dataGlobal[10],
    backgroundColor: [
    '#FFD300',
    ],
    borderColor: [
    '#FFD300',
    ],
    borderWidth: 2
}

const Malta= {
    label: dataCountry[11],
    data: dataGlobal[11],
    backgroundColor: [
    '#FF0DB3',
    ],
    borderColor: [
    '#FF0DB3',
    ],
    borderWidth: 2
}

const Bulgaria= {
    label: dataCountry[12],
    data: dataGlobal[12],
    backgroundColor: [
    '#1A0CE8',
    ],
    borderColor: [
    '#1A0CE8',
    ],
    borderWidth: 2
}

const Luxembourg= {
    label: dataCountry[13],
    data: dataGlobal[13],
    backgroundColor: [
    '#33E80C',
    ],
    borderColor: [
    '#33E80C',
    ],
    borderWidth: 2
}

const Portugal= {
    label: dataCountry[14],
    data: dataGlobal[14],
    backgroundColor: [
    '#00FFFF',
    ],
    borderColor: [
    '#00FFFF',
    ],
    borderWidth: 2
}

const Croatia= {
    label: dataCountry[15],
    data: dataGlobal[15],
    backgroundColor: [
    '#FFD300',
    ],
    borderColor: [
    '#FFD300',
    ],
    borderWidth: 2
}

const Italy= {
    label: dataCountry[16],
    data: dataGlobal[16],
    backgroundColor: [
    '#1A0CE8',
    ],
    borderColor: [
    '#1A0CE8',
    ],
    borderWidth: 2
}

const Greece= {
    label: dataCountry[17],
    data: dataGlobal[17],
    backgroundColor: [
    '#00FFFF',
    ],
    borderColor: [
    '#00FFFF',
    ],
    borderWidth: 2
}

const France= {
    label: dataCountry[18],
    data: dataGlobal[18],
    backgroundColor: [
    '#33E80C',
    ],
    borderColor: [
    '#33E80C',
    ],
    borderWidth: 2
}

const Austria= {
    label: dataCountry[19],
    data: dataGlobal[19],
    backgroundColor: [
    '#1A0CE8',
    ],
    borderColor: [
    '#1A0CE8',
    ],
    borderWidth: 2
}

const Belgium= {
    label: dataCountry[20],
    data: dataGlobal[20],
    backgroundColor: [
    '#FFD300',
    ],
    borderColor: [
    '#FFD300',
    ],
    borderWidth: 2
}

const NorthIreland= {
    label: dataCountry[21],
    data: dataGlobal[21],
    backgroundColor: [
    '#FF0DB3',
    ],
    borderColor: [
    '#FF0DB3',
    ],
    borderWidth: 2
}

const Dutch= {
    label: dataCountry[22],
    data: dataGlobal[22],
    backgroundColor: [
    '#00FFFF',
    ],
    borderColor: [
    '#00FFFF',
    ],
    borderWidth: 2
}

const Germany= {
    label: dataCountry[23],
    data: dataGlobal[23],
    backgroundColor: [
    '#33E80C',
    ],
    borderColor: [
    '#33E80C',
    ],
    borderWidth: 2
}

const Ireland= {
    label: dataCountry[24],
    data: dataGlobal[24],
    backgroundColor: [
    '#FF0DB3',
    ],
    borderColor: [
    '#FF0DB3',
    ],
    borderWidth: 2
}

const Cyprus= {
    label: dataCountry[25],
    data: dataGlobal[25],
    backgroundColor: [
        '#FFD300',
        ],
        borderColor: [
        '#FFD300',
        ],
    borderWidth: 2
}

const Denmark= {
    label: dataCountry[26],
    data: dataGlobal[26],
    backgroundColor: [
    '#FF0DB3',
    ],
    borderColor: [
    '#FF0DB3',
    ],
    borderWidth: 2
}

const Sweden= {
    label: dataCountry[27],
    data: dataGlobal[27],
    backgroundColor: [
    '#00FFFF',
    ],
    borderColor: [
    '#00FFFF',
    ],
    borderWidth: 2
}

const Slovenia= {
    label: dataCountry[28],
    data: dataGlobal[28],
    backgroundColor: [
    '#33E80C',
    ],
    borderColor: [
    '#33E80C',
    ],
    borderWidth: 2
}

const Finland= {
    label: dataCountry[29],
    data: dataGlobal[29],
    backgroundColor: [
    '#FF0DB3',
    ],
    borderColor: [
    '#FF0DB3',
    ],
    borderWidth: 2
}

const ctx = document.getElementById('canvas2');
const chartTable2 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labelYrs, 
        datasets: [Latvia, Lithuania, Czech, Poland, Slovakia,
        Hungary, England, Scotland, Spain, Romania, Malta, Bulgaria,
        Luxembourg, Portugal, Croatia, Italy, Greece, France, Austria,
        Belgium, NorthIreland, Dutch, Germany, Ireland, Cyprus, Denmark,
        Sweden, Slovenia, Finland]
    },
    options: {
        
    }
});

