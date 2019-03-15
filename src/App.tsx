import React from 'react';
import StackedBar from './StackedBar';
import BarLine from './BarLine';
import BarDataStyle from './BarDataStyle';
import Scatter from './Scatter';
import AreaGradient from './AreaGradient';
import LineLabels from './LineLabels';
import BrushAndZoom from './BrushAndZoom';
import BasicTimeseries from './BasicTimeseries';
import { number } from 'prop-types';

export default function App() {
  const data = [
    { a: new Date('2019-03-15T13:38:07.367Z'), b: 125, c: 3 },
    { a: new Date('2019-03-15T11:38:10.700Z'), b: 345, c: 1 },
    { a: new Date('2019-03-15T12:38:10.664Z'), b: 257, c: 2 }
  ];

  function prepData<
    T,
    K1 extends Extract<keyof T, string>,
    K2 extends Extract<keyof T, string>
  >(obj: Array<T>, xLabel: K1, yLabel: K2): Array<{ x: T[K1]; y: T[K2] }> {
    const tempData = obj.map((item) => ({ x: item[xLabel], y: item[yLabel] }));
    tempData.sort(function(a, b) {
      const c = a.x;
      const d = b.x;
      return c > d ? 1 : -1;
    });
    console.log(tempData);
    return tempData;
  }

  return (
    <>
      <h2>App</h2>
      <BasicTimeseries data={prepData(data, 'a', 'b')} />
      <StackedBar />
      <BarLine />
      <BarDataStyle />
      <Scatter />
      <AreaGradient />
      <LineLabels />
      <BrushAndZoom />
    </>
  );
}
