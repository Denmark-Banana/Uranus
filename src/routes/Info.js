import React from 'react';
import { getData } from '../util/Axios';
import Balance from '../components/info/Balance';

class Info extends React.Component {
  state = {
    info: {},
  };
  
  componentDidMount = async () => {
    const info = await getData('/api/info/balance');
    this.setState({ info });
  };

  render() {
    const { info } = this.state;
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
      </section>
    )
  }
}

export default Info;
