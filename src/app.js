import express from 'express'
import { shortenerRouter } from './routes/shortener.js'
import { connectDB } from './config/db.js'
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

connectDB()
.then(() => console.log('conectado a la base de datos'))
.catch(() => console.log('ha ocurrido un error'))

app.get('/ping', (req, res) => {
    return res.json({message: 'pong'})
})

app.use('/api', shortenerRouter)

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto', PORT)
})