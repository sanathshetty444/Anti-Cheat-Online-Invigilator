const express=require('express');
const app=express();
const port = 8001;
const path=require('path');
const cookieParser=require('cookie-parser');
const session = require('express-session');
const passport=require('passport');
const bodyParser = require('body-parser');


// var http = require('http'),
//     fs = require('fs'),
//     // NEVER use a Sync function except at start-up!
//     index = fs.readFileSync(__dirname + '/hello.html');

// // Send index.html to all requests
// var app1 = http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(index);
// });

// // Socket.io server listens to our app
// var io = require('socket.io').listen(app1);

// // Send current time to all connected clients
// function sendTime() {
//     io.emit('clearance', { time: new Date().toJSON() });
// }

// // Send current time every 10 secs
// setInterval(sendTime, 3000);

// // Emit welcome message on connection
// io.on('connection', function (socket) {
//     // Use socket to communicate with this particular client only, sending it it's own id
//     socket.emit('welcome', { message: 'Welcome!', id: socket.id });

//     socket.on('i am client', console.log);
//     socket.on('receiveClerance', function (data) {
//         console.log(data);
//     });
// });



app.use(express.urlencoded({
    extended:true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(passport.setAuthenticatedUser);
app.use(express.static('./assets'));

app.use('/',require('./routes'));
app.listen(port,function(err){
    if(err){
     console.log('error');
    }
    console.log('connected successfully');
 });