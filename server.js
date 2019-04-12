const sqlite3=require('sqlite3').verbose();

const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

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
            res.send({ express: "Made by Shanty :)"} );
        }
    });
});

app.post('/pushmarker', (req, res) => {
	console.log("Got a POST request!");
    // let dbcommand = `INSERT INTO TABLE markers VALUES ("${req.body.id}", "${req.body.video_id}", ${req.body.timestamp}, "Marker at ${req.body.timestamp}");`;
    // console.log(dbcommand);
    console.log(req.body);
    db.run(`INSERT INTO MARKERS VALUES (?, ?, ?, ?)`, [req.body.markerID, req.body.videoID, req.body.timestamp, `Marker at ${req.body.timestamp}`], (err)=>{
        if (err){
            console.error(err);
        }
        else{
            console.log(`Inserted a row into song ${req.body.videoID}`);
        }
    });
});


app.post('/updatemarker', (req, res) => {
	console.log("Got a POST request!");
    let dbcommand = req.body.cmd;
    db.run(req.body.cmd, (err)=> {
        if(err){
            console.error(err);
        }
        else{
            console.log(`Updated this: ${req.body.cmd}`);
        }
    });
})

app.get("/song/:videoid", (req, res) => {
    console.log(`Serving the markers for the song ${req.params.videoid}`);
    let rows = db.all(`SELECT * FROM markers WHERE videoID=?`, [req.params.videoid], (err,rows)=>{
        if(err) {
            console.error(err);
        }
        else {
            res.send(rows);
        }
    });
});

app.post('/remove/:markerid', (req, res)=>{
    console.log("Got a remove request!");
    db.run(`DELETE FROM markers WHERE markerid=?;`, [req.params.markerid], (err)=>{
        if(err){
            console.error(err);
        }
        else{
            console.log(`DELETE FROM markers WHERE markerid=${req.params.markerid};`)
            console.log("Successfully removed the marker");
        }
    });
});

app.get("/secret/verysecret/purge", (req, res) => {
    console.log("Running a full purge");
    db.run(`DELETE FROM markers`, [], (err)=>{
        if(err){
            console.error(err);
        }
        else{
            console.log("Successfully removed ALL markers");
            res.send("Everything is gone :)");
        }
    });
});

let db= new sqlite3.Database('./videodb.db', (err)=>{
	if (err){
		console.error(err);
	}
	else{
		console.log("connected to video database");
	}
})