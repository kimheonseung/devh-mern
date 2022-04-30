import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import axios from 'axios';

const algorithm = 'aes-256-cbc';
const iv = Buffer.from([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);
const apiUrl = process.env.REACT_APP_API_URL_PREFIX+"token/";

export const checkLogin = () => {
  return localStorage.getItem(process.env.REACT_APP_ACCESS_TOKEN_KEY) ? true : false;
}

export const setToken = (tokens) => {
  if(tokens.accessToken && tokens.refreshToken) {
    localStorage.setItem(process.env.REACT_APP_ACCESS_TOKEN_KEY, tokens.accessToken);
    localStorage.setItem(process.env.REACT_APP_REFRESH_TOKEN_KEY, tokens.refreshToken);
    const token = jwt.decode(tokens.accessToken);
    console.log(token.exp);
    const duration = new Date().getTime() - token.exp;
    setTimeout(silentRefresh, duration - 60000);
  }
}

export const removeToken = () => {
  localStorage.removeItem(process.env.REACT_APP_ACCESS_TOKEN_KEY);
  localStorage.removeItem(process.env.REACT_APP_REFRESH_TOKEN_KEY);
}

export const printAuthInfo = () => {
  const key = localStorage.getItem(process.env.REACT_APP_ACCESS_TOKEN_KEY);
  if(key)
    console.log(jwt.verify(key, process.env.REACT_APP_JWT_SECRET_KEY));
  else
    console.log('token not exist');
}

export const getAuthInfo = () => {
  const key = localStorage.getItem(process.env.REACT_APP_ACCESS_TOKEN_KEY);
  const authObject = jwt.verify(key, process.env.REACT_APP_JWT_SECRET_KEY);
  return authObject;
}

export const encryptAES256 = (text) => {
  const cipher = crypto.createCipheriv(algorithm, process.env.REACT_APP_AES_KEY, iv);
  let result = cipher.update(text, 'utf8', 'base64');
  result += cipher.final('base64');
  return result;
}

export const silentRefresh = () => {
  axios
    .post(apiUrl+'silent-refresh', {}, {
      headers: {
        'Authorization_': localStorage.getItem(process.env.REACT_APP_REFRESH_TOKEN_KEY)
      }
    })
    .then((rs) => {
      if(200 === rs.data.status) {
        setToken(rs.data.data[0]);
      } else {
        console.log('failed to silent refresh');
      }
    })
    .catch((e) => {
      console.log('catch !');
      console.log(e);
    })
    .finally(() => {
      console.log('finally !');
    });
}

