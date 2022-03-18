import AuthorityData from '../models/authority.js';
import apiResponse from '../../api/api-response.js';
import paging from '../../api/paging.js';

export const findAll = async (req, res) => {
    console.log('findAllAuthority');
    try {
        const requestPaging = paging.parseQueryString(req);
        const total = await AuthorityData.countDocuments();
        const authorities = await AuthorityData.find()
                                                .sort({id: 1 /* 1은 오름차순 -1은 내림차순 */})
                                                .skip((requestPaging.page - 1) * requestPaging.rows)
                                                .limit(requestPaging.rows);
        apiResponse.successWithPaging(res, authorities, paging.calculatePaging(requestPaging, total));
    } catch (error) {
        apiResponse.error(res, error.message);
    }
}

export const findByName = async (req, res) => {
    console.log('findAuthorityByName');
    const name = req.query.name;
    if(name) {
        try {
            const authorities = await AuthorityData.findOne({name: name});
            apiResponse.success(res, authorities);
        } catch (error) {
            apiResponse.error(res, error.message);
        }
    } else {
        apiResponse.error(res, 'name is not defined.');
    }
}

export const create = async (req, res) => {
    console.log('createAuthority');
    const authority = req.body;
    const newAuthority = new AuthorityData(authority);
    try {
        await newAuthority.save();
        apiResponse.success(res, newAuthority);
    } catch (error) {
        apiResponse.error(res, error.message);
    }
}

export const update = async (req, res) => {
    console.log('updateAuthority');
    const newAuthority = req.body;
    try {
        const oldAuthority = await AuthorityData.findOne({id: newAuthority.id});
        if(!oldAuthority) {
            throw new Error('Authority not exists.');
        }
        await AuthorityData.updateOne({id: oldAuthority.id}, {$set: newAuthority});
        apiResponse.success(res, true);
    } catch (error) {
        apiResponse.error(res, error.message);
    }
}

export const deleteByName = async (req, res) => {
    console.log('deleteAuthorityByName');
    const name = req.body.name;
    if(name) {
        try {
            await AuthorityData.deleteOne({name: name});
            apiResponse.success(res, true);
        } catch (error) {
            apiResponse.error(res, error.message);
        }
    } else {
        apiResponse.error(res, 'name is not defined.');
    }
    
}