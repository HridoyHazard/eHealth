import express from 'express'
import dotenv from 'dotenv'
import meds from './data/meds'
import ambulance from './data/ambulance'
import doctors from './data/doctors'


dotenv.config()
const app = express()

app.get('/api/meds', (req, res) => {
    res.json(meds)
})

app.get('/api/meds/:id', (req, res) => {
    const med = meds.find(p => p._id === req.params.id)
    res.json(med)
})

app.get('/api/ambulance', (req, res) => {
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

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`App is Running in ${process.env.NODE_ENV} mode on port ${PORT}`))