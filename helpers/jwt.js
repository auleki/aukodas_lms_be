import * as dotenv from 'dotenv'
dotenv.config()
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

export const jwtToken = (data) => {
    return jwt.sign(data, JWT_SECRET, { expiresIn: '2h' })
}

export const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET)
}

export const authenticateJwt = (req, res, next) => {
    // console.log('req from mid', req.headers)
    const authHeader = req.headers.authorization

    if (authHeader) {
        const token = authHeader.split(' ')[1]
        jwt.verify(token, JWT_SECRET, (err, user) => {
            if (err) {
                return res.send(403).json({ error: err, message: "Doing things like this would get you banned" })
            }
            req.user = user
            next()
        })
    } else {
        res.status(401).json({ error: "You are not authorized" })
    }
}