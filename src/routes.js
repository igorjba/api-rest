const express = require('express');
const instructors = require('./controllers/instructors');

const routes = express();

routes.get('/instructors', instructors.listInstructors);
routes.get('/instructors/:id', instructors.getInstructor);

module.exports = routes;