import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import { Handler } from './type';
import notFoundMiddleware from './middleware/notFound';
import authMiddleware from "./middleware/auth";
import routes from './routes/map';


const DEFAULT_PORT = 3001
const app = express()

app.use(cors());
app.use(express.json())
app.use('/', express.static('front/dist'))

dotenv.config()

for (const { path, method, handler, auth } of routes) {
  let routeHandlers: Handler[];
  routeHandlers = auth ? [authMiddleware] : [];
  routeHandlers = [...routeHandlers, ...handler]
  app[method as keyof express.Application](path, ...routeHandlers)
}

const ip = process.env.IP;
const port = process.env.PORT || DEFAULT_PORT;

app.listen(port, () => {
  console.log(`Started:  ${ip}:${port}`)
});

app.use(notFoundMiddleware)
