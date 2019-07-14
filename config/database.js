const mysql = require('mysql')

const con = mysql.createConnection({


    host: 'localhost',
  user: 'root',
  password: 'B1tb1t2k3666#',
  database: 'twitter_clone',
  multipleStatements: true
})



module.exports = con
