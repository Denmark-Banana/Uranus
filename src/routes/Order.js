import React from 'react';
import { getData } from '../util/Axios';
import PropTypes from 'prop-types';
import TickerChart from '../components/ticker/TickerChart';

class Order extends React.Component {
  state = {
    chartData: [],
  };
  translateData = (lastData, minValue) => {
    let transDataArr = [];
    lastData.map(data => {
      const transData = {
        name: new Date(data[0]).toLocaleDateString(),
        uv: parseInt(data[1]) - minValue,
      };
      transDataArr.push(transData);
    });
    return transDataArr;
  };
  componentDidMount = async () => {
    const { location, history } = this.props;
    if (!location.state) {
      history.push('/');
    }
    const termData = await getData(`/api/order/${location.state.id}`);
    try {
      const lastData = termData.slice(termData.length - 10);
      const minValue = lastData.reduce(function(prev, cur) {
        return parseInt(prev[1]) > parseInt(cur[1]) ? cur : prev;
      });
      this.setState({
        chartData: this.translateData(lastData, parseInt(minValue[1])),
      });
      console.log(this.state.chartData);
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    const { location } = this.props;
    const { chartData } = this.state;
    if (location.state) {
      return (
        <section>
          <h4>{location.state.id}</h4>
          <h4>{location.state.max_price}</h4>
          <TickerChart chartData={chartData} />
        </section>
      );
    } else {
      return null;
    }
  }
}

Order.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Order;
