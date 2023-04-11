let { instructors, instructorIdentifier } = require('../data/database');

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

const registerInstructor = (req, res) => {
    const { name, email, status } = req.body;

    if (!name) {
        return res.status(400).json({ message: 'The name is mandatory.' })
    }
    if (!email) {
        return res.status(400).json({ message: 'The email is mandatory.' })
    }

    const instructor = {
        id: instructorIdentifier++,
        name,
        email,
        status: status ?? true
    }

    instructors.push(instructor);

    return res.status(201).json(instructor);
}

const updateInstructor = (req, res) => {
    const { id } = req.params;
    const { name, email, status } = req.body;

    if (!name) {
        return res.status(400).json({ message: 'The name is mandatory.' })
    }
    if (!email) {
        return res.status(400).json({ message: 'The email is mandatory.' })
    }

    const instructor = instructors.find((instructor) => {
        return instructor.id === Number(id);
    });

    if (!instructor) {
        return res.status(404).json({ message: 'Instructor not found' })
    }

    instructor.name = name;
    instructor.email = email;
    instructor.status = status;

    return res.status(204).send();
}

const updateInstructorStatus = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const instructor = instructors.find((instructor) => {
        return instructor.id === Number(id);
    });

    if (!instructor) {
        return res.status(404).json({ message: 'Instructor not found' })
    }

    instructor.status = status;

    return res.status(204).send();
}

const deleteInstructor = (req, res) => {
    const { id } = req.params;

    const instructor = instructors.find((instructor) => {
        return instructor.id === Number(id);
    });

    if (!instructor) {
        return res.status(404).json({ message: 'Instructor not found' })
    }

    instructors = instructors.filter((instructor) => {
        return instructor.id !== Number(id);
    });

    return res.status(204).send();
}

module.exports = {
    listInstructors,
    getInstructor,
    registerInstructor,
    updateInstructor,
    updateInstructorStatus,
    deleteInstructor
}