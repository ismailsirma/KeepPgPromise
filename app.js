import Express from 'express'
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import userRouter from './routes/users/users'
import carRouter from './routes/cars/cars'

dotenv.config()
__dirname = path.resolve()

const port = 3000
const app = Express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/users', userRouter)
app.use('/cars', carRouter)

app.listen(port, () => console.log('server running on port ', port))
