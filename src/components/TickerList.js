import React from 'react';
import Ticker from './Ticker';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import { Component } from 'react';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 1080,
  },
});

class TickerList extends Component {
  render() {
    const { tickers, classes } = this.props;
    if (!tickers) {
      return null;
    }
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
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
      </Paper>
    );
  }
}

TickerList.propTypes = {
  tickers: PropTypes.array.isRequired,
};

export default withStyles(styles)(TickerList);
