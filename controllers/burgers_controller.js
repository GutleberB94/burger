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