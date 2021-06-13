import { Cipher } from '../../../src/cipher/cipher.js';
import { middleware } from '../../../src/middleware/middleware.js';
import express from 'express';

const app = express();
const port = 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.text());

app.use(middleware('my key'));

app.get('/', (req, res) => {
    console.log(req.text);
    res.send({'version': '1.0.0', 'message-from-middleware': req.messageFromMiddleware, 'encrypted': req.messageFromMiddlewareEncrypted
, messageDecrypted: new Cipher('key').decrypt(req.messageFromMiddlewareEncrypted)})
});

app.post('/', (req, res) => {
    res.send(req.body);
});

app.listen(port, () => {
    console.log(`Application started in port ${port}`)
});

export { app };