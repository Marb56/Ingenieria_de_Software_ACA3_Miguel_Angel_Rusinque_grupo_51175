import jwt from 'jsonwebtoken'
import models from '../models'

export default {
    encode: async (_id, rol, email) => {
        const token = jwt.sign({ _id: _id, rol: rol, email: email }, 'ecommerce', { expiresIn: '365d' })
        return token;
    },
    decode: async (token) => { // Agregado el parámetro token
        try {
            const { _id } = await jwt.verify(token, 'ecommerce');
            const user = await models.User.findOne({ _id: _id, state: 1 }) // Corregido el método findOne
            if (user) {
                return user;
            }
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}
