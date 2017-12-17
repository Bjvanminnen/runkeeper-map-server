import React, { Component } from 'react';

const formattedNumber = num => num.toLocaleString('en-us', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

export default class Ratio extends Component {
  render() {
    const { days, miles } = this.props;
    return (
      <div>
        <div>
          Days: {days}
        </div>
        <div>
          Current: {miles}
        </div>
        <div>
          Target: {days * 1.5}
        </div>
        <div>
          Delta: {formattedNumber(miles - days * 1.5)}
        </div>
        <div>
          Year Delta: {formattedNumber(365 * 1.5 - miles)}
        </div>
        <div>
          Current Ratio: {formattedNumber(miles / days)}
        </div>
      </div>
    );
  }
}