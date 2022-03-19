import apiResponse from "../../api/api-response.js";
import jwt from '../../api/jwt.js';

export const refresh = async (req, res) => {
    console.log('refreshToken');

    try {
        const accessToken = req.header(process.env.JWT_ACCESS_HEADER);
        const refreshToken = req.header(process.env.JWT_REFRESH_HEADER);
        apiResponse.success(res, jwt.refresh(accessToken, refreshToken));
    } catch (error) {
        apiResponse.error(res, error.message);
    }
}