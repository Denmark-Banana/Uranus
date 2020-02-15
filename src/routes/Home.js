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
    } = await axios.get('https://api.bithumb.com/public/ticker/ALL_KRW');
    this.setState({ tickers: Object.entries(data) });
    console.log(this.state.tickers);
  };
  componentDidMount() {
    this.getTickers();
  }
  render() {
    const { tickers } = this.state;
    return (
      <section>
        <div>
          <TickerList tickers={tickers}/>
        </div>
      </section>
    );
  }
}

export default Home;
