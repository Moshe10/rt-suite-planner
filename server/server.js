const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

var mongoPath = 'mongodb://127.0.0.1/my_mongoose';

mongoose.connect(mongoPath, { useNewUrlParser: true });
var mongooseDb = mongoose.connection;

const app = express();

app.use(bodyParser.json());


var Schema = mongoose.Schema;

var taskSchema = new Schema({
    name: String,
    time: Number,
    startDay:String
});

var TaskModel = mongoose.model('TaskModel', taskSchema);

app.post('/', (req, res) => {
    let task = {};
    task.name = req.body.name;
    task.time = parseInt(req.body.time);
    let id;
    TaskModel.create(task, (err, res) => {
        console.log(res);
        id = res._id;
        console.log(id);
    })
})

app.get('/getTasks', (req, res) => {
    TaskModel.find({}, 'name time', function (err, tasks) {
        res.json(tasks)
    })
})

app.delete('/', (req, res) => {
    TaskModel.remove({}, (err) => {
        console.log("all data deleted");
    })
})

app.put('/', (req, res) => {
    console.log(req.body.id);
    console.log(req.body.name);
    TaskModel.findOne({ _id: req.body.id }, (err, task) => {
        console.log(task);
        if (!err) {
            console.log(task);
            if (req.body.name !== "") {
                task.name = req.body.name;
            }
            if (req.body.time !== "") {
                task.time = req.body.time;
            }
            console.log(task);
        }
        task.save((err) => {
            console.log(task);

        })
    });
})




app.listen(3030);