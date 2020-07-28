const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.send("BLOG ROUTES");
  //   next();
});

router.post("/create-blog", (req, res, next) => {
    res.send({ type: "POST", endpoint: "CREATE BLOG", message: req.body.message });
  
    //  TODO Create blog
    //  message blog have been successfully created
    
    next();
  });

module.exports = router;