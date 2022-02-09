const router = require("express").Router();
const Post = require("../models/Post");

//CREATE POST
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).send("Error posting: " + err.message);
  }
});

// //UPDATE CANDIDATE
// router.put("/:id", async (req, res) => {
//   try {
//     const candidate = await Candidate.findById(req.params.id);
//     // if (candidate.username === req.body.username) {
//     try {
//       const updatedCandidate = await Candidate.findByIdAndUpdate(
//         req.params.id,
//         {
//           $set: req.body,
//         },
//         { new: true }
//       );
//       res.status(200).json(updatedCandidate);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//     // } else {
//     //   res.status(401).json("You can update only your Candidates");
//     // }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //DELETE CANDIDATE
// router.delete("/:id", async (req, res) => {
//   try {
//     const candidate = await Candidate.findById(req.params.id);
//     //if (candidate.username === req.body.username) {
//     try {
//       await candidate.delete();
//       res.status(200).send("Candidate has been deleted...");
//     } catch (err) {
//       res.status(500).json(err);
//     }
//     // } else {
//     //   res.status(401).json("You can delete only your candidates");
//     // }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //GET CANDIDATE
// router.get("/:id", async (req, res) => {
//   try {
//     const candidate = await Candidate.findById(req.params.id);
//     res.status(200).json(candidate);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //GET ALL AND FILTER
// router.get("/", async (req, res) => {
//   const techName = req.query.tech;
//   const countryName = req.query.country;
//   const cityName = req.query.city;
//   const attendanceName = req.query.attendance;
//   const transferName = req.query.transfer;
//   const employment = req.query.employment;

//   let splitTech;
//   techName ? (splitTech = techName.split(",")) : null;

//   try {
//     let candidate;
//     if (
//       techName &&
//       countryName &&
//       cityName &&
//       attendanceName &&
//       transferName &&
//       employment
//     ) {
//       candidate = await Candidate.find({
//         technologies: {
//           $in: [...splitTech],
//         },
//         country: {
//           $in: [countryName],
//         },
//         city: {
//           $in: [cityName],
//         },
//         attendance: {
//           $in: [attendanceName],
//         },
//         transfer: {
//           $in: [transferName],
//         },
//         employment: {
//           $in: [employment],
//         },
//       });
//     } else {
//       // Returns from newest to oldest.
//       candidate = await Candidate.find().sort({ createdAt: -1 });
//     }
//     res.status(200).json(candidate);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
