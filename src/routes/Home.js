import React from 'react';

import TickerList from '../components/ticker/TickerList';
import Balance from '../components/info/Balance';
import { getData } from '../util/Axios';

class Home extends React.Component {
  state = {
    tickers: [],
    info: {},
  };

  componentDidMount = async () => {
    const tickers = await getData('/api/ticker');
    const info = await getData('/api/info/balance');

    this.setState({ tickers : Object.entries(tickers), info });
  };
  render() {
    const { tickers, info } = this.state;
    return (
      <section>
        {info ? (
          <Balance
            total_krw={info.total_krw}
            total_btc={info.total_btc}
            available_krw={info.available_krw}
            available_btc={info.available_btc}
          />
        ) : null}
        {tickers ? <TickerList tickers={tickers} /> : null}
      </section>
    );
  }
}

export default Home;
