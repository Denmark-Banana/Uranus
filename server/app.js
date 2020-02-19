import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import apiRouter from './routes/apiRouter';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api', apiRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
    },
  });
  next();
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

export default app;
