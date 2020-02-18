import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function Ticker({
  id,
  min_price,
  max_price,
  units_traded_24H,
  acc_trade_value_24H,
}) {
  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>{min_price}</TableCell>
      <TableCell>{max_price}</TableCell>
      <TableCell>{units_traded_24H}</TableCell>
      <TableCell>{acc_trade_value_24H}</TableCell>
    </TableRow>
  );
}

Ticker.defaultProps = {
  min_price: '0',
  max_price: '0',
  units_traded_24H: '0',
  acc_trade_value_24H: '0',
};

Ticker.propTypes = {
  id: PropTypes.string.isRequired,
  min_price: PropTypes.string.isRequired,
  max_price: PropTypes.string.isRequired,
  units_traded_24H: PropTypes.string.isRequired,
  acc_trade_value_24H: PropTypes.string.isRequired,
};

export default Ticker;
