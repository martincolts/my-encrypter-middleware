import { cipherInstance } from '../cipher/cipher.js';

export const middleware = (key) => {
    return async (req, res, next) => {
        const cipher = cipherInstance(key);
        req.body = cipher.decryptBody(req.body.data);
        next();
    }
};