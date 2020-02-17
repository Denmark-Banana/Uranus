import React from 'react';
import PropTypes from "prop-types"

function Ticker({
  id,
  min_price,
  max_price,
  units_traded_24H,
  acc_trade_value_24H,
}) {
  return (
    <tr>
      <td>
        <p>{id}</p>
      </td>
      <td>
        <p>{min_price}</p>
      </td>
      <td>
        <p>{max_price}</p>
      </td>
      <td>
        <p>{units_traded_24H}</p>
      </td>
      <td>
        <p>{acc_trade_value_24H}</p>
      </td>
    </tr>
  );
}

Ticker.defaultProps ={
  min_price: '0',
  max_price: '0',
  units_traded_24H: '0',
  acc_trade_value_24H: '0',
};

Ticker.propTypes ={
  id: PropTypes.string.isRequired,
  min_price: PropTypes.string.isRequired,
  max_price: PropTypes.string.isRequired,
  units_traded_24H: PropTypes.string.isRequired,
  acc_trade_value_24H: PropTypes.string.isRequired,
};

export default Ticker;
