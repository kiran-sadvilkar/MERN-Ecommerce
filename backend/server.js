import express from 'express'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import colors from 'colors'
import dotenv from 'dotenv'

import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running')
})

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  5000,
  console.log(
    `server running in ${process.env.NODE_ENV} on port ${PORT}`.green.bold
      .underline
  )
)
