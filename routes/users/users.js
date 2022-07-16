import Express from 'express'
import Users from '../../queries/users'
import UserCarsRouter from './cars/cars'

const users = Express.Router()

users.get('/', Users.getUsers)
users.get('/:id', Users.getUser)
users.post('/', Users.createUser)
users.delete('/:id', Users.deleteUser)

// nested route (including get, post etc)
users.use('/:id/cars', UserCarsRouter)

export default users