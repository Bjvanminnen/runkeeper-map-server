import React, { Component } from 'react';

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
          Delta: {miles - days * 1.5}
        </div>
        <div>
          Current Ratio: {(miles / days).toLocaleString()}
        </div>
      </div>
    );
  }
}