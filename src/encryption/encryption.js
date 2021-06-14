import { cipherInstance } from '../cipher/cipher.js';

export const encryptBody = function(body, key) {
    const cipher = cipherInstance(key)
    return cipher.encryptBody(body, key);
}

export const encrypt = function(value, key) {
    const cipher = cipherInstance(key)
    return cipher.encrypt(value, key);
}