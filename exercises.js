/*
If statements - Evaluates (or checks) a condition. If the condition is true, any statements in the subsequent code block are executed
*/
/*var today = new Date();

if(today === "Friday"){
  return "Let's Party!";
};*/

/*
If/else statements = Evaluates (or checks) a condition. If the condition is true, the first code block is executed. If the condition is false, the second code block is executed instead.
*/

/*if(today === "Friday"){
  return "Let's Party!";
}else{
  return "Get back to coding!";
};*/


/*
 * #1
 * Function - canVote
 * Create a function named `canVote` which will take a parameter: `age`.
 *
 *  @param Datatype: Number `age`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed into the function is equal to or greater than Hawaii's voting age. Console.log your result.
*/

function canVote(age) {
  if(age>=21) {
    return true;
  }else {
    return false;
  }
}
console.log("canVote:",canVote(22));

/*
 * #2
 * Function - login
 * Create a function named `login` which will take a parameter: `password`.
 *
 *  @param Datatype: String `password`
 *  @return Datatype: String
 *
 * The function will return the message: "Login Success!", if the string passed into the function is "test1234"
 * Console.log your result.
*/

function login(password) {
  if(password === "test1234") {
    return "Login Success!"
  } else {
    return "incorrect password";
  }
}
console.log("Login:", login("test"));
console.log("Login:", login("test1234"));


/*
 * #3
 * Function - isGreaterThan
 * Create a function named `isGreaterThan` which will take two parameters: `first` and `second`
 *
 *  @param Datatype: Number `first`
 *  @param Datatype: Number `second`
 *  @return Datatype: Boolean
 *
 * The function will return true if the first number is greater than the second.
 * Console.log your result.
*/

function isGreaterThan(first,second) {
  if(first > second) {
    return true;
  } else {
    return false;
  }
}
console.log(isGreaterThan(1,2));
console.log(isGreaterThan(4,2));


/*
 * #4
 * Function - mustBeTrue
 * Create a function named `mustBeTrue` which will take a parameter: `boo`.
 *
 *  @param Datatype: Boolean `boo`
 *  @return Datatype: Boolean
 *
 * The function will return true if the value passed into the function is "true".
 * Console.log your result.
*/

function mustBeTrue(boo) {
  if(boo === true) {
    return true;
  }else {
    return false;
  }
}
console.log("mustBeTrue",mustBeTrue(true));
console.log("mustBeTrue",mustBeTrue(false));


/*
 * #5
 * Function - bigBird
 * Create a function named `bigBird` which will take a parameter: `word`.
 *
 *  @param Datatype: String `word`
 *  @return Datatype: String
 *
 * The function will return the message "Word to Big Bird!", if the string passed into the function is a three-letter word. 
 * Console.log your result.
*/

function bigBird(word) {
  if(word.length === 3) {
    return "word to Big Bird!";
  } else {
    return "nope.";
  }
}
console.log("bigBird true:",bigBird("tie"));
console.log("bigBird false:",bigBird("tied"));

/*
 * #6
 * Function - isEqual
 * Create a function named `isEqual` which takes two parameters: `first` and `second`.
 *
 *  @param Datatype: String `first`
 *  @param Datatype: String `second`
 *  @return Datatype: String
 *
 * If the strings are equal, the function will return the message "You look mahvelous!" Otherwise, return the message: "I don't know who you are anymore." 
 * Console.log your result.
*/

function isEqual(first,second) {
  if(first === second) {
    return "You look mahvelous!";
  } else {
    return "I don't know who you are anymore.";
  }
}
console.log("isEqual true:",isEqual(1,1));
console.log("isEqual false:",isEqual(1,4));



/*
 * #7
 * Function - notEqual
 * Create a function named `notEqual` which takes two parameters: `first` and `second`.
 *
 *  @param Datatype: String `first`
 *  @param Datatype: String `second`
 *  @return Datatype: String
 *
 * If the strings are not equal, the function will return the message "Opposites do attract." Otherwise, return the message: "Cause it's like you're my mirror." 
 * Console.log your result.
*/

