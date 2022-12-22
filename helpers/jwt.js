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