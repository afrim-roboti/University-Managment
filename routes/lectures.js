const express = require('express');
const router = express.Router();

// Lectures model
const Lectures = require('../models/lectures');

// @route   GET /api/lectures/
// @desc    Get all lectures
// @access  Public
router.get('/', async (req, res) => {
  try {
    const lectures = await Lectures.find({});
    res.send({ lectures })
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

// @route   GET /api/lectures/:id
// @desc    Get a specific lectures'
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const lectures = await Lectures.findById(req.params.id);
    res.send({lectures});
  } catch (err) {
    res.status(404).send({ message: 'Lectures not found!' });
  }
});

// @route   POST /api/lectures/
// @desc    Create a lectures
// @access  Public
router.post('/', async (req, res) => {
  try {
    const newLectures = await Lectures.create({ name: req.body.name, numberofClass: req.body.numberofClass});
     res.send({ newLectures});
  } catch(err) {
    res.status(400).send({ error: err });
  }

});

// @route   PUT /api/lectures/:id
// @desc    Update a lectures
// @access  Public
router.put('/:id', async (req, res) => {
  try {
    const updatedLecture = await Lectures.findByIdAndUpdate(req.params.id, req.body);
     res.send({ message: 'The lecture was updated' });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

// @route   DELETE /api/lectures/:id
// @desc    Delete a lectures
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const removeLectures = await Lectures.findByIdAndRemove(req.params.id);
     res.send({ message: 'The lectures was removed' });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});


module.exports = router;