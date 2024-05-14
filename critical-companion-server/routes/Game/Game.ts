import { Handler } from '../../type';
import GameQuerry from './GameQuerry';

const List: Handler = (req, res) => {
    return GameQuerry.List(null, (game) => {
        if (!game) return res.status(404).json({ msg: 'Not Found' })
        else return res.status(200).json(game)
    })
}

const ListUser: Handler = (req, res) => {
    return GameQuerry.List(req.user?.id, (game) => {
        if (!game) return res.status(404).json({ msg: 'Not Found' })
        else return res.status(200).json(game)
    })
}

const Read: Handler = (req, res) => {
    const id = req.params.id

    if (!id) {
        return res.status(400).json({ msg: 'Bad parameter' })
    }

    return GameQuerry.Get(id, (game) => {
        if (!game) return res.status(404).json({ msg: 'Not Found' })
        else return res.status(200).json(game)
    })
}

const Delete: Handler = (req, res) => {
    GameQuerry.Delete(req.params.id, (id) => {
        if (!id) return res.status(404).json({ msg: 'Not Found' })
        res.status(200).json({msg: "Successfully deleted the selected game"})
    })
}

const Update: Handler = (req, res) => {
    const fields = {
        name: req.body['name'],
    }
    if (!fields.name) {
        return res.status(400).json({ msg: 'Bad parameter' })
    }

    GameQuerry.Update(req.params.id, Array.from(Object.values(fields)), (id) => {
        if (!id) return res.status(404).json({ msg: 'Not Found' })
        GameQuerry.Get(req.params.id, (game) => {
            if (!game) return res.status(404).json({ msg: 'Not Found' })
            else return res.status(200).json(game)
        })
    })
}

const Create: Handler = (req, res) => {
    const fields = {
        name: req.body['name'],
        user_id: req.user?.id
    }
    if (!fields.name) {
        return res.status(400).json({ msg: 'Bad parameter' })
    }

    GameQuerry.Create(Array.from(Object.values(fields)), (result) => {
        if (!result) return res.status(404).json({ msg: 'Not Found' })
        GameQuerry.Get(result.insertId, (game) => {
            if (!game) return res.status(404).json({ msg: 'Not Found' })
            else return res.status(200).json(game[0])
        })
    })
}

export default {
    List,
    Read,
    Delete,
    Update,
    Create,
    ListUser
}
