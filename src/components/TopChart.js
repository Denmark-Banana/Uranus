import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

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
    textAlign: 'center',

    '&:hover': {
      cursor: 'pointer',
      boxShadow: theme.boxShadow,
    },
  },
});

class TopChart extends Component {
  render() {
    const { tickers, classes } = this.props;
    console.log(tickers);
    if (!tickers) {
      return null;
    }
    return (
      <div className={classes.root}>
        {tickers.map(([key, ticker]) => (
          <Paper className={classes.paper} key={key}>
            <Typography color='primary' noWrap>
              {key}
              <br></br> {ticker.max_price} 원<br></br>{' '}
              {ticker.fluctate_rate_24H} %
            </Typography>
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
