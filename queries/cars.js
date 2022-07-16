import db from '../db/index'

const getCar = async (req, res, next) => {
    try{
        let car = await db.one('SELECT * FROM cars where id = $1', [req.params.id])
        res.status(200).json({
            car,
            status: 'success',
            message: 'Single car detail retrieved'
        })
    } catch(error) {
        next(error)
    }
}

const getCarByUser = async (req, res, next) => {
    try{
        let car = await db.any('SELECT * FROM user_cars uc inner join cars c on uc.car_id = c.id where uc.user_id = $1', [req.params.id])
        res.status(200).json({
            car,
            status: 'success',
            message: 'All cars of one user retrieved'
        })
    } catch(error) {
        next(error)
    }
}

const getCars = async (req, res, next) => {
    try{
        let cars = await db.any('SELECT * FROM cars')
        res.status(200).json({
            cars,
            status: 'success',
            message: 'All CARS'
        })
    } catch(error) {
        next(error)
    }
}

const createCar = async (req, res, next) => {
    try {
        const car = await db.one('INSERT INTO cars (brand, model, year) VALUES (${brand}, ${model}, ${year} ) RETURNING *', req.body)
        res.status(200).json({
            car,
            message: 'NEW CAR CREATED',
            status: 'success'
        })
    } catch(error){
        next(error)   
    }
}

const createUserCar = async (req, res, next) => {
    try {
        const car = await db.one('INSERT INTO user_cars (user_id, car_id) VALUES ($1, $2 ) RETURNING *', [req.params.id, req.body.car_id])
        res.status(200).json({
            car,
            message: 'NEW CAR CREATED FOR THE USER',
            status: 'success'
        })
    } catch(error){
        next(error)   
    }
}

const deleteCar = async (req, res, next) => {
    try {
        await db.none('DELETE FROM cars where id = $1', req.params.id)
        res.status(200).json({
            message: 'CAR DELETED',
            status: 'success'
        })
    } catch(error){
        next(error)   
    }
}

const deleteUserCar = async (req, res, next) => {
    try {
        await db.none('DELETE FROM user_cars where user_id = $1 and car_id = $2', [req.params.id, req.params.carId])
        res.status(200).json({
            message: 'CAR DELETED FOR THE USER',
            status: 'success'
        })
    } catch(error){
        next(error)   
    }
}

export default {
    getCar,
    getCars,
    createCar,
    deleteCar,
    getCarByUser,
    createUserCar,
    deleteUserCar
} 