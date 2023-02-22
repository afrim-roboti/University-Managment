const express = require('express');
const router = express.Router();

// Departmnent model
const Departments = require('../models/departments');
//  merret modeli departments 

// @route   GET /api/departments/
// @desc    Get all departments
// @access  Public
//Ktu jane routes te caktuar ku express js i lexon psh
//@route themi qe ka tipin get edhe url api/deparmtments

router.get('/', async (req, res) => {
  try {
    const departments = await Departments.find({}); // ketu thrrasim te gjithe deparmtnet pa specfiikuar parameter
    res.send({ departments})
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

// @route   GET /api/departments/:id
// @desc    Get a specific departments'
// @access  Public
// keshtu krijohet route get, pra kthen te gjitha department
// ku asynic i ka dy variabla request  parametrat qe vin dhe res apo rez qe kthehet
router.get('/:id', async (req, res) => { 
  try {
    const departments = await Departments.findById(req.params.id); // ktu presim parametrin id ku merret nga req.params
    res.send({ departments});
  } catch (err) {
    res.status(404).send({ message: 'Departments not found!' }); 
  }
});

// @route   POST /api/departments/
// @desc    Create a departments
// @access  Public
router.post('/', async (req, res) => {

  try {
    // req.body eshte ku ju qasemi te dhanave qe dergohen ne body 
    const newDepartment = await Departments.create({ name: req.body.name, numberofClass: req.body.numberofClass,  numberofProffesors: req.body.numberofProffesors, numberofStudents: req.body.numberofStudents });
    res.send({ newDepartment });
  } catch(err) {
    res.status(400).send({ error: err });
  }

});

// @route   PUT /api/departments/:id
// @desc    Update a departments
// @access  Public
router.put('/:id', async (req, res) => {
  try {
    // ketu parametrat permes req dergohen ne url psh apidepartments
    const updatedDepartments = await Departments.findByIdAndUpdate(req.params.id, req.body);
     res.send({ message: 'The departments was updated' });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

// @route   DELETE /api/departments/:id
// @desc    Delete a departments
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const removeDepartments = await Departments.findByIdAndRemove(req.params.id);
     res.send({ message: 'The departments was removed' });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});


module.exports = router;