import React from 'react';
import { getData } from '../util/Axios';
import PropTypes from 'prop-types';
import axios from 'axios';

class Order extends React.Component {
  componentDidMount = async () => {
    const { location, history } = this.props;
    console.log(history);
    if (!location.state) {
      history.push('/');
    }
    const data = await getData(`/api/order/${location.state.id}`);
  };
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <section>
          <h4>{location.state.id}</h4>
          <h4>{location.state.max_price}</h4>
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
