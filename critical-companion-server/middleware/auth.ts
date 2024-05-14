import { Handler } from '../type';
import jwt from 'jsonwebtoken';
import User from '../routes/User/UserQuerry';

const authMiddleware: Handler = (req, res, next) => {
  const authString = req.headers.authorization

  if (!next) return res.status(501).json({ msg: 'Not yet implemented' })
  if (!authString) return res.status(401).json({ msg: 'No token, authorization denied' })
  if (!authString.startsWith('Bearer')) return res.status(401).json({ msg: 'Token is not valid' })
  const token = authString.split(' ')[1]

  if (!token) return res.status(401).json({ msg: 'Token is not valid' })

  jwt.verify(token, process.env.SECRET as jwt.Secret, (err, decoded) => {
    if (err) return res.status(401).json({ msg: 'Token is not valid' })
    if (typeof decoded === 'string') return res.status(401).json({ msg: 'Token is not valid' })
    User.Get(decoded?.mail, (result) => { // Change 'decoded.email' to 'decoded?.mail'
      if (!result) return res.status(400).json({msg: "not found"})
      req.user = result[0]
      next()
    })
  })
}
export default authMiddleware;
