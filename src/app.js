import express from 'express'
import 'dotenv/config'
import { connectDB } from './config/Database.js'
import errorHandler from './middleware/errHeandler.js'
import router from './router/router.js'
import fileUpload from 'express-fileupload'

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(fileUpload())
await connectDB()
app.use('/v1/api',router)

app.use(errorHandler)

app.listen(PORT, () => console.log(`Listening in ${PORT}-port`))