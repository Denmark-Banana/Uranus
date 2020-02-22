import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, CardMedia } from '@material-ui/core';
import Image from '../../public/img/graph.png';

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
    //backgroundImage: `url(${Image})`,

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
    return (
      <div className={classes.root}>
        {tickers
          ? tickers.map(([key, ticker]) => (
              <Paper className={classes.paper} key={key}>
                <Typography color="primary" noWrap>
                  {key}
                </Typography>
                <Typography color="secondary" variant="h6">
                  {ticker.max_price} 원
                </Typography>
                <Typography color="secondary">
                  {ticker.fluctate_rate_24H} %
                </Typography>
              </Paper>
            ))
          : null}
      </div>
    );
  }
}

TopChart.propTypes = {
  tickers: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopChart);
