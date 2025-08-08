import express from 'express';
import { saveUrl } from '../controllers/shortener.controller.js';

const shortenerRouter = express.Router()

shortenerRouter.post('/shorten', saveUrl)

export { shortenerRouter }