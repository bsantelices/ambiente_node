import mongoose from 'mongoose'
import app from './app'
import axios from 'axios'

const PORT = 3333

app.listen(PORT)

console.log(`server running in: http://localhost:${PORT}`)

const connectDB = async () => {
  const db = await mongoose.connect('mongodb://localhost/testdb')
  console.log(`database is connected to: ${db.connection.db.databaseName}`)
}
connectDB()

import { getApi, getUsers, useScrapping } from './functions'

const main = async () => {
  const pokemons = await getApi()
  await useScrapping()
  // console.log(content)
}
main()
