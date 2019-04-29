$( () => {

  
    $(".create-form").on("submit", (event) => {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#addBurger").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then( () => {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".eat-burger").on("click", (event) => {

        console.log("button clicked")
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "Put",
        data: {
            devoured: 1
        }
      }).then( () => {
          console.log("devoured burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });