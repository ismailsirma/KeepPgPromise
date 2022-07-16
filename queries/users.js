import db from '../db/index'

const getUser = async (req, res, next) => {
    try{
        let user = await db.one('SELECT * FROM users where id = $1', [req.params.id])
        user.cars = await db.any('SELECT * FROM user_cars uc inner join cars c on uc.car_id = c.id where uc.user_id = $1', [req.params.id])        
        res.status(200).json({
            user,
            status: 'success',
            message: 'Single user detail retrieved'
        })
    } catch(error) {
        next(error)
    }
}

const getUsers = async (req, res, next) => {
    try{
        let users = await db.any('SELECT * FROM users')
        res.status(200).json({
            users,
            status: 'success',
            message: 'All users'
        })
    } catch(error) {
        next(error)
    }
}

const createUser = async (req, res, next) => {
    try {
        //await db.none('INSERT INTO users (email) VALUES (${email})', req.body)
        const user = await db.one('INSERT INTO users (email) VALUES (${email}) RETURNING *', req.body)
        res.status(200).json({
            user,
            message: 'NEW USER CREATED',
            status: 'success'
        })
    } catch(error){
        next(error)   
    }
}

const deleteUser = async (req, res, next) => {
    try {
        await db.none('DELETE FROM users where id = $1', req.params.id)
        res.status(200).json({
            message: 'USER DELETED',
            status: 'success'
        })
    } catch(error){
        next(error)   
    }
}

export default {
    getUser,
    getUsers,
    createUser,
    deleteUser,
} 