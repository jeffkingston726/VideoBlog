const cookieSession = require("cookie-session");
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const passport = require("passport");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const passportSetup = require("./passport");

const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");

app.use(express.json());
app.use("/images", express.static(path.resolve(__dirname, "./images")));

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

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

// storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/auth", authRoute);
app.use("/api/post", postRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port: ${process.env.PORT}`);
});