function notEqual(first,second) {
  if(first != second) {
    return "Opposites do attract.";
  } else{
    return "Cause it's like you're my mirror.";
  }
}
console.log("notEqual true",notEqual("2","eu"));
console.log("notEqual false",notEqual("2","2"));

/*
 * #8
 * Function - spareChange
 * Create a function named `spareChange` which takes a parameter: `money`.
 *
 *  @param Datatype: Number `money`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed into the function is greater than 100, otherwise it will return false.
 * Console.log your result.
*/ 

function spareChange(money) {
  if(money > 100) {
    return true;
  } else {
    return false;
  }
}
console.log("spareChange true",spareChange(111));
console.log("spareChange false",spareChange(11));


/*
 * #9
 * Function - dirty30
 * Create a function named `dirty30` which takes three parameters: `one`, `two` and `three`.
 *
 *  @param Datatype: Number `one`
 *  @param Datatype: Number `two`
 *  @param Datatype: Number `three`
 *  @return Datatype: Boolean
 *
 * The function will return true if the sum of all the number values is greater than 30, otherwise it will return false.
 * Console.log your result.
*/ 

function dirty30(one,two,three) {
  if((one + two + three) > 30) {
    return true;
  } else {
    return false;
  }
}
console.log("dirty30 true",dirty30(1,23,6));
console.log("dirty30 false",dirty30(1,232,6));


/*
 * #10
 * Function - evenStevens
 * Create a function named `evenStevens` which takes a parameter: `num`.
 *
 *  @param Datatype: Number `num`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed in is an even integer, otherwise it will return false.
 * Console.log your result.
*/ 

function evenStevens(num) {
  if((num%2) === 0) {
    return true;
  } else {
    return false;
  }
}
console.log("evenStevens 1",evenStevens(1));
console.log("evenStevens 2",evenStevens(2));
console.log("evenStevens 3",evenStevens(3));

/*
 * #11
 * Function - daClub
 * Create a function named `daClub` which takes two parameters: `cover` and `age`.
 *
 *  @param Datatype: Number `cover`
 *  @param Datatype: Number `age`
 *  @return Datatype: String
 *
 * If BOTH values are 21 or over, the function will return the message: "Welcome to the Legends Lounge." Otherwise, it will return the message: "Chuck E Cheese is across the street."
 * Console.log your result.
*/ 

function daClub(cover,age) {
  if(cover>=21 && age>=21) {
    return "welcome to the legends lounge.";
  } else{
    return "Chuck E Cheese is across the street.";
  }
}
console.log("daClub true true",daClub(21,21));
console.log("daClub true false",daClub(23,2));
console.log("daClub false true",daClub(2,21));
console.log("daClub false false",daClub(2,210));

/*
 * #12
 * Function - graduation
 * Create a function named `graduation` which takes two parameters: `credits` and `thesis`.
 *
 *  @param Datatype: Number `credit`
 *  @param Datatype: Boolean `thesis`
 *  @return Datatype: String
 *
 * If EITHER the number value is greater than or equal to 120 or the boolean value is true, then the function will return the message: "Congratulations on a job well done." Otherwise, return the message: "See you in summer school."
 * Console.log your result.
*/ 

function graduation(credits,thesis) {
  if(credits>=120 || thesis ===true) {
    return "Congratulations on a job well done.";
  } else {
    return "See you in summer school.";
  }
}
console.log("graduation t t",graduation(120,true));
console.log("graduation t t",graduation(123,true));
console.log("graduation t f",graduation(120,false));
console.log("graduation f t",graduation(111,true));
console.log("graduation f f",graduation(12,false));


/*
 * #13
 * Function - moneyTrain
 * Create a function named `moneyTrain` which takes a parameter: `speed`.
 *
 *  @param Datatype: Number `speed`
 *  @return Datatype: String
 *
 * The function will return the message: "You are riding Honolulu's Rail.", if the number value is less than 50, otherwise it will return the message: "You are riding an Amtrak.", if the number value is less than 100, and return the message: "Now you ballin' in the Shinkansen!", if the number value is greater than or equal to 100.
 * Console.log your result.
*/ 

