import React from 'react';
import PropTypes from 'prop-types';

class Order extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (!location.state) {
      history.push('/');
    }
  }
  render() {
    const { location } = this.props;
    console.log(location);
    console.log(history);
    if (location.state) {
      return <section>{location.state.id}</section>;
    } else {
      return null;
    }
  }
}

Order.propTypes = {
  location: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
};

export default Order;
