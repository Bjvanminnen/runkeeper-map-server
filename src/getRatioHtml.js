import React from 'react';
import { renderToString } from 'react-dom/server';
import getRatioData from './getRatioData';
import Ratio from './Ratio';
import createPage from './createPage';

module.exports = function () {
  return getRatioData().then(data => {
    const contents = renderToString(
      <Ratio
        miles={parseFloat(data.miles)}
        days={parseFloat(data.days)}
      />
    );
    return createPage('Runkeeper Ratio', contents);
  });
}