import { Handler } from '../type'

const suite: Handler = (_, res) => {
    return res.status(200).json({ msg: 'OK' });
}

export default suite;