function moneyTrain(speed) {
  if(speed < 50) {
    return "You are riding Honolulu's Rail.";
  }else if(speed < 100) {
    return "You are riding an Amtrak";
  }else {
    return "Now you ballin' in the Shinkansen!";
  }
}
console.log("moneyTrain 30",moneyTrain(30));
console.log("moneyTrain 50",moneyTrain(50));
console.log("moneyTrain 340",moneyTrain(340));


/*
 * #14
 * Function - buyDoughnut
 * Declare a variable named `budget` and assign it with a number value that is greater than 20.
 * Declare a variable named `doughnutPrice` and assign it with a number value that is greater than 0 but less than 6.
 * Declare a variable named `doughnutBought` and assign it with a number value of 0.
 *
 * Create a function named `buyDoughnut` which takes NO parameters.
 * When the function is invoked, the budget will be decreased by the doughnutPrice and doughnutBought will increase by 1.
 * Console.log budget and doughnutBought.
 * Invoke your function again.
 * Console.log budget and doughnutBought again.
*/ 

var budget = 2200;
var doughnutPrice = 4;
var doughnutBought = 0;

function buyDoughnut() {
  if(budget >= doughnutPrice) {
    budget = budget - doughnutPrice;
    doughnutBought++;
  } else{
    return "no donuts for you.";
  }
}

console.log("budget =",budget," #donuts = ",doughnutBought);
buyDoughnut();
console.log("budget =",budget," #donuts = ",doughnutBought);
buyDoughnut();
console.log("budget =",budget," #donuts = ",doughnutBought);

/*
For loops - A for loop checks a condition a specific number of times and allows us to execute a code block and evaluate a condition to determine if our loop should run again.

The for loop is made up for 3 parts:

1) Initialization (i.e. var i = 0;)
2) Condition (i.e. i<arr.length;)
3) Update (i.e. i++)
*/

var toyotaModels = ["Corolla", "Prius", "4 Runner", "Camry", "Land Cruiser"];

for (var i = 0; i<toyotaModels.length; i++){
  console.log("Toyota " + toyotaModels[i]);
}


/* 
 * #15
 * Create a for loop that will iterate 5 times and console.log the following:
 * "Player: 1"
 * "Player: 2"
 * "Player: 3"
 * "Player: 4"
 * "Player: 5"
*/

for (var i = 1; i<6;i++) {
  console.log("player: " + i);
}

/* 
 * #16
 * Create a for loop that will iterate and console.log each item in the array below:
*/
  var myFavFoods = ["lemon bar", "carrot cake", "nachos", "bacon cheeseburger", "ramen", "sweet potato fries", "chimichanga"];

for(var i = 0; i<myFavFoods.length;i++) {
  console.log(myFavFoods[i]);
}

/*
 * #17
 * Function - sumItUp
 * Declare a variable named `numArray` and assign it with an array of 5 random numbers of your choice.
 * Declare a variable named `total` and assign it with a number value of 0.
 * 
 * Create a function named sumItUp which takes a parameter: `arr`.
 * 
 *   @param Datatype: Array `arr`
 *   @return Datatype: Number
 * 
 * The function will loop through and add up all the values in the array that is passed into the function and return the total.
 * Console.log your result.
*/

var numArray = [1,8,2,19,17];
var total = 0;

function sumItUp(arr) {
  for( var i = 0; i<arr.length;i++) {
    total = total + arr[i];
  }
  return total;
}
console.log("numArray",sumItUp(numArray));

/*
 * #18
 * Function - allStars
 * Create a function named `allStars` which takes a parameter: `ballers`.
 *
 *  @param Datatype: Array `ballers`
 *  @return Datatype: Array
 *
 * The function will loop through the players array and will put all the even number indexed players in the `east` array and the rest in the `west` array.
 * Console.log both the east and west arrays.
*/ 

  var players = ["LeBron", "Linsanity", "Kawhi", "Kobe", "Yao Ming", "Bird", "Jordan"];
  var east = [];
  var west = [];
