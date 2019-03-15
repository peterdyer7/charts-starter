import React from 'react';
import { VictoryChart, VictoryLine } from 'victory';
import _ from 'lodash';

interface Props {
  data: Array<{
    x: Date;
    y: number;
  }>;
}

export default function BasicTimeseries({ data }: Props) {
  return (
    <>
      <h3>Basic Timeseries</h3>
      <div
        style={{
          backgroundColor: '#fff',
          height: '100%',
          minHeight: '140px',
          width: '80%',
          margin: '3em auto',
          overflowX: 'auto'
        }}
      >
        <VictoryChart
          height={200}
          padding={{ top: 20, bottom: 40, left: 40, right: 40 }}
          scale={{ x: 'time' }}
        >
          <VictoryLine style={{ data: { stroke: 'tomato' } }} data={data} />
        </VictoryChart>
      </div>
    </>
  );
}
