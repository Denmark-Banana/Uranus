import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

import Ticker from './Ticker';

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

const columns = [
  { id: 'coinName', label: '암호화폐명' },
  { id: 'minPrice', label: '최저가' },
  { id: 'maxPrice', label: '최고가' },
  { id: 'fluctate_Rate_24H', label: '변동률(24H)' },
  { id: 'acc_trade_Value_24H', label: '거래금액(24H)' },
  { id: 'deposit', label: '입금' },
  { id: 'withdraw', label: '출금' },
  { id: 'chart', label: '차트' },
  { id: 'deal', label: '거래' },
];

class TickerList extends React.Component {
  render() {
    const { tickers, classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.id} align={column.align}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tickers?.map(([key, ticker]) => (
              <Ticker
                key={key}
                id={key}
                min_price={parseInt(ticker.min_price).toLocaleString()}
                max_price={parseInt(ticker.max_price).toLocaleString()}
                fluctate_rate_24H={ticker.fluctate_rate_24H}
                acc_trade_value_24H={parseInt(ticker.acc_trade_value_24H).toLocaleString()}
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
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TickerList);
