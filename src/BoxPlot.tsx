import React from 'react';
import {
  VictoryChart,
  VictoryAxis,
  VictoryBoxPlot,
  VictoryTheme
} from 'victory';
import _ from 'lodash';

const rawData = [
  {
    id: '190316_WV_7229193c6bc2fc36da296d33f6a14828',
    url: 'https://www.fullsapps.com',
    location: 'ec2-eu-west-1:Chrome',
    connectivity: 'Native',
    completed: 1552779490,
    TTFB: 323
  },
  {
    id: '190314_ZK_c6de72257204fc1bc487eeabc06b6354',
    url: 'https://www.fullsapps.com',
    location: 'ec2-us-west-1:Chrome',
    connectivity: 'Native',
    completed: 1552595890,
    TTFB: 359
  },
  {
    id: '190317_K3_e9923535808e8d980d9e9f77883093f4',
    url: 'https://www.fullsapps.com',
    location: 'ec2-eu-west-1:Chrome',
    connectivity: 'Native',
    completed: 1552866432,
    TTFB: 303
  },
  {
    id: '190319_3R_314867618d750eac656f00871a630c25',
    url: 'https://www.fullsapps.com',
    location: 'ec2-eu-west-1:Chrome',
    connectivity: 'Native',
    completed: 1553024289,
    TTFB: 376
  },
  {
    id: '190315_7G_420fd541f6180d29264f80af1c8b9998',
    url: 'https://www.fullsapps.com',
    location: 'ec2-us-west-1:Chrome',
    connectivity: 'Native',
    completed: 1552628289,
    TTFB: 357
  },
  {
    id: '190318_A6_72f0ac30c39b804c302732f39e445f6c',
    url: 'https://www.fullsapps.com',
    location: 'ec2-us-west-1:Chrome',
    connectivity: 'Native',
    completed: 1552945088,
    TTFB: 263
  },
  {
    id: '190315_6J_ad0d9f4156f823570a85893b01f65eeb',
    url: 'https://www.fullsapps.com',
    location: 'ec2-us-west-1:Chrome',
    connectivity: 'Native',
    completed: 1552631888,
    TTFB: 280
  },
  {
    id: '190316_09_02c24cfaf767267444fecda242814f2e',
    url: 'https://www.fullsapps.com',
    location: 'ec2-eu-west-1:Chrome',
    connectivity: 'Native',
    completed: 1552747089,
    TTFB: 296
  }
];

const url = 'https://www.fullsapps.com';
const location = ['ec2-eu-west-1', 'ec2-us-west-1', 'something'];
interface BoxPlotData {
  x: string;
  y: number[];
}
let preppedData: BoxPlotData[] = [];
location.forEach((loc) => {
  const filteredData = _.filter(rawData, (datapoint) => {
    return String(datapoint.location).split(':')[0] === loc;
  });

  if (filteredData.length !== 0) {
    const dataArray = filteredData.map((i) => i.TTFB);
    const preppedDataPoint = {
      x: loc,
      y: dataArray
    };
    preppedData.push(preppedDataPoint);
  }
});

export default function BarLine() {
  return (
    <>
      <h3>BoxPlot Chart</h3>
      <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
        <VictoryAxis style={{ tickLabels: { padding: 10, angle: -45 } }} />
        <VictoryAxis dependentAxis />
        <VictoryBoxPlot boxWidth={20} data={preppedData} />
      </VictoryChart>
    </>
  );
}
