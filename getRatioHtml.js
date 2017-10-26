import React from 'react';
import { renderToString } from 'react-dom/server';

module.exports = function () {
  return renderToString(
    <div>
      This is react
    </div>
  );
}