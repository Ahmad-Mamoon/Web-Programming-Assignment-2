// routes/leaderboard.js
const express = require('express');
const router = express.Router();
const Leaderboard = require('../models/leaderboard.model');


// Get leaderboard data
router.get('/', async (req, res) => {
  try {
    const leaderboardData = await Leaderboard.find().sort({ rank: 1 });
    res.json(leaderboardData);
  } catch (err) {
    console.error('Error fetching leaderboard data:', err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
