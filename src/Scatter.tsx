import React from 'react';
import { VictoryChart, VictoryScatter } from 'victory';

const data = [
  { x: 0, y: 2 },
  { x: 1, y: 4 },
  { x: 2, y: 6 },
  { x: 3, y: 8 },
  { x: 4, y: 10 }
];

export default function Scatter() {
  return (
    <>
      <h3>Scatter Chart</h3>
      <VictoryChart>
        <VictoryScatter
          style={{
            data: {
              fill: (d) => (d.x > 2 ? 'blue' : 'grey'),
              stroke: (d) => (d.y < 6 ? 'red' : 'black'),
              strokeWidth: 2
            }
          }}
          symbol={(d) => (d.x > 1 ? 'plus' : 'square')}
          size={(d) => d.y + 2}
          data={data}
        />
      </VictoryChart>
    </>
  );
}
