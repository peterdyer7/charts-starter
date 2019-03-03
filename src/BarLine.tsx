import React from 'react';
import { VictoryChart, VictoryBar, VictoryLine } from 'victory';

const data = [{ x: 1, y: 2 }, { x: 2, y: 4 }, { x: 3, y: 6 }];
export default function BarLine() {
  return (
    <>
      <h3>Bar and Line Chart</h3>
      <VictoryChart domain={{ x: [0, 4] }}>
        <VictoryBar style={{ data: { fill: 'red' } }} data={data} />
        <VictoryLine
          style={{ data: { stroke: 'blue', strokeWidth: 5 } }}
          y={(d) => d.x}
        />
      </VictoryChart>
    </>
  );
}
