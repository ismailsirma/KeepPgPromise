import Express from 'express'
import Cars from '../../queries/cars'

const cars = Express.Router()

cars.get('/', Cars.getCars)
cars.get('/:id', Cars.getCar)
cars.post('/', Cars.createCar)
cars.delete('/:id', Cars.deleteCar)

export default cars