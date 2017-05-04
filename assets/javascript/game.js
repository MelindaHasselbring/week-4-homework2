/*Author: Melinda Hasselbring
Date:  05/03/2017   
Time:3:50 PM
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
//  goal = Math.floor((Math.random()*120) +19);
//  var score = "";
//  var maxGoal = 120;
//  console.log("goal is:" + goal);
//  if (goal >  120){
// 	alert ("goal is not valid!");
//  		goal = maxGoal;
//  		console.log("new goal is:" + goal);
//  		return goal;
//  	   } 
// else if(goal >18 || goal <  121){
//  		return goal;
//  }


}

function update(){
  document.querySelector("#wins").innerHTML = win;
  score = 0;
  document.querySelector("#value").innerHTML = score;
  createGoal();
  document.querySelector("#rand").innerHTML = goal;
  console.log ("new goal: " + goal);
  diamondValue = Math.floor((Math.random()*12) +1);
  console.log ("new score: " + score );

}


createGoal();
document.querySelector("#rand").innerHTML = goal;

function reset(){
  update();
  createGoal();
}


 //set the diamond-icon as a button and clicable.
 $("#diamond-icon").on("click", function() {
 	// alert ("diamond");
  score += diamondValue;
  document.querySelector("#value").innerHTML = score;
  console.log("D: Your total score is: " +diamondValue +",   "+ score);

  if (score === goal) {
     	// alert("You win!");
      win ++;
      document.querySelector("#wins").innerHTML = win;
      document.querySelector("#value").innerHTML = score;
  		// score = "";
	 	  // document.querySelector("#value").innerHTML = score;
	 	  // goal = ""; 
	  	// createGoal();
	 	  // document.querySelector("#rand").innerHTML = goal;
	  	// console.log ("new goal: " + goal);
	  	// diamondValue = Math.floor((Math.random()*12) +1);
 	 	  // console.log ("new score: " + score );
       update();
     }

     else if (score > goal) {
      // alert("You lose!!");
      losses++;
      document.querySelector("#losses").innerHTML = losses;
      document.querySelector("#value").innerHTML = score;
      // score = "";
      // document.querySelector("#value").innerHTML = score;
      // goal = ""; 
      // createGoal();
      // document.querySelector("#rand").innerHTML = goal;
      // console.log ("new goal: " + goal);
      // diamondValue = Math.floor((Math.random()*12) +1);
      // console.log ("new score: " + score );
      update();
    }
  });

 $("#spade-icon").on("click", function() {
 	// alert ("spade");
  score += spadeValue;
  document.querySelector("#value").innerHTML = score;
  console.log("S: Your total score is:  " +spadeValue+",   "+ score);

  if (score === goal) {
      // alert("You win!");
      win ++;
      document.querySelector("#wins").innerHTML = win;
      update();
    }

    else if (score>= goal) {
      // alert("You lose!!");
      losses++;
      document.querySelector("#losses").innerHTML = losses;
      update();
    }
  });

 $("#heart-icon").on("click", function() {

  score += heartValue;
	// alert ("heart");
  document.querySelector("#value").innerHTML = score;
  console.log("H: Your total score is:  " +heartValue+",   "+ score);

  if (score === goal) {
      // alert("You win!");
      win ++;
      document.querySelector("#wins").innerHTML = win;
      update();
    }

    else if (score>= goal) {
      // alert("You lose!!");
      losses++;
      document.querySelector("#losses").innerHTML = losses;
      update();
    }
  });

 $("#clubs-icon").on("click", function() {
 	// alert ("clubs");
  score += clubsValue;
  document.querySelector("#value").innerHTML = score;
  console.log("C: Your total score is:  " +clubsValue+",   "+ score);
  if (score === goal) {
      // alert("You win!");
      win ++;
      document.querySelector("#wins").innerHTML = win;
      update();
    }

    else if (score>= goal) {
      // alert("You lose!!");
      losses++;
      document.querySelector("#losses").innerHTML = losses;
      update();
    }
  });
});