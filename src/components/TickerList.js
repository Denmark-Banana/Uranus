import React from 'react';
import Ticker from './Ticker';
import PropTypes from "prop-types"

function TickerList({ tickers }) {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <p>암호화폐명</p>
          </td>
          <td>
            <p>최저가</p>
          </td>
          <td>
            <p>최고가</p>
          </td>
          <td>
            <p>최근 24시간 거래량</p>
          </td>
          <td>
            <p>최근 24시간 거래금액</p>
          </td>
        </tr>
        {tickers.map(ticker => (
          <Ticker
            key={ticker[0]}
            id={ticker[0]}
            min_price={ticker[1]["min_price"]}
            max_price={ticker[1].max_price}
            units_traded_24H={ticker[1].units_traded}
            acc_trade_value_24H={ticker[1].acc_trade_value_24H}
          />
        ))}
      </tbody>
    </table>
  );
}

TickerList.propTypes ={
  tickers: PropTypes.array.isRequired
};

export default TickerList;
