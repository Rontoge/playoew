const express = require("express");
const router = express.Router();
const Game = require("../models/game");
const User = require("../models/user");

router.post("/create", async (req, res) => {
  try {
    const {
      sport,
      area,
      date,
      time,
      admin,
      totalPlayers,
      activityAccess = "public",
    } = req.body;

    const newGame = new Game({
              sport,
      area,
      date,
      time,
      admin,
      totalPlayers,
      activityAccess ,
        players: [admin], // Add the admin as the first player
    });


    const savedGame = await newGame.save();
    res.status(201).json(savedGame);
  } catch (err) {
    console.error("error creating game", error);
    res.status(500).json({ message: "Failed to create game " });
  }
});

module.exports = router;
