const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
var ProjectModel = require('./models/allProjectSchema');

var mongoPath = 'mongodb://127.0.0.1/my_mongoose';

mongoose.connect(mongoPath, { useNewUrlParser: true });
var mongooseDb = mongoose.connection;

const app = express();

app.use(bodyParser.json());

// create the all project in mongoose. 
app.post('/createProject', (req, res) => {
    res.send('project started 1')
    let Project = {
        name: req.body.name,
        developers: req.body.developers,
        taskContainers: req.body.containers
    }
    console.log(Project);
    
})

// print in console of project all the containers.
app.get('/allContainers', (req, res) => {
   
})
// print in console of project all the tasks.
app.get('/allTasks', (req, res) => {
    
})

// update in one task if started.
app.put('/', (req, res) => {
    
})




app.delete('/projects', (req, res) => {
    res.send('deleted')
    ProjectModel.remove({}, (err) => {
        console.log("all data of projects deleted");
    })
})



app.listen(3030);


