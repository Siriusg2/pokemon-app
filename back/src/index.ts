import express, { Request, Response, NextFunction } from 'express'
import morgan from 'morgan'
import { PrismaClient } from '@prisma/client'
import router from './routes/index'
import dbSeeder from './utils/dbSeeder'
import cors from 'cors'
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
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use((_req: Request, _res: Response, next: NextFunction) => {
  _req.prisma = prisma
  next()
})
app.use('/', router)
app.listen(PORT, () => {
  dbSeeder(prisma).then(() => {
    console.log(`Server listening on ${PORT}`)
  })
})

//closes Prisma connection when the app is stopped
process.on('beforeExit', () => prisma.$disconnect())
