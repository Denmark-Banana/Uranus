import axios from 'axios';
import dotenv from 'dotenv';
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
    const {
      data: { data },
    } = await axios.post('https://api.bithumb.com/info/balance', {
      apiKey: process.env.API_KEY,
      secretKey: process.env.SECRET_KEY,
    });
    console.log(data);
    res.json({ data });
  } catch (e) {
    console.log(e);
  }
};
