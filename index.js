 /*const months = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

const date = new Date();

const month = months[date.getMonth()];

//console.log(month);

document.getElementById("monthName").innerHTML = month;

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
"Friday", "Saturday"];

//const date = new Date();

const day = days[date.getDay()];

//const Day = date.getDate();

document.getElementById("dayName").innerHTML = day;

console.log(day);
console.log(Day);

const year = date.getFullYear();

console.log(year);*/

const dayEL = document.getElementById("day");
const monthEl = document.getElementById("month");
const yearEl = document.getElementById("years");
const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateDate() {
    let d = new Date().getDate();
    let m = new Date().getMonth();
    let h = new Date().getHours();
    let min = new Date().getMinutes();
    let s = new Date().getSeconds();
   //let y = new Date().getFullYear();
    
    d = d < 10 ? "0" + d : d;

    m = m < 10 ? "0" + m : m;

    h = h < 10 ? "0" + h : h;

    min = min < 10 ? "0" + min : min;

    s = s < 10 ? "0" + s : s;

    //y = y < 10 ? "0" + y : y;

    dayEL.innerText = d;
    monthEl.innerText = m;
   // yearEl.innerText = y;
   hourEl.innerText = h;
   minutesEl.innerText = min;
   secondsEl.innerText = s;

 const months = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

const date = new Date();

const month = months[date.getMonth()];
document.getElementById("monthName").innerHTML = month;


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
"Friday", "Saturday"];

const day = days[date.getDay()];

document.getElementById("dayName").innerHTML = day;

//const year = date.getFullYear();
//document.getElementById("yearName").innerHTML = year;
setInterval(updateDate, 1000);
}
updateDate()