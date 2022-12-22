import bcrypt from 'bcrypt'

export default class Helpers {
    /**
     * hashValue - uses bcrypt to hash a password with a default salt round of 10
     * @param String val - value to be hashed
     */
    async hashValue(val = "", salt = 10) {
        return await bcrypt.hash(val, salt)
    }

    /**
     * hashValue - uses bcrypt to hash a password with a default salt round of 10
     * @param String val - value to be hashed
     */
    async compareHashValue(plainValue, hashedValue) {
        console.log('plain value', plainValue)
        console.log('hashed value', hashedValue)
        // compare a hash value
        return await bcrypt.compare(plainValue, hashedValue)
    }
}
