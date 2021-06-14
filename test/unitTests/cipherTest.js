
import assert from 'assert';
import { cipherInstance } from '../../src/cipher/cipher.js';

describe('Cipher test', async () => {
  it('it should encrypt and cecrypt correctly', async () => {

    //given:
    const valueToEncypt = 'hello workd';
    const cipher = cipherInstance('key');

    //when:
    const valueEncrypted = cipher.encrypt(valueToEncypt);
    const valueDecrypted = cipher.decrypt(valueEncrypted);

    //then:
    assert.equal(valueToEncypt, valueDecrypted);
  });

  it('it shoule miss encryption with decryption', async () => {
    //given:
    const valueToEncypt = 'hello workd';
    const cipher = cipherInstance('key');
    const cipherWithOtherKey = cipherInstance('another key to this instance');

    //when:
    const valueEncrypted = cipher.encrypt(valueToEncypt);
    const valueDecrypted = cipherWithOtherKey.decrypt(valueEncrypted);

    //then:
    assert.notEqual(valueToEncypt, valueDecrypted);
  });

  it('it should encrypt and cecrypt correctly overwriting key', async () => {
    //given:
    const valueToEncypt = 'hello workd';
    const cipher = cipherInstance('key');
    const cipherWithOtherKey = cipherInstance('another key to this instance');

    //when:
    const valueEncrypted = cipher.encrypt(valueToEncypt, 'key');
    const valueDecrypted = cipherWithOtherKey.decrypt(valueEncrypted);

    //then:
    assert.notEqual(valueToEncypt, valueDecrypted);
  });

  it('it shoule miss encryption with decryption overwriting key', async () => {
    //given:
    const valueToEncypt = 'hello workd';
    const cipher = cipherInstance('key');

    //when:
    const valueEncrypted = cipher.encrypt(valueToEncypt, 'other key to encrypt');
    const valueDecrypted = cipher.decrypt(valueEncrypted);

    //then:
    assert.notEqual(valueToEncypt, valueDecrypted);
  });
});