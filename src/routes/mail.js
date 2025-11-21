import express from 'express';
import { sendEmail } from '../controllers/mail.controller.js';

const mailRouter = express.Router()

mailRouter.post('/sendEmail', sendEmail)

export { mailRouter }