const express = require('express');
const instructors = require('./controllers/instructors');

const routes = express();

routes.get('/instructors', instructors.listInstructors);
routes.get('/instructors/:id', instructors.getInstructor);
routes.post('/instructors', instructors.registerInstructor);
routes.put('/instructors/:id', instructors.updateInstructor);
routes.patch('/instructors/:id/status', instructors.updateInstructorStatus)
routes.delete('/instructors/:id', instructors.deleteInstructor)

module.exports = routes;