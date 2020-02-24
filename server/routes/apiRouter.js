import express from 'express';
import { getTickers, getBalance, getCandleStick } from '../controllers/apiController';

const apiRouter = express.Router();

apiRouter.get('/ticker/:id', getTickers);
apiRouter.get('/info/balance/:id', getBalance);
apiRouter.get('/order/:id', getCandleStick);

export default apiRouter;