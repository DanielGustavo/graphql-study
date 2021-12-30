import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  name: String,
  description: String,
});

export default mongoose.model('Power', Schema);
