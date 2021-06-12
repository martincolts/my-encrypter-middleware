import CryptoJS from 'crypto-js';
import Cipher from './cipher/cipher.js';


export const restEncryption = async (req, res, next) => {
    console.log('logger')
    req.messageFromMiddleware = 'Message from middleware';
    next();
};

const object = {
    algo: 'asdad',
    otracosa: 'sdasdad',
    elements: ['dfdsf', 'dsfsdfs', {hola: 'sadsad', chau: 'chau'}]
}

console.log(object);

var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(object), 'secret key 123').toString();

console.log(ciphertext);



var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
var originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log(originalText);

const newObject = JSON.parse(originalText);

console.log(newObject);

console.log('-----------------------')

const cipher = new Cipher('secret key');

const enc = cipher.encrypt('hola');
console.log(enc);
const dec = cipher.decrypt(enc)
console.log(dec);

const bodyEnc = cipher.encryptBody(object);
console.log(bodyEnc);
const bodyDec = cipher.decryptBody(bodyEnc);
console.log(bodyDec);
