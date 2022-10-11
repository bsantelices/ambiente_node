import mongoose from 'mongoose'
import app from './app'
import { UserModel } from './models/User'

const PORT = 3333

app.listen(PORT)

console.log(`server running in: http://localhost:${PORT}`)

const connectDB = async () => {
  const db = await mongoose.connect('mongodb://localhost/testdb')
  console.log(`database is connected to: ${db.connection.db.databaseName}`)
}
connectDB()

const saveUser = async () => {
  const user = await UserModel.create({
    firstname: 'Bryan2',
    lastname: 'Santelices2',
    email: 'bsantelicesc2@gmail.com',
    password: 'secret2',
  })
  console.log({ user })
}

const getUsers = async () => {
  const users = await UserModel.find({})
  console.log(users)
}
// saveUser()
// getUsers()
// saveUser()
import axios from 'axios'

const getApi = async () => {
  const data = await axios.get('https://pokeapi.co/api/v2/generation/1/')
  console.log(data.data.pokemon_species)
}
getApi()
