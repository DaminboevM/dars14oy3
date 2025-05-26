import express from 'express'
import 'dotenv/config'
import { connectDB } from './config/Database.js'


const app = express()
const PORT = process.env.PORT || 4000
await connectDB()


app.listen(PORT, () => console.log(`Listening in ${PORT}-port`))