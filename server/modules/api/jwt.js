import jwt from 'jsonwebtoken';
import TokenInformation from '../auth-module/classes/TokenInformation.js';

const header = process.env.JWT_HEADER;

const createAccessToken = (username, authorities, departments) => {
    return jwt.sign({
        username: username,
        authorities: authorities,
        departments: departments
    }, process.env.JWT_ACCESS_SECRET, {expiresIn: '15m'});
}

const createRefreshToken =  (username, authorities, departments) => {
    return jwt.sign({
        username: username,
        authorities: authorities,
        departments: departments
    }, process.env.JWT_REFRESH_SECRET, {expiresIn: '90 days'});
}

const createTokenInformation = (username, authorities, departments) => {
    const accessToken = jwt.sign({
        username: username,
        authorities: authorities,
        departments: departments
    }, process.env.JWT_ACCESS_SECRET, {expiresIn: '15m'});

    const refreshToken = jwt.sign({
        username: username,
        authorities: authorities,
        departments: departments
    }, process.env.JWT_REFRESH_SECRET, {expiresIn: '90 days'});

    return new TokenInformation(accessToken, refreshToken);
}

const refresh = (accessToken, refreshToken) => {
    try {
        jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
        return null;
    } catch (error) {
        if(error.message == 'jwt expired') {
            try {
                const decodedRefreshToken = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
                return createTokenInformation(decodedRefreshToken.username, decodedRefreshToken.authorities, decodedRefreshToken.departments);
            } catch (error) {
            }
        }
        return null;
    }
}

export default {
    createAccessToken: createAccessToken,
    createRefreshToken: createRefreshToken,
    createTokenInformation: createTokenInformation,
    refresh: refresh
}