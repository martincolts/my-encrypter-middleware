import { cipherInstance } from '../cipher/cipher.js';

export const middleware = (key) => {
    return async (req, res, next) => {
        const cipher = cipherInstance(key);
        try {
            req.body = cipher.decryptBody(req.body.data);
            next();
        } catch (ex){
            res.status(400)
            res.send({'error': 'Decryption error: the body was not properly encrypted'})
        }
    }
};