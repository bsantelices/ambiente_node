import axios from 'axios'
import { UserModel } from './models/User'
import { chromium } from 'playwright'
import { shops } from './constants/shops'

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

export const useScrapping = async () => {
  const browser = await chromium.launch({ headless: false })
  for (const shop of shops) {
    const { name, url, checkStock } = shop
    const page = await browser.newPage()
    await page.goto(url)
    const isAvailable = await checkStock(page)
    if (isAvailable) {
      console.log(`${name} is available`)
    } else {
      console.log(`${name} is not available`)
    }
    await page.close()
  }
  //   await page.goto(
  //     'https://www.maconline.com/products/apple-airpods-max?taxon_id=570#default_sku=MGYH3AM/A',
  //   )
  //   const content = await page.content()
  await browser.close()
}
