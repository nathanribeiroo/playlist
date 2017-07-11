var mysql = require("mysql");



var conn = function () {
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'picollo',
        database: 'digital_signage'
    });
}
module.exports = function() {
    return conn;
}