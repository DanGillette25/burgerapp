$(function(){
    $(".devour").on("click", function(event){
        var id = $(this).data("id");

        var newDevoured = {
            devoured: true
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevoured
          }).then(
            function() {
              console.log("changed devoured to", true);
              // Reload the page to get the updated list
              location.reload();
            }
          );


    })
})

$(".addburger").on("submit", function(event){
    event.preventDefault();

    var newBurger = {
        name: $("#burgeradd").val()
    }

    $.ajax("api/burgers", {
        type: "POST",
        data: newBurger
    }).then(function(){
        console.log("added new burger")
        location.reload();
    })
})