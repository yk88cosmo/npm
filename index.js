'use strict'; // inform the javascript engine that the code on this page uses strict rules

const express = require("express");

// constants
const PORT = 8989;
const HOST = "127.0.0.1";
const OS = require("os");
const ENV = "DEV";

// application where we have endpoints that users can look for
const app = express(); // invoke the express library through instantiating it as a variable called app

app.get("/", (req, res)=>{ //listens for http://localhost:8989 to be called
    res.statusCode = 200; //returns a response.ok
    const msg = "Hello FSD learner. Running Node.js";
    res.send(msg);
});

app.listen(PORT, HOST);
console.log(`Running on https://${HOST}:${PORT}`); // using template strings to concatenate strings
console.log(OS.platform());

