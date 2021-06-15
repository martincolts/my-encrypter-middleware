
import assert from 'assert';
import { cipherInstance } from '../../src/cipher/cipher.js';

describe('Cipher test', async () => {
  it('it should encrypt and cecrypt correctly', async () => {

    //given:
    const valueToEncrypt = 'hello workd';
    const cipher = cipherInstance('key');

    //when:
    const valueEncrypted = cipher.encrypt(valueToEncrypt);
    const valueDecrypted = cipher.decrypt(valueEncrypted);

    //then:
    assert.equal(valueToEncrypt, valueDecrypted);
  });

  it('it shoule miss encryption with decryption', async () => {
    //given:
    const valueToEncrypt = 'hello workd';
    const cipher = cipherInstance('key');
    const cipherWithOtherKey = cipherInstance('another key to this instance');

    //when:
    const valueEncrypted = cipher.encrypt(valueToEncrypt);
    const valueDecrypted = cipherWithOtherKey.decrypt(valueEncrypted);

    //then:
    assert.notEqual(valueToEncrypt, valueDecrypted);
  });

  it('it should encrypt and cecrypt correctly overwriting key', async () => {
    //given:
    const valueToEncrypt = 'hello workd';
    const cipher = cipherInstance('key');
    const cipherWithOtherKey = cipherInstance('another key to this instance');

    //when:
    const valueEncrypted = cipher.encrypt(valueToEncrypt, 'key');
    const valueDecrypted = cipherWithOtherKey.decrypt(valueEncrypted);

    //then:
    assert.notEqual(valueToEncrypt, valueDecrypted);
  });

  it('it shoule miss encryption with decryption overwriting key', async () => {
    //given:
    const valueToEncrypt = 'hello workd';
    const cipher = cipherInstance('key');

    //when:
    const valueEncrypted = cipher.encrypt(valueToEncrypt, 'other key to encrypt');
    const valueDecrypted = cipher.decrypt(valueEncrypted);

    //then:
    assert.notEqual(valueToEncrypt, valueDecrypted);
  });
});