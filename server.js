//jshint esversion:4
const express = require("express", 4.18);
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.urlencoded({ extended: true })); //bodyparser.urlencoded() is use to pass html form data to server also use .text()and .json()
//entended:true is use to pass nasted html object
//you need to write ever single time when you write a server

//creating route
app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmicalculator.html"); //sendFile is use to send file,__dirname is use to send directory
});

//create a post methode to post any thing on server
app.post("/bmicalculator", function (req, res) {
  let Weight = parseFloat(req.body.Weight);
  let Height = parseFloat(req.body.Height);
  
  let bmi = Weight/(Height*Height);
  res.send("Your BMI is  : " + bmi);
}); //req.body  is first http request

//creating server 3000 with call back function
app.listen(3000, function () {
  console.log("server is running on port 3000");
});
