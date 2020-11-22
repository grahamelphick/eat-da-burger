$(function() {
    $(".make-devoured").on("click", function(event) {
      console.log("make-devoured clicked")
      const id = $(this).data("id");
      const makeDevour = {
        devoured: true
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: makeDevour
      }).then(
        function() {
          console.log("changed devoured state to", makeDevour);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      let newBurger = {
        burger_name: $("#burger").val().trim(),
        devoured: false
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  });
  