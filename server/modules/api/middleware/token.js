import jwt from 'jsonwebtoken';

export const validateAccessToken = (req, res, next) => {
    try {
        const accessToken = req.header(process.env.JWT_ACCESS_HEADER);
        if(!accessToken) {
            return res.sendStatus(400);
        }
        jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET, (error, user) => {
            if(error) {
                console.log(error);
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        })
    } catch(error) {
        return res.sendStatus(403);
    }
}