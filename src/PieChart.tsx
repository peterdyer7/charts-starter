import React from 'react';
import { VictoryPie, VictoryLabel } from 'victory';

interface Props {
  percent: number;
  title: string;
}

export default function PieChart({ percent, title }: Props) {
  const data = [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
  return (
    <>
      <h3>Pie Chart</h3>
      <svg viewBox="0 0 400 400" width="100%" height="100%">
        <VictoryPie
          standalone={false}
          width={400}
          height={400}
          innerRadius={120}
          cornerRadius={25}
          labels={() => null}
          data={data}
          style={{
            data: {
              fill: (d) => {
                const color = d.y > 50 ? 'green' : 'red';
                return d.x === 1 ? color : 'transparent';
              }
            }
          }}
        />
        <VictoryLabel
          textAnchor="middle"
          verticalAnchor="middle"
          x={200}
          y={200}
          text={percent}
          style={{ fontSize: 100 }}
        />
        <VictoryLabel
          textAnchor="start"
          verticalAnchor="start"
          x={0}
          y={0}
          text={title}
          style={{ fontSize: 45 }}
        />
      </svg>
    </>
  );
}
