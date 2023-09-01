const bcrypt = require('bcrypt');
const {Users} = require('../DB_connection');

const getUser = async (email, password)=>{
    try {
        const user = await Users.findOne({where:{email:email}})
        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        )
        if (passwordMatch) {
            const userWithoutPassword = {
                id: user.id,
                email: user.email,
            };
            return userWithoutPassword;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}
module.exports = getUser;