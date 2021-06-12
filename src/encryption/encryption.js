import { cipherInstance } from '../cipher/cipher.js';

export const encryptBody = function(key) {
    const cipher = cipherInstance(key)
    return cipher.encryptBody(key);
}

export const encrypt = function(key) {
    const cipher = cipherInstance(key)
    return cipher.encrypt(key);
}