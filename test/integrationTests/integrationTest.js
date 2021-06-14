import chai from 'chai';
import chaiHttp from 'chai-http';
import { app } from './app/app.js';
import { cipherInstance } from '../../src/cipher/cipher.js';
import { response } from 'express';

// Configure chai
chai.use(chaiHttp);
chai.should();

var expect = chai.expect;

describe("Middleware", () => {
    describe("POST /", () => {

        it("should send and decrypt the body", (done) => {

            // given:

            const objectToSend = {
                'data': 'example',
                'name': 'martin',
                'list': ['one', 'two', 'tree']
            };

            const cipher = cipherInstance('my key');

            var encrypted = cipher.encryptBody(objectToSend);
            // when:

            chai.request(app)
                .post('/')
                .send({'data': encrypted })
                .end((err, res) => {
                    
                    // then:
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    res.body.should.be.eql(objectToSend);
                    done();
                });
        });
        it("should fail, body is not encrypted", (done) => {

            // given:
            var messageExpected = {'error': 'Decryption error: the body was not properly encrypted'};
            var objectToSend = 'not encrypted';

            // when:

            chai.request(app)
                .post('/')
                .send({'data': objectToSend})
                .end((err, res) => {
                    // then:

                    expect(err).to.be.null;
                    expect(res).to.have.status(400);
                    res.body.should.be.eql(messageExpected);
                    done();
                });
        });
    });
});