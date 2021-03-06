import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    padding: theme.spacing(3),
    //background: theme.background,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    minWidth: 200,
    padding: theme.spacing(3),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    textAlign: 'left',
    borderRadius: theme.spacing(1),

    '&:hover': {
      cursor: 'pointer',
      boxShadow: theme.boxShadow,
    },
  },
});

class TopChart extends React.Component {
  render() {
    const { tickers, classes } = this.props;
    if (!tickers || !tickers.length) return null;
    console.log(tickers);
    return (
      <div className={classes.root}>
        {tickers.map(([key, ticker]) => (
          <Paper className={classes.paper} key={key}>
            <Link
              to={{
                pathname: `/order/${key}`,
                state: {
                  id: key,
                  min_price: ticker.min_price,
                  max_price: ticker.max_price,
                  fluctate_rate_24H: ticker.fluctate_rate_24H,
                  acc_trade_value_24H: ticker.acc_trade_value_24H,
                },
              }}
              style={{ textDecoration: 'none' }}
            >
            <Typography color="primary" noWrap>
              {key}
            </Typography>
            <Typography color="secondary" variant="h6">
              {parseInt(ticker.max_price).toLocaleString()} 원
            </Typography>
            <Typography color="secondary">
              {ticker.fluctate_rate_24H > 0
                ? '+' + ticker.fluctate_rate_24H
                : ticker.fluctate_rate_24H}{' '}
              %
            </Typography>
            </Link>
          </Paper>
        ))}
      </div>
    );
  }
}

TopChart.propTypes = {
  tickers: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopChart);
