export const restEncryption = async (req, res, next) => {
    console.log('logger')
    req.messageFromMiddleware = 'Message from middleware';
    next();
};