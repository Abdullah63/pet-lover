'use strict'
// function createGreeting(){

//   var hourNow = prompt("what time is now?");
//   var greeting;
// if (hourNow > 18 && hourNow <24 ) {
//   greeting = 'Good evening, Class!';
// } else if (hourNow > 12 && hourNow <=18) {
//   greeting = 'Good afternoon, Class!';
// } else if (hourNow >= 0 && hourNow <=12) {
//   greeting = 'Good morning!';
// } else {
//   greeting = 'Welcome!';
// }
//   return greeting;
// }
// document.write('<h3>' + greeting + '</h3>');

var showOrder = function () {
  var order = prompt("what do you want to order ?");

  while (order !== 'house' && order !== 'hotel') {
    order = prompt("please insert hotel or house");
  }
  var item="";

  var noOfOrder = prompt("how many orders do you want ?");
  
  for (var i = 0; i < noOfOrder; i = i + 1) {
    if (order === 'house' || order == 'House') {
      item = item + '<img src="images/house.png">';
    } else if (order == 'hotel') {
      item = item + '<img src="images/hotel.png">';
    }
  }
  return item;
}