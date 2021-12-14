import express from 'express'
import dotenv from 'dotenv'
import ambulance from './data/ambulance.js'
import doctors from './data/doctors.js'
import connectDB from './config/db.js'
import medsRouter from './routes/medsRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'


dotenv.config()

connectDB()

const app = express()

app.use('/api/meds', medsRouter)

app.use(notFound)

app.use(errorHandler)

/*app.get('/api/ambulance', (req, res) => {
    res.json(ambulance)
})
app.get('/api/ambulance/:id', (req, res) => {
    const ambulance = ambulance.find(p => p._id === req.params.id)
    res.json(ambulance)
})

app.get('/api/doctors', (req, res) => {
    res.json(doctors)
})
app.get('/api/doctors/:id', (req, res) => {
    const doctor = doctors.find(p => p._id === req.params.id)
    res.json(doctor)
})
*/
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`App is Running in ${process.env.NODE_ENV} mode on port ${PORT}`))