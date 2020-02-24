import axios from 'axios';
import dotenv from 'dotenv';
import { Bithumb } from 'bithumb';

dotenv.config();

export const getTickers = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const {
      data: { data },
    } = await axios.get(`https://api.bithumb.com/public/ticker/${id}_KRW`);
    //throw "getTickers Error";
    res.json({ data });
  } catch (e) {
    next(new Error(e));
  }
};

export const getBalance = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    Bithumb.setApiKey(process.env.API_KEY, process.env.SECRET_KEY);
    const data = await Bithumb.getMyBalance(id);
    //throw "getBalance Error";
    res.json(data[2]);
  } catch (e) {
    next(new Error(e));
  }
};

export const getCandleStick = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const { data } = await axios.get(
      `https://api.bithumb.com/public/candlestick/${id}_KRW/24h`,
    );
    res.json(data);
  } catch (e) {
    next(new Error(e));
  }
};
