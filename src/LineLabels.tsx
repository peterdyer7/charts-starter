import React from 'react';
import {
  VictoryChart,
  VictoryLine,
  VictoryLabel,
  VictoryScatter
} from 'victory';

export default function LineLabels() {
  return (
    <>
      <h3>Line Chart with labels</h3>
      <VictoryChart domain={[0, 10]}>
        <VictoryLabel text="Chart Title" x={225} y={30} textAnchor="middle" />
        <VictoryLine
          style={{ data: { stroke: 'blue', strokeWidth: 5 } }}
          y={(d) => d.x}
        />
        <VictoryLine
          style={{
            data: { stroke: 'red', strokeWidth: 2 },
            labels: { angle: -90, fill: 'red', fontSize: 20 }
          }}
          labels={['Important!']}
          labelComponent={<VictoryLabel y={100} />}
          x={() => 5}
        />
        <VictoryScatter
          data={[{ x: 5, y: 5, fill: 'red', symbol: 'star', size: 6 }]}
          style={{
            data: {
              fill: (d) => d.fill
            }
          }}
        />
        <VictoryLabel
          text="Annotation"
          datum={{ x: 6, y: 4 }}
          textAnchor="middle"
        />
      </VictoryChart>
    </>
  );
}
