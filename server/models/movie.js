const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
  filmTitle: {
    type: String,
    required: true,
  },
  startingDateTime: {
    type: Date,
    required: true,
  },
  bookedSeats: [
    {
      row: {
        type: Number,
        required: true,
      },
      seatNumber: {
        type: Number,
        required: true,
      },
    },
  ],
  allLines: {
    type: Number,
    required: true
  },
  seatsInOneLine: {
    type: Number,
    required: true
  }
});


const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
