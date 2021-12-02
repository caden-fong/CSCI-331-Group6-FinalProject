
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5038;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const characterRouter = require('./routes/characters');
const classRouter = require('./routes/classes');
const spellRouter = require('./routes/spells');
const backgroundRouter = require('./routes/backgrounds');
const raceRouter = require('./routes/races');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/characters', characterRouter);
app.use('/classes', classRouter);
app.use('/spells', spellRouter);
app.use('/backgrounds', backgroundRouter);
app.use('/races', raceRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
