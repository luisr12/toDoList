const mysql = require('mysql2/promise');

const connection = mysql.createPoll({
    host:'localhost',
    user:'root',
    password:'usbw',
    database:''
});

module.exports=connection;