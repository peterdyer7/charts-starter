import React from 'react';
import StackedBar from './StackedBar';
import BarLine from './BarLine';
import BarDataStyle from './BarDataStyle';
import Scatter from './Scatter';

export default function App() {
  return (
    <>
      <h2>App</h2>
      <StackedBar />
      <BarLine />
      <BarDataStyle />
      <Scatter />
    </>
  );
}
