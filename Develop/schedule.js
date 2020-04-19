$(document).ready(function() {
var date = moment().format("MMM Do YY")
console.log(date);

$("#currentDay").append(date);

$("#task" + 0).append(localStorage.getItem(0));
$("#task" + 1).append(localStorage.getItem(1));
$("#task" + 2).append(localStorage.getItem(2));
$("#task" + 3).append(localStorage.getItem(3));
$("#task" + 4).append(localStorage.getItem(4));
$("#task" + 5).append(localStorage.getItem(5));
$("#task" + 6).append(localStorage.getItem(6));
$("#task" + 7).append(localStorage.getItem(7));
$("#task" + 8).append(localStorage.getItem(8));


let nowHour24 = moment().format('H');
console.log(nowHour24)

}); //DOC READY END


function addTask(btnId, taskId) {
   console.log(btnId, taskId);
   localStorage.setItem(btnId, taskId);
   }

   // Background Color Set Function

const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));


Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    // current hour and set color 
    if (currentHour === rowHour) {
      setColor(row, "red");
    } else if ((currentHour < rowHour)){
      setColor(row, "green");
    } else {
      setColor(row, "lightgrey");
     
    }
  }
});

// function to set the background color 
function setColor(element, color) {
  element.style.backgroundColor = color;
}

   
   



