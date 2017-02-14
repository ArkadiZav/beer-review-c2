// exercise 1:
//Create an addBeer function that takes two arguments, "name" and "category".
//Create an event handler that invokes addBeer when the '.post-beer' button gets clicked,
//and pass in the "beer name" and "category" that the user entered.

// exercise 2:
//Create an addBeer function that takes two arguments, "name" and "category".
//Create an event handler that invokes addBeer when the '.post-beer' button gets clicked,
//and pass in the "beer name" and "category" that the user entered.

var beers = [];

var addBeer = function(name, category) {
  var newBeer = {beerName: name, beercategory: category};
  beers.push(newBeer);
  console.log(beers); 
};

var eventHandler = function() {
  var $beerInput = $("#beername").val();
  var $categoryInput = $("#beercategory").val();
  $(".post-beer").on("click", addBeer($beerInput, $categoryInput));
};

$("button").on("click", eventHandler);
