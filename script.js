async function getCloud(){
const response = await fetch ("GLB.Ts+dSST.csv");
const data = await response.text();



const table = data.split("\n");
console.log(table);
table.forEach(columns =>{
    const row = columns.split(",")
    const year = row[0];
    const month1 = row[1];
    const month2 = row[2];
    const month3 =row[3];
console.log(year, month1, month2, month3);
});


}

getCloud();



