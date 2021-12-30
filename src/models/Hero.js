import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  name: String,
  powers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Power' }],
});

export default mongoose.model('Hero', Schema);
