const db = require('../db');

const course = db.model('Course', {
    subject: {type: String, required: true},
    course: {type: String, required: true},
    description: {type: String, required: true},
    credits: {type: Number, required: true, min: 1, max: 6},
});

module.exports = course;