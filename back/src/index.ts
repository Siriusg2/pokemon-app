import express, { Request, Response, NextFunction } from 'express'
import morgan from 'morgan'
import { PrismaClient } from '@prisma/client'

declare global {
  namespace Express {
    interface Request {
      prisma: PrismaClient
    }
  }
}

const { PORT } = process.env
const prisma = new PrismaClient()
const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use((_req: Request, _res: Response, next: NextFunction) => {
  _req.prisma = prisma
  next()
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
process.on('beforeExit', () => prisma.$disconnect())
