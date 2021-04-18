const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const exercisename = req.body.exercisename;
  const progname = req.body.progname;
  const progrank = Number(req.body.progrank);
  const discription = req.body.discription;
  const type = req.body.type;

  const newExercise = new Exercise({
    exercisename,
    progname,
    progrank,
    discription,
    type
  });

  newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;