import { Router } from 'express'

const routes = Router()

routes.get('/', async (req, res) => {
  return res.json('Hello World')
})

export default routes
