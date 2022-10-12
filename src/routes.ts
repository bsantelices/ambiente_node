import { Router } from 'express'
import { getApi } from './functions'

const routes = Router()

routes.get('/', async (req, res) => {
  const data = await getApi()
  return res.json(data)
})

export default routes
