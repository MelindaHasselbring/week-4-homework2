/*Author: Melinda Hasselbring
Date:  05/04/2017   
Time:  1:50 PM
Email: melinda.hasselbring@gmail.com */

 var score = 0;       
 var win = 0;
 var losses = 0;

// random # between 1 & 12 for each crystal-icon 
var diamondValue = Math.floor((Math.random()*12) +1);
var spadeValue  = Math.floor((Math.random()*12) +1);
var heartValue  = Math.floor((Math.random()*12) +1);
var clubsValue  = Math.floor((Math.random()*12) +1);


$(document).ready(function(){
  var goal;

  function createGoal(){
   var min = 19; 
   var max = 120; 

   goal = Math.floor(Math.random()*(max-min+1) +min);
   return goal;
}

function update(){
  $("#wins").html(win);
  score = 0;
  $("#value").html(score);
  createGoal();
  $("#rand").html(goal);
  diamondValue = Math.floor((Math.random()*12) +1);
  spadeValue  = Math.floor((Math.random()*12) +1);
  heartValue  = Math.floor((Math.random()*12) +1);
  clubsValue  = Math.floor((Math.random()*12) +1);

  // console.log ("new goal: " + goal);
  // console.log ("new score: " + score );
  // console.log ("new diamondValue: " + diamondValue);
  // console.log ("new spadeValue: " + spadeValue);
  // console.log ("new heartValue: " + heartValue);
  // console.log ("new clubsValue: " + clubsValue);
}


createGoal();
  $("#rand").html(goal);
  function reset(){
  update();
  createGoal();
}


 //set the diamond-icon as a button and clicable.
 $("#diamond-icon").on("click", function() {
    score += diamondValue;
    $("#value").html(score);
    console.log("D: Your total score is:  " +diamondValue +",   "+ score);

  if (score === goal) {
      // alert("You win!");
      win ++;
      $("#wins").html(win);
      document.querySelector("#value").innerHTML = score;
      update();
     }

     else if (score > goal) {
      // alert("You lose!!");
      losses++;
      $("#losses").html(losses);
      $("#value").html(score);
      update();
    }
  });

 $("#spade-icon").on("click", function() {
    score += spadeValue;
    $("#value").html(score);
    console.log("S: Your total score is:  " +spadeValue+",   "+ score);
    if (score === goal) {
       // alert("You win!");
        win ++;
        $("#wins").html(win);
        update();
    }

    else if (score>= goal) {
      // alert("You lose!!");
      losses++;
      $("#losses").html(losses);
      update();
    }
  });

 $("#heart-icon").on("click", function() {
    score += heartValue;
    $("#value").html(score);
    console.log("H: Your total score is:  " +heartValue+",   "+ score);

  if (score === goal) {
      // alert("You win!");
      win ++;
      $("#wins").html(win);
      update();
    }

    else if (score>= goal) {
      // alert("You lose!!");
      losses++;
      $("#losses").html(losses);
      update();
    }
  });

 $("#clubs-icon").on("click", function() {
    score += clubsValue;
    document.querySelector("#value").innerHTML = score;
    console.log("C: Your total score is:  " +clubsValue+",   "+ score);
    if (score === goal) {
      // alert("You win!");
      win ++;
      $("#wins").html(win);
      update();
    }

    else if (score>= goal) {
      // alert("You lose!!");
      losses++;
      $("#losses").html(losses);
      update();
    }
  });
});