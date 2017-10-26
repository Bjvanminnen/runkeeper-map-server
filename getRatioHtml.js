import React from 'react';
import { renderToString } from 'react-dom/server';
import getRatioData from './getRatioData';
import Ratio from './Ratio';

module.exports = function () {
  return getRatioData().then(data =>
    renderToString(
      <Ratio
        miles={parseFloat(data.miles)}
        days={parseFloat(data.days)}
      />
    )
  );
}