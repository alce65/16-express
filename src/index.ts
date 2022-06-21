import express from 'express';
import morgan from 'morgan';
import fs from 'fs/promises';
import { initialTasks } from './tasks.js';

const PORT = process.env.PORT || 3200;

const dataFilePath = './data/index.txt';

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.get('/', async (req, resp) => {
    req;
    const dataFileContent = await fs.readFile(dataFilePath, {
        encoding: 'utf-8',
    });
    resp.setHeader('Content-type', 'text/html');
    resp.end(dataFileContent);
});

app.post('/', async (req, resp) => {
    const newContent = req.body.text;
    console.log(newContent);
    await fs.writeFile(dataFilePath, newContent, 'utf-8');
    resp.end('<h1>Recarga la página</h1>');
});

// End-Point Tasks

let tasks = initialTasks;

app.get('/task', (req, resp) => {
    req;
    resp.setHeader('Content-type', 'application/json');
    resp.end(JSON.stringify(tasks));
});
app.get('/task/:id', (req, resp) => {
    resp.setHeader('Content-type', 'application/json');
    const result = tasks.find((task) => task.id === +req.params.id);
    if (result) {
        resp.end(JSON.stringify(result));
    } else {
        resp.status(404);
        resp.end(JSON.stringify({}));
    }
});
app.post('/task', (req, resp) => {
    const newTask = { ...req.body, id: tasks[tasks.length - 1].id + 1 };
    tasks.push(newTask);
    resp.setHeader('Content-type', 'application/json');
    resp.status(201);
    resp.end(JSON.stringify(newTask));
});

app.patch('/task/:id', (req, resp) => {
    let newTask;
    tasks = tasks.map((task) => {
        if (task.id === +req.params.id) {
            newTask = { ...task, ...req.body };
            return newTask;
        } else {
            return task;
        }
    });
    resp.setHeader('Content-type', 'application/json');
    resp.end(JSON.stringify(newTask));
});

app.delete('/task/:id', (req, resp) => {
    const prevLength = tasks.length;
    tasks = tasks.filter((task) => task.id !== +req.params.id);
    resp.status(prevLength === tasks.length ? 404 : 202);
    resp.end(JSON.stringify({}));
});

app.listen(PORT, () => {
    console.log(`Server listen in port ${PORT}`);
});
