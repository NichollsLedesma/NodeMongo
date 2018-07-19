const express = require('express');
const routes = express.Router();
const Task = require('./../model/task_model');

routes.get('/', async (req, res) => {
    let tareas = await Task.find();
    res.render('index', { // segundo parametro le paso la data
        title: "Node Mongo ejs",
        lista: tareas
    });
});
routes.post('/add', async (req, res) => {
    let tarea = new Task(req.body);
    await tarea.save();
    res.redirect('/');
});
routes.get('/delete/:id', async (req, res) => {
    let id = req.params.id;
    await Task.remove({ _id: id });
    res.redirect('/');
});

routes.get('/turn/:id', async (req, res) => {
    let id = req.params.id;
    let tarea = await Task.findById(id);
    tarea.status = !tarea.status;
    await tarea.save();
    res.redirect('/');
});

routes.get('/update/:id', async (req, res) => {
    let id = req.params.id;
    let tarea = await Task.findById(id);
    res.render('edit', {tarea});
});
routes.post('/update/:id', async (req, res) => {
    let id = req.params.id;
    await Task.update({_id: id}, req.body);    
    res.redirect('/');
    
});



module.exports = routes;