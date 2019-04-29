var connection = require('./connection.js');

// Helper function for generating MySQL syntax
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function for generating My SQL syntax
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        arr.push(key + "=" + ob[key]);
    }

    return arr.toString();
}

// Create the ORM object to perform SQL queries
var orm = {
    // Function that returns all table entries
    selectAll: function (tableInput, callback) {

        var queryString = "SELECT * FROM " + tableInput + ";";


        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }


            callback(result);
        });
    },

    insertOne: function (table, cols, vals, callback) {

        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";


        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            callback(result);
        });
    },

    // Function that updates a single table entry
    updateOne: function (table, objColVals, condition, callback) {

        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            callback(result);
        });
    }
};

// Export the orm object for use in other modules
module.exports = orm;