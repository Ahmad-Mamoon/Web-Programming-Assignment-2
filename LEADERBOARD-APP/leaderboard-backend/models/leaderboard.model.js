// models/leaderboard.model.js
const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema({
  rank: Number,
  teamName: String,
  gamesPlayed: Number,
  score: String,
  avatarUrl: String,
  badges: [String] // Array of badge names
});

module.exports = mongoose.model('Leaderboard', leaderboardSchema);