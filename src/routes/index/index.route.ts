import * as express from 'express'
const router = express.Router()


router.get('', async (req, res) => {
  res.status(200).send({ message : "Index Page" })
})


export { router }