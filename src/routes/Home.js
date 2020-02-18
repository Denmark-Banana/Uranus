import React from 'react';
import axios from 'axios';
import TickerList from '../components/TickerList';
import Balance from '../components/Balance';

class Home extends React.Component {
  state = {
    tickers: [],
    info: {},
  };
  getTickers = async () => {
    try {
      const {
        data: { data },
      } = await axios.get('/api/ticker');
      this.setState({ tickers: Object.entries(data) });
      console.log(this.state.tickers);
    } catch (e) {
      if (e.response) {
        //요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답
        console.log(e.response);
      } else if (e.request) {
        //요청이 이루어졌으나 응답을 받지 못함
        console.log(e.request);
      } else {
        //오류를 발생시킨 요청을 설정하는 중에 문제가 발생
        console.log('Error', e.message);
      }
      console.log(e.config);
    }
  };
  getBalance = async () => {
    try {
      const {
        data: { data },
      } = await axios.get('/api/info/balance');
      this.setState({ info: data });
      console.log(this.state.info);
    } catch (e) {
      if (e.response) {
        //요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답
        console.log(e.response);
      } else if (e.request) {
        //요청이 이루어졌으나 응답을 받지 못함
        console.log(e.request);
      } else {
        //오류를 발생시킨 요청을 설정하는 중에 문제가 발생
        console.log('Error', e.message);
      }
      console.log(e.config);
    }
  };
  componentDidMount() {
    this.getTickers();
    this.getBalance();
  }
  render() {
    const { tickers, info } = this.state;
    return (
      <section>
        <div>
          {
            <Balance
              total_krw={info.total_krw}
              total_btc={info.total_btc}
              available_krw={info.available_krw}
              available_btc={info.available_btc}
              xcoin_last_btc={info.xcoin_last_btc}
            />
          }
        </div>
        <div>{<TickerList tickers={tickers} />}</div>
      </section>
    );
  }
}

export default Home;
