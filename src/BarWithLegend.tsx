import React from 'react';
import { VictoryChart, VictoryLegend, VictoryBar, VictoryLabel } from 'victory';

export default function BarWithLegend() {
  return (
    <VictoryChart domain={[0, 10]}>
      <VictoryLegend
        x={75}
        y={0}
        orientation="vertical"
        gutter={-40}
        rowGutter={2}
        // @ts-ignore
        style={{ title: { fontSize: 20 } }}
        labelComponent={<VictoryLabel style={{ fontSize: 5 }} />}
        data={[
          {
            name: 'One one one one one one one',
            symbol: { fill: 'tomato', type: 'star' }
          },
          {
            name: 'Two two two two two two two two',
            symbol: { fill: 'orange' }
          },
          {
            name: 'Three three three three three three three three',
            symbol: { fill: 'gold' }
          }
        ]}
      />
      <VictoryBar
        data={[
          { x: 2, y: 6, fill: 'tomator' },
          { x: 4, y: 4, fill: 'orange' },
          { x: 6, y: 2, fill: 'gold' },
          { x: 8, y: 4, fill: 'tomato' }
        ]}
      />
    </VictoryChart>
  );
}
