const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');
const course = require('./models/course');

app.use(cors());
app.use(express.json());

app.get('/courses', async(req, res) => {
    try {
        const courses = await course.find({});
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json(err);
    }
});

app.get('/courses/:id', async(req, res) => {
    try {
        const found = await course.findById(req.params.id);
        if (!found) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.status(200).json(found);
    } catch (err) {
        res.status(500).json(err);
    }
});

app.post('/courses', async(req, res) => {
    try {
        const new_course = await new course(req.body);
        await new_course.save();
        res.status(201).json(new_course);
    } catch (err) {
        res.status(500).json(err);
        console.error(err);
    }
});

app.delete('/courses/:id', async(req, res) => {
    try {
        const deleted = await course.findByIdAndDelete(req.params.id);
        res.status(200).json(deleted);
    } catch (err) {
        res.status(500).json(err);
        console.error(err);
    }
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});