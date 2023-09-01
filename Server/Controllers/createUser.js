const {Users} = require('../DB_connection')
const bcrypt = require('bcrypt')

const createUser = async(email, password)=>{
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const [user, created] = await Users.findOrCreate({
            where: { email: email },
            defaults: { password: hashedPassword },
          });
        if (created) {
            return true;
        }
        return false;
    } catch (error) {
        console.error('Error a crear usuario ', error.message);
        return false
    }
}

module.exports = createUser;