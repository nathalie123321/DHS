const test = require("express").Router();

test.get("/get-parameters", (request, response, callback) => {
const userName = request.param("userName");
const getString = request.param("getString");

response.send("userName " + userName + " getString " + getString );
console.log(userName);

});

test.post("/headers", (req, res, next) => {
const allow = req.header("Allow");
const age = req.header("Age");
res.send("Allow " + allow + " Age");
console.log("Allow " + allow + age + " Age");

});

module.exports = test;
