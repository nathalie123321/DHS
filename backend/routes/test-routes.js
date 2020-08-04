const test = require("express").Router();

test.get("/get-parameters", (request, response, callback) => {
const userName = request.param("userName");
const getString = request.param("getString");
response.send("userName " + userName + " getString " + getString );
console.log(userName);

});

test.post("/headers", (req, res, next) => {
const allow = req.header("Allow");
res.send("Allow " + allow );
console.log("Allow " + allow);

});

test.delete("/age", (req, res, next) => {
    const age = req.header("Age");
    res.send("Age " + age );
    console.log("Age " + age);
});

module.exports = test;
