const db = require('../models')
const Student = db.students

exports.create = (req, res) => {
    if(!req.body.code) {
        res.status(400).json({message: "Content can not be empty!"})
        return;
    }

    //Create a student
    const student = new Student({
        code: req.body.code,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
    });

    student.save(student)
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).jason({message: err.message || "Some error occurred while creating the student."})
            })
}

exports.findAll = (req, res) => {
    res.send('findAll')
}

exports.findOne = (req, res) => {
    
}

exports.update = (req, res) => {
    
}

exports.delete = (req, res) => {
    
}