const createUser = require('../Controllers/createUser');

const postUser = async (req, res)=>{
     
    const {email, password} = req.body;
    console.log(email, password);
    if(!email || !password){
        return res.status(400).json('incomplete data');
    }
    try {
        const user = await createUser(email, password);

        return user ? res.status(200).json('User created') : res.status(400).json('Already exists');
        
    } catch (error) {
        return res.status(400).json(error.message);
    }

}

module.exports = postUser;