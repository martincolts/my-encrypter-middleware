import CryptoJS from 'crypto-js';

export class Cipher {
    constructor(key) {
        this.key = key;
    }

    encrypt = function (value, key) {
        const keyToUse = key || this.key; 
        return CryptoJS.AES.encrypt(value, keyToUse).toString();
    }

    decrypt = function (encryption) {
        const bytes  = CryptoJS.AES.decrypt(encryption, this.key);
        return bytes.toString(CryptoJS.enc.Utf8);
    }

    encryptBody = function(body, key) {
        const keyToUse = key || this.key;
        return this.encrypt(JSON.stringify(body), keyToUse);
    }

    decryptBody = function(encryptedBody) {
        return JSON.parse(this.decrypt(encryptedBody));
    }
}

export const cipherInstance = (key) => {
    return new Cipher(key);
}