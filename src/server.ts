import mongoose from 'mongoose'
import app from './app'

const PORT = 3333

app.listen(PORT)

console.log(`server running in: http://localhost:${PORT}`)

const connectDB = async () => {
  const db = await mongoose.connect('mongodb://localhost/testdb')
  console.log(`database is connected to: ${db.connection.db.databaseName}`)
}
connectDB()

const main = () => {}
main()
