import React from 'react';
import { VictoryChart, VictoryArea } from 'victory';

const data = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 7 },
  { x: 4, y: 4 },
  { x: 5, y: 5 }
];

export default function AreaGradient() {
  return (
    <>
      <h3>Area Chart with Gradient</h3>
      <div>
        <svg style={{ height: 0 }}>
          <defs>
            <linearGradient id="myGradient">
              <stop offset="0%" stopColor="red" />
              <stop offset="25%" stopColor="orange" />
              <stop offset="50%" stopColor="gold" />
              <stop offset="75%" stopColor="yellow" />
              <stop offset="100%" stopColor="green" />
            </linearGradient>
          </defs>
        </svg>
        <VictoryChart>
          <VictoryArea
            style={{
              data: {
                fill: 'url(#myGradient)'
              }
            }}
            data={data}
          />
        </VictoryChart>
      </div>
    </>
  );
}
