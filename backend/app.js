const express = require('express');
  
const path = __dirname + '/app/views/';

const app = express();
const PORT = 8080;

app.use(express.static(path));

app.get('/', function (req,res) {
    res.sendFile(path + "index.html");
  });

  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running,and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);