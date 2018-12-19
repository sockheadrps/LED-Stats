var ledJsonData =[
    {
        make: "Bridgelux",
        model: "Vero 29 gen 7",
        mfgNum: "BXRC-40E10K0-D-73",
        cct: 4000,
        voltage: 37.7,
        amperage: 2100,
        lpw: 143,
        price: 28,
        imgLink: "https://media.digikey.com/Photos/Bridgelux/MFG_Gen-7-Vero-29-Array_sml.JPG"
    },
    {
        make: "Cree",
        model: "CXB3590",
        mfgNum: "CXB3590-0000-000N0HCD40G",
        cct: "4000",
        voltage: 36,
        amperage: 2400,
        lpw: 145,
        price: 38,
        imgLink: "https://media.digikey.com/Photos/Cree%20Photos/CXB3590_tmb.jpg"
    }
]

$(document).ready(function(){
    $('button').click(function(){
        $('ul').toggleClass('active')
    })
})


var table = "";
var rows = 7;
var cols = 2;
var numOfProps = 0
ledIndex = 0;

function FillTable(jsonIndexToSearch, whichTableToFill){

    for(var dataType in Object.keys(ledJsonData[jsonIndexToSearch])){
        if (dataType != Object.keys(ledJsonData[jsonIndexToSearch]).length - 1){
            dataType = Object.keys(ledJsonData[jsonIndexToSearch])[numOfProps]
            dataValue = ledJsonData[jsonIndexToSearch][Object.keys(ledJsonData[jsonIndexToSearch])[numOfProps]]
            numOfProps++
            table += '<tr>';
            table += '<td>' + dataType + '</td>'
            table += '<td>' + dataValue + '</td>'
            table += '</tr>';
        }
    }
    document.getElementById(whichTableToFill).innerHTML = '<table>' + table + '</table>';
    document.getElementById(whichTableToFill + "-image").innerHTML = 
        '<img src="' + ledJsonData[jsonIndexToSearch][Object.keys(ledJsonData[jsonIndexToSearch])[numOfProps]] + '">';
    table = "";
    numOfProps = 0;
}

FillTable(ledIndex, "table1")
FillTable(ledIndex + 1, "table2")
