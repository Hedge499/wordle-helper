const express = require('express');

const app = express();
const port = 3000;

app.use("/public", express.static(__dirname + "/public"));

app.route("/").get((req, res) => {
    res.sendFile(__dirname + "/views/index.html")
});


app.listen(port, () => {
    console.log(`wordle helper is listening on port: ${port}`);
});