import React from 'react';
import PropTypes from 'prop-types';
import { AreaChart, Area } from 'recharts';

class TickerChart extends React.Component {
  render() {
    const { chartData } = this.props;
    return (
      <AreaChart
        width={200}
        height={60}
        data={chartData}
        margin={{
          top: 10,
          right: 10,
          left: 10,
          bottom: 10,
        }}
      >
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    );
  }
}

TickerChart.propTypes = {
  chartData: PropTypes.array.isRequired,
};

export default TickerChart;
