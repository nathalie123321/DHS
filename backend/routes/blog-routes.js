const blog = require("express").Router();

blog.get("/get-user", (req, res, next) => {
  
  const data = req.body;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

 
  if (firstName == "Boris"){
    res.send(data);
    console.log(data);
  }

  else {
    res.status(400).json({ 
      message:"get your shit together"
    });
  }
});

blog.delete("/delete-user/:user", (req, res, next) => {
  const user = req.params.user;
  if (user == "Del"){

    res.status(200).json({ 
      message:"You have deleted your account"
    });
  }

  else {
    res.status(400).json({ 
      message:"User not found"
    });
  }
});





blog.post("/create-blog", (req, res, next) => {
    res.send({ type: "POST", endpoint: "CREATE BLOG", message: req.body.message });
  
    //  TODO Create blog
    //  message blog have been successfully created
    
    next();
  });

module.exports = blog;