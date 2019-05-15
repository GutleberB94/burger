var express = require("express");
var burger = require("../models/burger")


var router = express.Router();

router.get("/", (req, res) => {

  burger.selectAll((data) => {
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

      res.json(result);
    });
});

router.get("/api/burgers", (req, res) => {

  burger.selectAll((data) => {
    var burgerObj = {
      burgers: data
    };
    console.log(burgerObj)
    res.json(data)
  })
});

router.put("/api/burgers/:id", (req, res) => {
  var condition = "id = " + req.params.id;

  burger.updateOne({
    devoured: 1
  }, condition, (result) => {
    res.redirect("/");
  }
  )
})

module.exports = router