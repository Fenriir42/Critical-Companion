import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import validator from 'validator';
import User from '../User/UserQuerry';
import { Request, response, Response } from 'express';
import { Handler } from '../../type';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

function get_from_token(req: Request, res: Response) {
  const token = (req.body['token'] || req.headers['authorization']).split(' ')[1]

  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' })

  jwt.verify(token, process.env.SECRET as jwt.Secret, (err: any, decoded: any) => {
    if (err) return res.status(401).json({ msg: 'Token is not valid' })
    User.Get(decoded?.mail, (user) => {
      if (!user) return res.status(404).json({ msg: 'Not Found' })
      else {
        return res.status(200).json(user)
      }
    })
  })
}

const handle_registration: Handler = (req, res) => {
  const mail = req.body['mail']
  const password = req.body['password']

  if (!mail || !validator.isEmail(mail) || !password) {
    return res.status(400).json({ msg: 'Bad parameter' })
  }

  User.Exists(mail, (exists, err) => {
    if (exists.length > 0) {
      return res.status(400).json({ msg: 'account already exists' })
    }
    if (err) return res.status(500).json({ msg: 'Internal Server Error' })

    if (!EMAIL_REGEX.test(mail)) {
      return res.status(400).json({ msg: 'Bad parameter' })
    }
    return User.Create([mail, bcrypt.hashSync(password, 10)], (result, err) => {
      if (err) return res.status(500).json({ msg: 'Internal Server Error' })
      return res.status(200).json({
        token: jwt.sign({ id: result.insertId, mail }, process.env.SECRET as jwt.Secret)
      })
    })
  })
}

const handle_login: Handler = (req, res) => {
  const Fields = {
    mail: req.body['mail'],
    password: req.body['password'],
  }

  if (!Fields.mail || !Fields.password) {
    return res.status(400).json({ msg: 'Bad parameter' })
  }

  User.GetHash(Fields.mail, (hash) => {
    if (!hash || !bcrypt.compareSync(Fields.password, hash[0].password)) {
      return res.status(401).json({ msg: 'Invalid Credentials' })
    }
    User.Get(Fields.mail, (user) => {
      if (!user) return res.status(404).json({ msg: 'Not Found' })
      return res.status(200).json({
        token: jwt.sign({ id: user.id, mail : Fields.mail }, process.env.SECRET as jwt.Secret)
      })
    })

  })
}

export default {
  get: get_from_token,
  register: handle_registration,
  login: handle_login
}
