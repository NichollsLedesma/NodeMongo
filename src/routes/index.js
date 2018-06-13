const express = require('express');
const routes = express.Router();
const model = require('./../model/task')();

routes.get('/', (req, res) => {
    model.find({}, (err, data) => {
        if (err) throw err;
        res.render('index', { // segundo parametro le paso la data
            title: "Node Mongo ejs",
            lista: data
        });
    });

});

routes.post('/add', (req, res) => {
    let tarea = req.body;
    tarea.status = false;
    model.create(tarea, (err, task) => {
        if (err) throw err;
        res.redirect('/');
    });
});

routes.get('/turn/:id', (req, res) => {
    let id = req.params.id;
    model.findById(id, (err, tarea) => {
        if (err) throw err;
        tarea.status = !tarea.status;
        tarea.save().then(() => {
            res.redirect('/');
        });
    });
});

routes.get('/delete/:id', (req, res) => {
    let id = req.params.id;
    model.remove({ _id: id }, (err, tarea) => {
        if (err) throw err;
        res.redirect('/');

    });
});


module.exports = routes;