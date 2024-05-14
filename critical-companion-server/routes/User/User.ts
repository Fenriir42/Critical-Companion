import { hashSync } from "bcryptjs";

import User from './UserQuerry';
import { Handler } from "../../type";

const handle_user_list: Handler = (req, res) => {
  return User.List(null, (user) => {
    if (!user) return res.status(404).json({ msg: 'Not Found' })
    else return res.status(200).json(user)
  })
}

const handle_user_read: Handler = (req, res) => {
  const id = req.params.id

  if (!id) {
    return res.status(400).json({ msg: 'Bad parameter' })
  }

  return User.Get(id, (user) => {
    if (!user) return res.status(404).json({ msg: 'Not Found' })
    else return res.status(200).json(user)
  })
}

const handle_user_delete: Handler = (req, res) => {
  User.Delete(req.params.id, (id) => {
    if (!id) return res.status(404).json({ msg: 'Not Found' })
    res.status(200).json({msg: "Successfully deleted the selected user"})
  })
}

const handle_user_update: Handler = (req, res) => {
  const fields = {
    mail: req.body['mail'],
    password: hashSync(req.body['password'], 10),
  }
  if (!fields.password || !fields.mail) {
    return res.status(400).json({ msg: 'Bad parameter' })
  }

  User.Update(req.params.id, Array.from(Object.values(fields)), (id) => {
    if (!id) return res.status(404).json({ msg: 'Not Found' })
    User.Get(req.params.id, (user) => {
      if (!user) return res.status(404).json({ msg: 'Not Found' })
      else return res.status(200).json(user)
    })
  })
}

export default {
  List: handle_user_list,
  Read: handle_user_read,
  Delete: handle_user_delete,
  Update: handle_user_update,
}
