// exercise 1:
//Create an addBeer function that takes two arguments, "name" and "category".
//Create an event handler that invokes addBeer when the '.post-beer' button gets clicked,
//and pass in the "beer name" and "category" that the user entered.

// exercise 2:
// Inside the addBeer function, create a new beer object with the new data and push it to a global array called beers.

// exercise 3:
// Create another function called updateBeers that takes no arguments. Inside this function, empty the '.beers-list' ul first,
// then loop through the beers array and append the beers to the '.beers-list' ul.
// Invoke this function inside your '.post-beer' click handler just below where you're invoking the addBeer function.

var beers = [];

var addBeer = function(name, category) {
  var newBeer = {beerName: name, beercategory: category};
  beers.push(newBeer);
  console.log(beers);
};

var updateBeers = function() {
  $("ul").empty();
  for (var i = 0; i < beers.length; i++) {
    $("ul").append("<li> <strong> <u> name</u></strong>: " +beers[i].beerName + "<br><strong> <u> category</u></strong>: " + beers[i].beercategory + "</li>");
  }
};

var eventHandler = function() {
  var $beerInput = $("#beername").val();
  var $categoryInput = $("#beercategory").val();
  $(".post-beer").on("click", addBeer($beerInput, $categoryInput));
  updateBeers();
};

$("button").on("click", eventHandler);
