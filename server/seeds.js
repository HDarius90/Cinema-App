const mongoose = require('mongoose');
const Movie = require('./models/movie.js');

mongoose.connect('mongodb://127.0.0.1:27017/cinemaapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const seedDB = async () => {
    try {
        await Movie.deleteMany({});

        const seedCinema = [
            {
                filmTitle: 'Harry Potter',
                startingDateTime: new Date('December 17, 2023 15:00:00'),
                bookedSeats: [
                    {
                        row: 2,
                        seatNumber: 3
                    },
                    {
                        row: 2,
                        seatNumber: 2
                    }
                ],
                allLines: 10,
                seatsInOneLine: 20
            },
            {
                filmTitle: 'Star Wars',
                startingDateTime: new Date('December 17, 2023 20:00:00'),
                bookedSeats: [
                    {
                        row: 3,
                        seatNumber: 4
                    },
                    {
                        row: 3,
                        seatNumber: 5
                    }
                ],
                allLines: 10,
                seatsInOneLine: 20
            },
        ];



        await Movie.insertMany(seedCinema);



        console.log("Database seeded successfully");
    } catch (err) {
        console.error("Error seeding database:", err);
    } finally {
        mongoose.connection.close();
    }
};

seedDB();