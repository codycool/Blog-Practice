import jwt from 'jsonwebtoken';
import Config from '../config';
import Boom from 'boom';

export const getToken = {
  ['JWT'](userInfo) {
    return jwt.sign(userInfo, Config.jwt.jwtSecret, { algorithm: 'HS512', expiresIn: Config.jwt.jwtTokenExpiresIn })
  },
}

export const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, Config.jwt.jwtSecret, (err, decoded) => {
      if (err) {
        const TokenError = Boom.unauthorized('Token is not valid or expired')
        return reject(TokenError)
      }
      resolve(decoded)
    })
  })
}

export const bearerToToken = (authorization) => {
  const parts = authorization.split(' ')
  if (parts.length === 2) {
    const [ schema, credential ] = parts
    if (/^Bearer$/i.test(schema)) {
      return credential
    }
  }
}


export const checkAuth = async (authorization) => {
  const token = bearerToToken(authorization)
  return await verifyToken(token)
}