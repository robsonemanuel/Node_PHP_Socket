var net = require('net');
var mysql = require('mysql');

var listenport = 3000; // Should be the same as in the php script


// Set up server
var Server = net.createServer(function(Sock) {
    console.log('Client Connected.');

    const connection = mysql.createConnection({
      host : 'localhost',
      port : 3306,
      user : 'root',
      password : '',
      database : 'nada',
    });
    connection.connect();

    Sock.on('data', function(data) {
       console.log('Data received: ' + data);
      // var connection = mysql.createConnection({});

       dataobj = JSON.parse(data);
       
       console.log('Item ID: ' + dataobj);

    connection.query(dataobj, function (err, result) {
     if (err) throw err;
     console.log("1 record inserted");


   });
connection.end();

       // and so on



  //  Sock.on('end', function() {
      //  console.log('Client Disconnected.');
  //  });

    Sock.pipe(Sock);
});

});



Server.listen(listenport, function() {
   console.log('Listening on port ' + listenport);
});
