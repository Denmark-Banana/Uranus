import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    padding: theme.spacing(3),
    //background: '#eeeeee',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.primary,
    marginLeft: 15,
    marginRight: 15,
    minWidth: 200,
    "&:hover": {
      cursor: 'pointer',
      boxShadow: '0 2px 3px 1px gray'
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
            {key}
            <br></br> {ticker.max_price} 원<br></br> {ticker.fluctate_rate_24H}{' '}
            %
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
