const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../users/user-model.js");
const { jwtSecret } = require("../config/secrets.js");

// register new user
router.post("/register", (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(400).json({ message: "Username and password required" });
  }

  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      const token = signToken(saved);
      res.status(201).json({ new_user: saved, token: token });
    })
    .catch(err => {
      res.status(500).json({ message: "Error while registering :", err });
    });
});

// login user
router.post("/login", (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(400).json({ message: "Username and password required" });
  }

  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = signToken(user);

        res
          .status(200)
          .json({ message: `Welcome ${user.username}!`, token: token });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Error while logging in: ", err });
    });
});

function signToken(user) {
  const payload = {
    id: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "7d"
  };

  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
