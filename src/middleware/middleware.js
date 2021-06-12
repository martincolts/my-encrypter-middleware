import { cipherInstance } from '../cipher/cipher.js';

export const middleware = (key) => {
    return async (req, res, next) => {
        console.log('ENTRO EN EL MIDDELWARE');
        const cipher = cipherInstance(key);
        req.messageFromMiddleware = 'Message from middleware';
        req.messageFromMiddlewareEncrypted = cipher.encrypt('Message from middleware');
        next();
    }
};