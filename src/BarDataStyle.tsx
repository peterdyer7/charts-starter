import React from 'react';
import { VictoryChart, VictoryBar } from 'victory';

export default function BarDataStyle() {
  return (
    <>
      <h3>Bar Chart with style in data</h3>
      <VictoryChart>
        <VictoryBar
          data={[
            { x: 1, y: 2, fill: 'red', width: 5 },
            { x: 2, y: 4, fill: 'orange', width: 10 },
            { x: 3, y: 6, fill: 'gold', width: 20 }
          ]}
          style={{
            data: {
              fill: (d) => d.fill,
              width: (d) => d.width
            }
          }}
        />
      </VictoryChart>
    </>
  );
}
