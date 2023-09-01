const getUser = require('../Controllers/getUser');

const login = async (req, res)=>{
    const {email, password} = req.body;

    try {
         const user = await getUser(email, password);

         if(!user){
            return res.status(400).json('error at login');
         }

         return res.status(200).json(user);

    } catch (error) {
        return res.status(400).json(error.message);
    }
};

module.exports = login;