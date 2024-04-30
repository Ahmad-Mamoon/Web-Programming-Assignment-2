// scripts/seedData.js
const mongoose = require('mongoose');
const Leaderboard = require('../models/leaderboard.model');
require('dotenv').config();

async function seedData() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    await Leaderboard.insertMany([
      {
        teamName: 'The Avengers',
        gamesPlayed: 29,
        score: 51566,
        avatarUrl: 'https://e7.pngegg.com/pngimages/787/258/png-clipart-apple-logo-apple-logo-heart-logo-thumbnail.png',
        // badges: ['Top Team'] // Example of badges
      },
      {
        teamName: 'Team XYZ',
        gamesPlayed: 20,
        score: 42000,
        avatarUrl: 'https://e7.pngegg.com/pngimages/787/258/png-clipart-apple-logo-apple-logo-heart-logo-thumbnail.png',
        // badges: []
      },
      {
        teamName: 'Team XYeeZ',
        gamesPlayed: 220,
        score: 420500,
        avatarUrl: 'https://e7.pngegg.com/pngimages/787/258/png-clipart-apple-logo-apple-logo-heart-logo-thumbnail.png',
        // badges: []
      },
      {
        teamName: 'Team XaaaaYeeZ',
        gamesPlayed: 320,
        score: 220500,
        avatarUrl: 'https://e7.pngegg.com/pngimages/787/258/png-clipart-apple-logo-apple-logo-heart-logo-thumbnail.png',
        // badges: []
      }
      // Add more documents as needed
    ]);

    console.log('Data seeded successfully');
    mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}

seedData();
