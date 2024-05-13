import { Handler } from '../type';

const notYetImplemented: Handler = (_, res) => {
    return res.status(501).json({ msg: 'Not yet implemented' })
}

export default notYetImplemented;