function allStars(ballers) {
  console.log(ballers.length);
  for(var i = 0; i<ballers.length;i++) {
    if((i%2)===0) {//evens
      west.push(ballers[i]);
    }else{
      east.push(ballers[i]);
    }
  }
}
allStars(players);
console.log("east:" + east +"\n  west" + west);
/*
 * #19
 * Function - subways
 * Create a function named `subways` which takes a parameter: `special`.
 *
 *  @param Datatype: Array `special`
 *  @return Datatype: Array
 *
 * The function will loop through the array value and replace all the odd numbered indexed items with "Classic Tuna".
 * Console.log your results.
*/ 

  var subOftheDay = ["Teriyaki Chicken", "Spicy Italian", "Turkey", "BMT", "Black Forest Ham", "Meatball Marinara", "Veggie"];

function subways(special) {
  console.log("before subs" + subOftheDay);
  for(var i = 0;i<special.length;i++)
    if((i%2)===0) {
      special[i]="Classic Tuna";
    }
  console.log("special sub",special);
}
subways(subOftheDay);
/*
Final Boss
 * #20
 * Function - removeLetter
 * Create a function named `removeLetter`, which takes a parameter `str`. 
 *
 *   @param Datatype: String `str`
 *   @return Datatype: Array
 *
 *  The function will loop through the string value and put all the letters into an array, except for the letter "A" and "a". We don't want no stinking "A" or "a" in our array. Test your function with the `phrase` below!
*/

  var phrase = "An apple a day keeps Alice feeling awesome!"
  
  var newStr = [];
  //var finalStr = "";

function removeLetter(str) {
  var counter2 = 0;
  for(var i=0;i<str.length;i++) {
    if(str[i] != "A" && str[i]!= "a"){
      newStr[counter2]=str[i];
      counter2++;
    }  
  }
}

removeLetter(phrase);
console.log("1",newStr);

//#2 use this one.

var newStr2 = [];

function removeLetter2(str) {
  //console.log(str);
  for(var i=0;i<str.length;i++) {
    //console.log(str[i]);
    if(str[i] != "a" && str[i] != "A") {
      newStr2.push(str[i]);
      //console.log(newStr2);
    }
  }
}
removeLetter2(phrase);
console.log("2",newStr2);

//#3front to back.  this string eats itself.

var newStr3 = phrase.split("");
console.log("3.1",newStr3);

function removeLetter3(str) {
  var strLength = str.length;
  //console.log(strLength);
  for(var i = 0; i < strLength; i++) {
    //console.log(i);
    if(str[0] != "a" && str[0] != "A") {
      str.push(str.shift());
    }else {
      str.shift();
    }
  }
  return str;
}

newStr3 = removeLetter3(newStr3);
console.log("3",newStr3);


/*function backtoStr(array) {
  for(var i = 0;i<newStr.length;i++) {
    console.log(array[i]);
    //finalStr += array[i];
  }
}
backtoStr(newStr);*/



/*var arrayX3 = [[[1,2,3],[4,5,6],[7,8,9]],[[10,11,12],[13,14,15],[16,17,18]],[[19,20,21],[22,23,24],[25,26,27]]];
var sum = 0;
//add the arrays in the arrays in the arrays


console.log("c",arrayX3[a,b,c]);

for(var a = 0; a<arrayX3.length;a++) {
  var arrayA = arrayX3[a];
  //console.log("a",arrayA);
  for(var b = 0; b<arrayX3.length;b++) {
    var arrayB = arrayA[b];
    //console.log("b",arrayB);
    for(var c = 0; c < arrayX3.length;c++) {
      var cell = arrayB[c];
      //console.log("c",cell);
      sum += cell;
      console.log(cell," ",sum);
    }
  }
}*/


