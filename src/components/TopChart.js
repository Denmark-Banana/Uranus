import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    padding: theme.spacing(3),
    //background: '#eeeeee',
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    //color: theme.palette.text.primary,
    color: theme.palette.common.red,
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
        <Grid container spacing={3}>
          {tickers.map(([key, ticker]) => (
            <Grid item xs={2} key={key}>
              <Paper className={classes.paper}>
                {key}
                <br></br> {ticker.max_price} 원
                <br></br> {ticker.fluctate_rate_24H} %
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

TopChart.propTypes = {
  tickers: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopChart);
