import Express from 'express'
import Cars from '../../../queries/cars'

// nested route : mergeParams
const userCars = Express.Router({mergeParams: true})

userCars.get('/', Cars.getCarByUser)
userCars.post('/', Cars.createUserCar)
userCars.delete('/:carId', Cars.deleteUserCar)

export default userCars