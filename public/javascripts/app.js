$("#get-dish").on("click", function() {
  $.get("/new-dish.json", function(newDish) {
    alert ("Your dish is "  + newDish["dish"]);
  });
});
