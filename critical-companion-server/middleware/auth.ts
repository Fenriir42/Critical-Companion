import { Handler } from '../type';
//import jwt from 'jsonwebtoken';

const authMiddleware: Handler = (req, res, next) => {
  return res.status(501).json({ msg: 'Auth middleware: Not yet implemented' })
}

/*
function _errorMessage(res) {
  return res.status(401).json({ msg: 'Token is not valid' })
}

function authMiddleware(req, res, next) {
  const authString = req.headers.authorization
  if (!authString) {
    return res.status(401).json({ msg: 'No token, authorization denied' })
  }

  if (!authString.startsWith('Bearer')) return _errorMessage(res)
  const token = authString.split(' ')[1]

  if (!token) return _errorMessage(res)
  if (authString.startsWith('Bearer'))
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) return _errorMessage(res)

      user.get(decoded.email, (result) => {
        if (!result) return res.status(400).json({msg: "not found"})
        req.user = result
        next()
      })
    })
}
*/

export default authMiddleware;
