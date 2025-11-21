import 'dotenv/config'

import express from 'express'
import { shortenerRouter } from './routes/shortener.js'
import { connectDB } from './config/db.js'
import { mailRouter } from './routes/mail.js'
import { redirectLink } from './controllers/shortener.controller.js'

const app = express()
import cors from 'cors'

const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())

connectDB()
.then(() => console.log('conectado a la base de datos'))
.catch((error) => console.log('ha ocurrido un error', error))

app.get('/ping', (req, res) => {
    return res.json({message: 'pong'})
})

app.get('/:code', redirectLink)

app.use('/api', shortenerRouter, mailRouter)

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto', PORT)
})