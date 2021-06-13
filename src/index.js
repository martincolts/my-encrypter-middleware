import { cipherInstance } from './cipher/cipher.js';

export { Cipher } from './cipher/cipher.js';
export { middleware } from './middleware/middleware.js';
export { encrypt, encryptBody } from './encryption/encryption.js';

const cipher = cipherInstance('my key');

var value = {
    'nombre': 'martin',
    'apellido': 'lopez'
}

console.log(cipher.encryptBody(value))
