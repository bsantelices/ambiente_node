import axios from 'axios'
import { UserModel } from './models/User'

export const getApi = async () => {
  const data = await axios.get('https://pokeapi.co/api/v2/generation/1/')
  return data.data.pokemon_species
}

export const saveUser = async () => {
  const user = await UserModel.create({
    firstname: 'Bryan2',
    lastname: 'Santelices2',
    email: 'bsantelicesc2@gmail.com',
    password: 'secret2',
  })
  return user
}

export const getUsers = async () => {
  const users = await UserModel.find({})
  return users
}
