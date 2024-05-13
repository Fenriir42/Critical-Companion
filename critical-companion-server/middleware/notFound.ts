import { Handler  } from '../type';

const notFoundMiddleware: Handler = (_, res) => {
    return res.status(404).json({ msg: 'Not Found' })
}

export default notFoundMiddleware;
