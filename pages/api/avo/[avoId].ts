import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB()
  const { avoId } = req.query
  const avo = await db.getById(avoId as string)

  // res.statusCode = 200
  // res.setHeader('Content-Type', 'application/json')
  // res.end(JSON.stringify(avo))

  return res.status(200).json(avo)
}

export default allAvos
