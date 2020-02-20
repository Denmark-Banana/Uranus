import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Balance extends Component {
  render() {
    const {
      total_krw,
      total_btc,
      available_krw,
      available_btc,
    } = this.props;

    return (
      <div>
        <h5>전체 원화(KRW) 금액: {parseInt(total_krw)} 원</h5>
        <h5>전체 BTC 수량: {parseInt(total_btc)} 개</h5>
        <h5>주문 가능 원화(KRW) 금액: {parseInt(available_krw)} 원</h5>
        <h5>주문 가능 BTC 수량: {parseInt(available_btc)} 개</h5>
      </div>
    );
  }
}

Balance.defaultProps = {
  total_krw: '0',
  total_btc: '0',
  available_krw: '0',
  available_btc: '0',
};

Balance.propTypes = {
  total_krw: PropTypes.string.isRequired,
  total_btc: PropTypes.string.isRequired,
  available_krw: PropTypes.string.isRequired,
  available_btc: PropTypes.string.isRequired,
};

export default Balance;
