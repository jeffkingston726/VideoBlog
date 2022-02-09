const router = require("express").Router();
const passport = require("passport");

const CLIENT_URL = "http://localhost:3000/";

// Login failed
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "Login failed",
  });
});

// Logout successfull
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "Login successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});

// logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

// Get a client request
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);
