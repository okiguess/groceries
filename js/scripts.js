$(document).ready(function() {


  $("#shoppingForm").submit(function(event){
    event.preventDefault();
    var groceries = ['item1', 'item2', 'item3'];

    var groceries2 = groceries.map(function(grocery) {
      return $("input#" + grocery).val().toUpperCase();
    })

    groceries2.sort();
    alert(groceries2);
    console.log("Array sorted");
    groceries2.forEach(function(grocery){
      $("#result").append("<li>" + grocery + "</li>");
    });

    $(".groceryList").show();

  });
});
