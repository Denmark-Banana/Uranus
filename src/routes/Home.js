import React from 'react';
import axios from 'axios';
import TickerList from '../components/TickerList';
import Balance from '../components/Balance';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    background: theme.background,
    border: 0,
    borderRadius: 3,
    boxShadow: theme.boxShadow,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: '10px',
  },
});

class Home extends React.Component {
  state = {
    tickers: [],
    info: {},
  };
  errorHandler = e => {
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
  getTickers = async () => {
    try {
      const {
        data: { data },
      } = await axios.get('/api/ticker');
      this.setState({ tickers: Object.entries(data) });
      console.log(this.state.tickers);
    } catch (e) {
      this.errorHandler(e);
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
      this.errorHandler(e);
    }
  };
  componentDidMount() {
    this.getTickers();
    this.getBalance();
  }
  render() {
    const { tickers, info } = this.state;
    const { classes } = this.props;
    return (
      <section>
        {/* <div>
          <Button className={classes.root}>Button with Style</Button>
          <Button className={classes.root}>Button with Style</Button>
        </div> */}
        <Balance
          total_krw={info.total_krw}
          total_btc={info.total_btc}
          available_krw={info.available_krw}
          available_btc={info.available_btc}
        />
        <TickerList tickers={tickers} />
      </section>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
