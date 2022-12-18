export const register = async (req, res) => {
    try {
        res.status(201).json({ message: "User is successfully created" })
    } catch (error) {
        res.status(400).json({ message: "There is a problem here" })
    }
}

export const login = async (req, res) => {
    try {
        res.status(201).json({ message: "Logged in successfully" })
    } catch (error) {
        res.status(400).json({ message: "There is a problem here" })
    }
}

export const resetPassword = async (req, res) => {
    try {
        res.status(201).json({ message: "Password has been reset successfully" })
    } catch (error) {
        res.status(400).json({ message: "There is a problem here" })
    }
}
