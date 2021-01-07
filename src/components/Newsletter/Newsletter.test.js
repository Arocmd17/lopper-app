import React from 'react';
import ReactDOM from 'react-dom';
import Newsletter from './Newsletter';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Newsletter />, div);
  ReactDOM.unmountComponentAtNode(div);
});