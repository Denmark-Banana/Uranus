import React from 'react';
import PropTypes from 'prop-types';

function Balance({
  total_krw,
  total_btc,
  available_krw,
  available_btc,
  xcoin_last_btc,
}) {
  return (
    <div>
      <h3>total_krw: {total_krw}</h3>
      <h3>total_btc: {total_btc}</h3>
      <h3>available_krw: {available_krw}</h3>
      <h3>available_btc: {available_btc}</h3>
      <h3>xcoin_last_btc: {xcoin_last_btc}</h3>
    </div>
  );
}

Balance.defaultProps = {
  total_krw: '0',
  total_btc: '0',
  available_krw: '0',
  available_btc: '0',
  xcoin_last_btc: '0',
};

Balance.propTypes = {
  total_krw: PropTypes.string.isRequired,
  total_btc: PropTypes.string.isRequired,
  available_krw: PropTypes.string.isRequired,
  available_btc: PropTypes.string.isRequired,
  xcoin_last_btc: PropTypes.string.isRequired,
};

export default Balance;
