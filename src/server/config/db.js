var mysql = require('mysql');

const dbconn = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'rootroot',
    database : 'capst2202',
    port : 3306
});

module.exports = dbconn;