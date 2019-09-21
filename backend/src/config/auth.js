import jwt from 'jsonwebtoken'
import env from '../env.js'

export default (req, res, next) => {
    // CORS preflight request
    if (req.method === 'OPTIONS') {
        next()
    } else {
        const token = req.body.token || req.query.token || req.headers['authorization']

        if (!token) {
            return res.status(403).send({ errors: ['No token provided'] })
        }

        jwt.verify(token, env.authSecret, (err, decoded) => {
            if (err) {
                return res.status(403).send({
                    errors: ['Failed to authenticate token']
                })
            } else {
                // pass the decoded token to request
                req.decoded = decoded
                next()
            }
        })
    }
}