const router = require("express").Router();

router.get("/", (req, res, next) => {
    res.send("LOGIN ROUTES");
    //   next();
  });


router.post("/login", (req, res, next) => {
    console.log("user data : " + JSON.stringify(req.body));
    res.send({
      type: "POST",
      endpoint: "LOGIN",
      username: req.body.username,
      password: req.body.password,
    });
  
    //  TODO authentication
    //  check if user is valid or exists if not do something
    //  { message: 'user is authenticated', error: false, errorType:" the type of error created"}
  
    next();
  });

  router.post("/logout", (req, res, next) => {
    res.send({ type: "POST", endpoint: "LOGOUT", message: req.body.message });
  
    //  TODO logout user
    //  check is user has been logged out successfully
    //  { message: 'user has logged out successfully', error: false, errorType:" the type of error created"}
    next();
  });

  router.post("/register", (req, res, next) => {
    res.send({ type: "POST", endpoint: "REGISTER", message: req.body.message });
    //   TODO register a new user
    //   then check if user has been created successfully
    //  { message: 'user has successfully registered, please check your email.', messageType: categories }
    //   categories { error, success, warning, info }
  });


  module.exports = router;