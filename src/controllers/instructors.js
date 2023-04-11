const { instructors } = require('../data/database');

const listInstructors = (req, res) => {
    return res.status(200).json(instructors);
}

const getInstructor = (req, res) => {
    const { id } = req.params

    const instructor = instructors.find((instructor) => {
        return instructor.id === Number(id);
    });

    if (!instructor) {
        return res.status(404).json({ message: 'Instructor not found' })
    }

    return res.status(200).json(instructor);
}

module.exports = {
    listInstructors,
    getInstructor
}