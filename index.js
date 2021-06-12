import express from 'express';

export const restEncryption = (req, res, next) => {
    console.log('logger')
    next();
};