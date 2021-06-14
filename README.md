# My Encryption Middleware

The goal of this library is to provide a mechanism to transfer encrypted data through the net, to do that it provides tools to encrypt the **body** and also a **middleware** to decrypt in an express application.

## Middleware

### How to use it.

The middleware is going to decrypt the data if we send it in a body within a ```data``` field. Example:

```
{
    'data': 'encrypted body hash'
}
```



The following example is to configure it in an [express](https://expressjs.com/) application:

```js
import { middleware } from 'my-encrypter-middleware';

const app = express();
const port = 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.text());

app.use(middleware('my key'));

app.listen(port);
```

Notice that you can provide your key, for this example is ```'my key'```

## Encrypter

### How to use it

To use the encrypter (client-side) you  need to import it and instantiate it as following:

```js
import { cipherInstance } from 'my-encrypter-middleware';

const cipher = cipherInstance('my key');
```

Keep in mind that you need to add the encryption in a body that has the ```data``` field with the encryption in it.

Example:

```js
const bodyToEncrypt = {
    ...
}

{
    'data': cipher.encrypt(bodyToEncrypt);
}
```
//NOTE: add axios example.

# Contribute

How can you contribute to this package? To do it you can create a pull request to this [repository](https://github.com/martincolts/my-encrypter-middleware)

## Testing

Currently, this repo has unit and integration tests. The unit test covers the cipher encryption and decryption and the integration test is using the middleware in an express application and the cipher to encrypt the body, testing a post the check the integrity of the library.

Before push changes you can create and run test with the following command:

```sh
npm test
```

Also, you can run the test with a docker image, to do that you can execute the following command.

```sh
docker build -t my-encryption-middleware . && docker run -it my-encryption-middleware
```

Feel free to change the image tag whatever you want.