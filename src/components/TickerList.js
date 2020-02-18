import React from 'react';
import Ticker from './Ticker';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function TickerList({ tickers }) {
  if (!tickers) {
    return null;
  }
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>암호화폐명</TableCell>
          <TableCell>최저가</TableCell>
          <TableCell>최고가</TableCell>
          <TableCell>최근 24시간 거래량</TableCell>
          <TableCell>최근 24시간 거래금액</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tickers.map(([key, ticker]) => (
          <Ticker
            key={key}
            id={key}
            min_price={ticker.min_price}
            max_price={ticker.max_price}
            units_traded_24H={ticker.units_traded}
            acc_trade_value_24H={ticker.acc_trade_value_24H}
          />
        ))}
      </TableBody>
    </Table>
  );
}

TickerList.propTypes = {
  tickers: PropTypes.array.isRequired,
};

export default TickerList;
