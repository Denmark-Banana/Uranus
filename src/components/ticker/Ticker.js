import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import InputIcon from '@material-ui/icons/Input';
import MoneyIcon from '@material-ui/icons/Money';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

import { Link } from 'react-router-dom';

function Ticker({
  id,
  min_price,
  max_price,
  fluctate_rate_24H,
  acc_trade_value_24H,
}) {
  return (
    <TableRow>
      <TableCell>
        <Link
          to={{
            pathname: `/order/${id}`,
            state: {
              id,
              min_price,
              max_price,
              fluctate_rate_24H,
              acc_trade_value_24H,
            },
          }}
        >
          {id}
        </Link>
      </TableCell>
      <TableCell>{min_price} 원</TableCell>
      <TableCell>{max_price} 원</TableCell>
      <TableCell>
        {fluctate_rate_24H > 0 ? '+' + fluctate_rate_24H : fluctate_rate_24H}%
      </TableCell>
      <TableCell>{parseInt(acc_trade_value_24H)} 원</TableCell>
      <TableCell>
        <InputIcon />
      </TableCell>
      <TableCell>
        <MoneyIcon />
      </TableCell>
      <TableCell>
        <TrendingUpIcon />
      </TableCell>
      <TableCell>
        <TransferWithinAStationIcon />
      </TableCell>
    </TableRow>
  );
}

Ticker.defaultProps = {
  min_price: '0',
  max_price: '0',
  fluctate_rate_24H: '0',
  acc_trade_value_24H: '0',
};

Ticker.propTypes = {
  id: PropTypes.string.isRequired,
  min_price: PropTypes.string.isRequired,
  max_price: PropTypes.string.isRequired,
  fluctate_rate_24H: PropTypes.string.isRequired,
  acc_trade_value_24H: PropTypes.string.isRequired,
};

export default Ticker;
