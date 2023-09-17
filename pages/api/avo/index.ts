import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

const allAvos = async (_req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB()
  const avos = await db.getAll()

  return res.status(200).json({ data: avos, length: avos.length })
}

export default allAvos
