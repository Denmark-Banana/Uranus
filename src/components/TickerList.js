import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import { Component } from 'react';

import Ticker from './Ticker';
import TopChart from './TopChart';

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
    return (
      <Paper className={classes.root}>
        <TopChart tickers={tickers.slice(0,5)} />
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>암호화폐명</TableCell>
              <TableCell>최저가</TableCell>
              <TableCell>최고가</TableCell>
              <TableCell>변동률(24H)</TableCell>
              <TableCell>거래금액(24H)</TableCell>
              <TableCell>입금</TableCell>
              <TableCell>출금</TableCell>
              <TableCell>차트</TableCell>
              <TableCell>거래</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tickers
              ? tickers.map(([key, ticker]) => (
                  <Ticker
                    key={key}
                    id={key}
                    min_price={ticker.min_price}
                    max_price={ticker.max_price}
                    fluctate_rate_24H={ticker.fluctate_rate_24H}
                    acc_trade_value_24H={ticker.acc_trade_value_24H}
                  />
                ))
              : null}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

TickerList.propTypes = {
  tickers: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TickerList);
