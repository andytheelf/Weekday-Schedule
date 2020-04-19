$(document).ready(function() {
var date = moment().format("MMM Do YY")
console.log(date);

$("#currentDay").append(date);

for(i=0; i < localStorage.length;i++) {
  $("#task" + i).append(localStorage.getItem(localStorage.key(i)));
}

let nowHour24 = moment().format('H');
console.log(nowHour24)


// if(nowHour24 < 9 || nowHour24 > 17) {

// for(i=0;i<9;i++) {
// $("#task" + i).addClass("present");
//   }
// }


}); //DOC READY END


function addTask(btnId, taskId) {
   console.log(btnId, taskId);
   localStorage.setItem(btnId, taskId);
   }

   // Background Color Set Function

// define row is time in 24 hour time format
const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));

// lets make sure we are getting expected output
console.log(currentHour);

// makes a row id to compare
Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === rowHour) {
      setColor(row, "red");
    } else if ((currentHour > rowHour)){
      setColor(row, "green");
    } else if ((currentHour < rowHour)) {
      setColor(row, "lightgrey");
    }
  }
});

// function to set the background color based of hour
function setColor(element, color) {
  element.style.backgroundColor = color;
}

   
   



