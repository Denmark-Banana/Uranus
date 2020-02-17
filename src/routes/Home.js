import React from 'react';
import axios from 'axios';
import TickerList from '../components/TickerList';

class Home extends React.Component {
  state = {
    tickers: [],
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
    //this.setState({ tickers: Object.entries(data) });
    console.log(data);
  }
  componentDidMount() {
    this.getTickers();
    this.getBalance();
  }
  render() {
    const { tickers } = this.state;
    return (
      <section>
        <div>{<TickerList tickers={tickers} />}</div>
      </section>
    );
  }
}

export default Home;
