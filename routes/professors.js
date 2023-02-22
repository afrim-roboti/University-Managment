const express = require('express');
const router = express.Router();

// Professor model
const Professors = require('../models/professors');

// @route   GET /api/professors/
// @desc    Get all professors
// @access  Public
router.get('/', async (req, res) => {
  try {
    const professors = await Professors.find({});
    res.send({ professors })
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

// @route   GET /api/professors/:id
// @desc    Get a specific professor
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const professor = await Professors.findById(req.params.id);
    res.send({ professor });
  } catch (err) {
    res.status(404).send({ message: 'Professor not found!' });
  }
});

// @route   POST /api/professors/
// @desc    Create a professor
// @access  Public
router.post('/', async (req, res) => {
  try {
    const newProfessor = await Professors.create({ name: req.body.name, email: req.body.email, status: req.body.status });
     res.send({ newProfessor });
  } catch(err) {
    res.status(400).send({ error: err });
  }

});

// @route   PUT /api/professors/:id
// @desc    Update a professor
// @access  Public
router.put('/:id', async (req, res) => {
  try {
    const updatedProfessor = await Professors.findByIdAndUpdate(req.params.id, req.body);
     res.send({ message: 'The professor was updated' });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

// @route   DELETE /api/professors/:id
// @desc    Delete a professor
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
     const removeProfessor = await Professors.findByIdAndRemove(req.params.id);
     res.send({ message: 'The professor was removed' });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});


module.exports = router;





