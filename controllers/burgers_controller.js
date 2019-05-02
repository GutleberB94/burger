var express = require("express");
var burger = require("../models/burger")


var router = express.Router();

router.get("/", (req, res) => {

    burger.selectAll( (data) => {
        var burgerObj = {
            burgers: data
        };
        console.log(burgerObj)
        res.render("index", burgerObj)
    })
});

router.post("/api/burgers", (req, res) => {

    burger.insertOne([
        "burger_name"
    ], [
        req.body.burger_name
    ], (result) => {
       
        res.redirect('/');
    });
});

router.put("/api/burgers/:id", (req, res) => {
    var condition = "id = " + req.params.id;
  
    burger.updateOne({
      devoured: 1
    }, condition, (result) => {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  module.exports = router