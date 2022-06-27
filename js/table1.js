
let div = document.createElement('div');
let canvas = document.createElement('canvas');
canvas.id = 'canvas1';
canvas.width = 800;
canvas.height = 800;
div.append(canvas);


// document.getElementById('firstHeading').appendChild(div, canvas);
const table1 = document.getElementById('table1');
table1.parentNode.insertBefore(div, table1);
// table2.parentNode.insertBefore(div, table2);
// console.log(table1.parentNode);
// console.log(table2);
// console.log(canvas)
// console.log(div);


function point(e) {
    return parseFloat((e + "").replace(",", "."));
}

let dataCountry=[];
let dataGlobal = [];
let labelYears = [];

function gatherDomData(e) {

    /* Getting the number of rows in the table. */
    let rowLength = e.rows.length;
    let years = e.rows[1];
    let yearsLength = years.cells.length;


    for(let j = 2; j < yearsLength; j++) {
        let yrs = years.cells[j].innerText;
        labelYears.push(yrs);
    }

    

    
    for (let i = 1; i < rowLength; i++) {
        /* Getting the cells of the table. */
        let row = e.rows[i];
        
        let colCountry = row.cells[1].innerText;
        dataCountry.push(colCountry);

        let temp = [];


        for (var j = 2, col; col = row.cells[j]; j++) {
            temp.push(point(col.innerText));

        }
        dataGlobal.push(temp)
        

    }

}


console.log(dataCountry);

console.log(dataGlobal);

console.log(labelYears)

gatherDomData(table1);

const Belgium = {
    label: dataCountry[1],
    data: dataGlobal[1],
    backgroundColor: [
    '#FFD300',
    ],
    borderColor: [
    '#FFD300',
    ],
    borderWidth: 4
}


const Bulgaria = {
    label: dataCountry[2],
    data: dataGlobal[2],
    backgroundColor: [
    '#1A0CE8',
    ],
    borderColor: [
    '#1A0CE8',
    ],
    borderWidth: 4
}


const Czech = {
    label: dataCountry[3],
    data: dataGlobal[3],
    backgroundColor: [
    '#00FFFF',
    ],
    borderColor: [
    '#00FFFF',
    ],
    borderWidth: 4
}


const Denmark = {
    label: dataCountry[4],
    data: dataGlobal[4],
    backgroundColor: [
    '#33E80C',
    ],
    borderColor: [
    '#33E80C',
    ],
    borderWidth: 4
}


const Germany = {
    label: dataCountry[5],
    data: dataGlobal[5],
    backgroundColor: [
    '#FF0DB3',
    ],
    borderColor: [
    '#FF0DB3',
    ],
    borderWidth: 4
}


const Estonia = {
    label: dataCountry[6],
    data: dataGlobal[6],
    backgroundColor: [
    '#FFD300',
    ],
    borderColor: [
    '#FFD300',
    ],
    borderWidth: 4
}


const Ireland = {
    label: dataCountry[7],
    data: dataGlobal[7],
    backgroundColor: [
    '#1A0CE8',
    ],
    borderColor: [
    '#1A0CE8',
    ],
    borderWidth: 4
}


const Greece = {
    label: dataCountry[8],
    data: dataGlobal[8],
    backgroundColor: [
    '#00FFFF',
    ],
    borderColor: [
    '#00FFFF',
    ],
    borderWidth: 4
}


const Spain = {
    label: dataCountry[9],
    data: dataGlobal[9],
    backgroundColor: [
    '#33E80C',
    ],
    borderColor: [
    '#33E80C',
    ],
    borderWidth: 4
}


const France = {
    label: dataCountry[10],
    data: dataGlobal[10],
    backgroundColor: [
    '#FF0DB3',
    ],
    borderColor: [
    '#FF0DB3',
    ],
    borderWidth: 4
}


const Croatia = {
    label: dataCountry[11],
    data: dataGlobal[11],
    backgroundColor: [
    '#FFD300',
    ],
    borderColor: [
    '#FFD300',
    ],
    borderWidth: 4
}


const Italy = {
    label: dataCountry[12],
    data: dataGlobal[12],
    backgroundColor: [
    '#1A0CE8',
    ],
    borderColor: [
    '#1A0CE8',
    ],
    borderWidth: 4
}


const Cyprus = {
    label: dataCountry[13],
    data: dataGlobal[13],
    backgroundColor: [
    '#00FFFF',
    ],
    borderColor: [
    '#00FFFF',
    ],
    borderWidth: 4
}


const Latvia = {
    label: dataCountry[14],
    data: dataGlobal[14],
    backgroundColor: [
    '#33E80C',
    ],
    borderColor: [
    '#33E80C',
    ],
    borderWidth: 4
}


const Lithuania = {
    label: dataCountry[15],
    data: dataGlobal[15],
    backgroundColor: [
    '#FF0DB3',
    ],
    borderColor: [
    '#FF0DB3',
    ],
    borderWidth: 4
}


const Luxembourg = {
    label: dataCountry[16],
    data: dataGlobal[16],
    backgroundColor: [
    '#FFD300',
    ],
    borderColor: [
    '#FFD300',
    ],
    borderWidth: 4
}


const Hungary = {
    label: dataCountry[17],
    data: dataGlobal[17],
    backgroundColor: [
    '#1A0CE8',
    ],
    borderColor: [
    '#1A0CE8',
    ],
    borderWidth: 4
}


const Malta = {
    label: dataCountry[18],
    data: dataGlobal[18],
    backgroundColor: [
    '#00FFFF',
    ],
    borderColor: [
    '#00FFFF',
    ],
    borderWidth: 4
}


const Dutch = {
    label: dataCountry[19],
    data: dataGlobal[19],
    backgroundColor: [
    '#33E80C',
    ],
    borderColor: [
    '#33E80C',
    ],
    borderWidth: 4
}


const Austria = {
    label: dataCountry[20],
    data: dataGlobal[20],
    backgroundColor: [
    '#FF0DB3',
    ],
    borderColor: [
    '#FF0DB3',
    ],
    borderWidth: 4
}


const Poland = {
    label: dataCountry[21],
    data: dataGlobal[21],
    backgroundColor: [
    '#FFD300',
    ],
    borderColor: [
    '#FFD300',
    ],
    borderWidth: 4
}


const Portugal = {
    label: dataCountry[22],
    data: dataGlobal[22],
    backgroundColor: [
    '#1A0CE8',
    ],
    borderColor: [
    '#1A0CE8',
    ],
    borderWidth: 4
}


const Romania = {
    label: dataCountry[23],
    data: dataGlobal[23],
    backgroundColor: [
    '#00FFFF',
    ],
    borderColor: [
    '#00FFFF',
    ],
    borderWidth: 4
}


const Slovenia = {
    label: dataCountry[24],
    data: dataGlobal[24],
    backgroundColor: [
    '#33E80C',
    ],
    borderColor: [
    '#33E80C',
    ],
    borderWidth: 4
}


const Slovakia = {
    label: dataCountry[25],
    data: dataGlobal[25],
    backgroundColor: [
    '#FF0DB3',
    ],
    borderColor: [
    '#FF0DB3',
    ],
    borderWidth: 4
}


const Finland = {
    label: dataCountry[26],
    data: dataGlobal[26],
    backgroundColor: [
    '#FFD300',
    ],
    borderColor: [
    '#FFD300',
    ],
    borderWidth: 4
}


const Sweden = {
    label: dataCountry[27],
    data: dataGlobal[27],
    backgroundColor: [
    '#1A0CE8',
    ],
    borderColor: [
    '#1A0CE8',
    ],
    borderWidth: 4
}


const Iceland = {
    label: dataCountry[28],
    data: dataGlobal[28],
    backgroundColor: [
    '#00FFFF',
    ],
    borderColor: [
    '#00FFFF',
    ],
    borderWidth: 4
}


const Liechtenstein = {
    label: dataCountry[29],
    data: dataGlobal[29],
    backgroundColor: [
    '#33E80C',
    ],
    borderColor: [
    '#33E80C',
    ],
    borderWidth: 4
}


const Norway = {
    label: dataCountry[30],
    data: dataGlobal[30],
    backgroundColor: [
    '#FF0DB3',
    ],
    borderColor: [
    '#FF0DB3',
    ],
    borderWidth: 4
}


const Switzerland = {
    label: dataCountry[31],
    data: dataGlobal[31],
    backgroundColor: [
    '#FFD300',
    ],
    borderColor: [
    '#FFD300',
    ],
    borderWidth: 4
}


const Montenegro = {
    label: dataCountry[32],
    data: dataGlobal[32],
    backgroundColor: [
    '#1A0CE8',
    ],
    borderColor: [
    '#1A0CE8',
    ],
    borderWidth: 4
}


const Macedonia = {
    label: dataCountry[33],
    data: dataGlobal[33],
    backgroundColor: [
    '#00FFFF'
    ],
    borderColor: [
    '#00FFFF'
    ],
    borderWidth: 4
}


const Serbia = {
    label: dataCountry[34],
    data: dataGlobal[34],
    backgroundColor: [
    '#33E80C',
    ],
    borderColor: [
    '#33E80C',
    ],
    borderWidth: 4
}


const Turkey = {
    label: dataCountry[35],
    data: dataGlobal[35],
    backgroundColor: [
    '#FF0DB3',
    ],
    borderColor: [
    '#FF0DB3',
    ],
    borderWidth: 4
}


const ctx = document.getElementById('canvas1');
const chartTable1 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labelYears,
        datasets: [Belgium, Bulgaria, Czech, Denmark,
        Germany, Estonia, Ireland, Greece, Spain, France, 
        Croatia, Italy, Cyprus, Latvia, Lithuania,
        Luxembourg, Hungary, Malta, Dutch, Austria, Poland,
        Portugal, Romania, Slovenia, Slovakia, Finland,
        Sweden, Iceland, Liechtenstein, Norway, Switzerland,
        Montenegro, Macedonia, Serbia, Turkey]
    },
    options: {
    }
});


