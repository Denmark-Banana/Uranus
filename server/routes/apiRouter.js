import express from 'express';
import { getTickers, getBalance } from '../controllers/apiController';

const apiRouter = express.Router();

apiRouter.get('/ticker', getTickers);
apiRouter.get('/info/balance', getBalance);

export default apiRouter;