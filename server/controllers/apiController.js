import axios from 'axios';
import dotenv from 'dotenv';
import { Bithumb } from 'bithumb';

dotenv.config();

export const getTickers = async (req, res) => {
  try {
    const {
      data: { data },
    } = await axios.get('https://api.bithumb.com/public/ticker/ALL_KRW');
    res.json({ data });
  } catch (e) {
    console.log(e);
  }
};

export const getBalance = async (req, res) => {
  try {
    Bithumb.setApiKey(process.env.API_KEY, process.env.SECRET_KEY);
    const data = await Bithumb.getMyBalance('BTC');

    res.json(data[2]);
  } catch (e) {
    console.log(e);
  }
};
