var connection = require(".connection/");


var orm = {

    selectAll: function () {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function (table, col1, cal2, val1, val2) {
        var queryString = "INSERT INTO ?? (??, ??) VALUES (??, ??)";
        console.log(queryString);
        connection.query(queryString, [table, col1, cal2, val1, val2], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function (table, val1, val2, id) {
        var queryString = "UPDATE ?? SET (burger_name = ??, devoured = ??) WHERE (??)";
        console.log(queryString);
        connection.query(queryString, [table,val1, val2, id], function (err, result) {
            if (err) throw err;
            console.log(result);
            }
        );
    }
};

module.exports = orm;