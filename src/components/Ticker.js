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

Ticker.propTypes ={
  id: PropTypes.string.isRequired,
};

export default Ticker;
