import Mentee from '../models/mentee.model.js'
import Mentor from '../models/mentor.model.js'
import { ACCOUNT_TYPE } from '../utilities/enum.js'

/**
 * register - we can register both a mentee and a mentor, 
 * the differenciating tag will be the role passed in via the client's request
 * @param req - the request body
 * @param res - the response body
 */
export const register = async (req, res) => {
    try {
        const userCredentials = req.body
        let newUser;
        const { accountType, ...user } = userCredentials
        if (userCredentials?.accountType === ACCOUNT_TYPE.MENTOR) {
            newUser = new Mentor(user)
        } else {
            newUser = new Mentee(user)
        }
        const savedUser = await newUser.save()
        console.log('saved user is:', savedUser)
        res.status(201).json({ message: "User is successfully created", data: savedUser })
    } catch (error) {
        res.status(400).json({ message: "There is a problem here", error: error.message })
    }
}

/**
 * login - we can login both a mentee and a mentor, 
 * the differenciating tag will be the role passed in via the client's request
 * @param req - the request body
 * @param res - the response body
 */
export const login = async (req, res) => {
    try {
        const userCredentials = req.body
        let foundUser = {}
        // check whether user is a mentor or mentee
        if (userCredentials.accountType === ACCOUNT_TYPE.MENTOR) {
            // verify information for as a mentor
            foundUser = Mentor.findOne(userCredentials.email)
        } else {
            // verify information for a mentee
            foundUser = Mentee.findOne(userCredentials.email)
        }
        res.status(201).json({ message: "Logged in successfully" })
    } catch (error) {
        res.status(400).json({ message: "There is a problem here" })
    }
}

/**
 * resetPassword - we can reset the password for either a mentor or a mentee
 * @param req - the request body
 * @param res - the response body
 */
export const resetPassword = async (req, res) => {
    try {
        res.status(201).json({ message: "Password has been reset successfully" })
    } catch (error) {
        res.status(400).json({ message: "There is a problem here" })
    }
}
