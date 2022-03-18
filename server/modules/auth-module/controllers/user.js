
// import UserData from '../models/user.js';

export const getUsers = async (req, res) => {
    res.status(200).json({"username": "hskim"})
}

// export const createUser = async (req, res) => {
//     console.log('createUser');
//     const user = req.body;
//     const newUser = new UserData(user);
//     try {
//         await newUser.save();
//         res.status(201).json(newUser);
//     } catch (error) {
//         res.status(409).json({message: error.message});
//     }
// }
