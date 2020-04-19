$(document).ready(function() {
var date = moment().format("MMM Do YY")
console.log(date);

$("#currentDay").append(date);

for(i=0; i < localStorage.length;i++) {
  $("#task" + i).append(localStorage.getItem(localStorage.key(i)));
}

}); //DOC READY END

let nowHour24 = moment().format('H');
let nowHour12 = moment().format('h');


function addTask(btnId, taskId) {
   console.log(btnId, taskId);
   localStorage.setItem(btnId, taskId);
   }

   function updateRowColor($hourRow,hour) { 
  
      if (test) { console.log("rowColor ",nowHour24, hour); }
  
      if ( hour < nowHour24) {
        // $hourRow.css('')
        if (test) { console.log("lessThan"); }
        $hourRow.css("background-color","lightgrey")
      } else if ( hour > nowHour24) {
        if (test) { console.log("greaterthan"); }
        $hourRow.css("background-color","lightgreen")
      } else {
        if (test) { console.log("eqaul"); }
        $hourRow.css("background-color","tomato")
      }
    };
   



