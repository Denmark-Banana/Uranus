import React from 'react';
import PropTypes from 'prop-types';

class Order extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    //console.log(location);
    console.log(history);
    if (!location.state) {
      history.push('/');
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return <section>
        <h4>{location.state.id}</h4>
        <h4>{location.state.max_price}</h4>
        </section>;
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
