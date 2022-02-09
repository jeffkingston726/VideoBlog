const cookieSession = require("cookie-session");
const dotenv = require("dotenv");
dotenv.config();

const passport = require("passport");
const cors = require("cors");
const passportSetup = require("./passport");
const express = require("express");
const app = express();

const authRoute = require("./routes/auth");

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_KEY],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "https://localhost:3000",
    method: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port: ${process.env.PORT}`);
});
