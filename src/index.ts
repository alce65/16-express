import express from 'express';
import morgan from 'morgan';
import fs from 'fs/promises';

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

app.listen(PORT, () => {
    console.log(`Server listen in port ${PORT}`);
});
