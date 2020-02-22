import React from 'react';

import TickerList from '../components/ticker/TickerList';
import TopChart from '../components/ticker/TopChart';

import { getData } from '../util/Axios';

class Home extends React.Component {
  state = {
    tickers: [],
  };

  componentDidMount = async () => {
    const tickers = await getData('/api/ticker');
    this.setState({ tickers: Object.entries(tickers) });
  };
  render() {
    const { tickers } = this.state;
    return (
      <section>
        <TopChart tickers={tickers.slice(0, 5)} />
        <TickerList tickers={tickers} />
      </section>
    );
  }
}

export default Home;
