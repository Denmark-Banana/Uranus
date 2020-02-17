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
    const {
      data: { data },
    } = await axios.get('/api/ticker');
    this.setState({ tickers: Object.entries(data) });
    console.log(this.state.tickers);
  };
  getBalance = async () => {
    const {
      data: { data },
    } = await axios.get('/api/info/balance');
    this.setState({ info: data });
    console.log(this.state.info);
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
