var connection = require(".connection/");


var orm = {

    selectAll: function () {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function (table, cols, vals) {
        var queryString = "INSERT INTO ?? (??, ??) VALUES (??, ??)";
        console.log(queryString);
        connection.query(queryString, [table, cols, vals], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function (table, cols, vals, id) {
        var queryString = "UPDATE ?? SET (?? = ??, ?? = ??) WHERE (??)";
        console.log(queryString);
        connection.query(queryString, [table, cols, vals, id], function (err, result) {
            if (err) throw err;
            console.log(result);
            }
        );
    }
};

module.exports = orm;