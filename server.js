const sqlite3=require('sqlite3').verbose();

const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(bodyParser.json())

// create a GET route
app.get('/express_backend', (req, res) => {
	/*Get all the titles of songs in the database and write those to the express*/
	let query= "SELECT title FROM video";
	let rows = db.all(query,[], (err,rows)=>{
	if (err){
		console.error(err);
	}
	else{
		let return_string = "The songs are ";
		rows.forEach((row)=>{
			return_string+=row.title+", ";
		});
		console.log(return_string);
		res.send({ express: return_string} );
	}
});


  	// res.send(
  	// { express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// app.post('/markerdata', (req, res) => {
// 	console.log("Got a POST request!");
// 	console.log(request.body);
// });

let db= new sqlite3.Database('./videodb.db', (err)=>{
	if (err){
		console.error(err);
	}
	else{
		console.log("connected to video database");
	}
})