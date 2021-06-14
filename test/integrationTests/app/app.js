import { Cipher } from '../../../src/cipher/cipher.js';
import { middleware } from '../../../src/middleware/middleware.js';
import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.use(middleware('my key'));

app.post('/', (req, res) => {
    res.send(req.body);
});

app.listen(port, () => {
    console.log(`Application started in port ${port}`)
});

export { app };