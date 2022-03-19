import apiResponse from '../../api/api-response.js';
import paging from '../../api/paging.js';
import UserData from '../models/user.js';
import aes256 from '../../password/aes256.js';
import bcrypt from '../../password/bcrypt.js';
import jwt from '../../api/jwt.js';

export const login = async (req, res) => {
    console.log('login');
    const user = req.body;
    try {
        const username = user.username;
        const dbUser = await UserData.findOne({username: username});
        if(!dbUser) {
            throw new Error("Check your ID or Password.");
        }
        try {
            const encryptedPassword = user.password;
            const rawPassword = aes256.decrypt(encryptedPassword);
            const dbPassword = dbUser.password;
            if(bcrypt.compare(rawPassword, dbPassword)) {
                apiResponse.success(res, jwt.createTokenInformation(username, dbUser.authorities, dbUser.departments));
            } else {
                throw new Error("Check your ID or Password.");
            }
        } catch (error) {
            console.log(error.message);
            apiResponse.error(res, "Check your ID or Password.");
        }
    } catch (error) {
        apiResponse.error(res, error.message);
    }
}

export const findAll = async (req, res) => {
    console.log('findAllUser');
    try {
        const requestPaging = paging.parseQueryString(req);
        const total = await UserData.countDocuments();
        const users = await UserData.find()
                                    .sort({id: 1 /* 1은 오름차순 -1은 내림차순 */})
                                    .skip((requestPaging.page - 1) * requestPaging.rows)
                                    .limit(requestPaging.rows);
        apiResponse.successWithPaging(res, users, paging.calculatePaging(requestPaging, total));
    } catch (error) {
        apiResponse.error(res, error.message);
    }
}

export const findByUsername = async (req, res) => {
    console.log('findUserByUsername');
    const username = req.query.username;
    if(username) {
        try {
            const user = await UserData.findOne({username: username});
            apiResponse.success(res, user);
        } catch (error) {
            apiResponse.error(res, error.message);
        }
    } else {
        apiResponse.error(res, 'username is not defined.');
    }
}

export const create = async (req, res) => {
    console.log('createUser');
    const user = req.body;
    const newUser = new UserData(user);
    try {
        const encryptedPassword = newUser.password;
        const rawPassword = aes256.decrypt(encryptedPassword);
        const bcryptPassword = bcrypt.encrypt(rawPassword);
        newUser.password = bcryptPassword;
        await newUser.save();
        apiResponse.success(res, newUser);
    } catch (error) {
        apiResponse.error(res, error.message);
    }
}

export const update = async (req, res) => {
    console.log('updateUser');
    const newUser = req.body;
    try {
        const oldUser = await UserData.findOne({id: newUser.id});
        if(!oldUser) {
            throw new Error('User not exists.');
        }
        await UserData.updateOne({id: oldUser.id}, {$set: newUser});
        apiResponse.success(res, true);
    } catch (error) {
        apiResponse.error(res, error.message);
    }
}

export const deleteByUsername = async (req, res) => {
    console.log('deleteUserByUsername');
    const username = req.body.username;
    if(username) {
        try {
            await UserData.deleteOne({username: username});
            apiResponse.success(res, true);
        } catch (error) {
            apiResponse.error(res, error.message);
        }
    } else {
        apiResponse.error(res, 'username is not defined.');
    }
    
}