const route = require("express").Router();
const UserModel = require("../modules/User.model");

// Crud - create
// Create new User
route.post("/signup", async (req, res) => {
  console.log(req.body);
});
