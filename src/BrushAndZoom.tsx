import React from 'react';
import {
  VictoryChart,
  VictoryZoomContainer,
  DomainPropType,
  VictoryLine,
  VictoryBrushContainer,
  VictoryAxis
} from 'victory';

const data = [
  { a: new Date(1982, 1, 1), b: 125 },
  { a: new Date(1987, 1, 1), b: 257 },
  { a: new Date(1993, 1, 1), b: 345 },
  { a: new Date(1997, 1, 1), b: 515 },
  { a: new Date(2001, 1, 1), b: 132 },
  { a: new Date(2005, 1, 1), b: 305 },
  { a: new Date(2011, 1, 1), b: 270 },
  { a: new Date(2015, 1, 1), b: 470 }
];

export default function BrushAndZoom() {
  const [zoomDomain, setZoomDomain] = React.useState<DomainPropType>({
    x: [new Date(1990, 1, 1), new Date(2009, 1, 1)]
  });

  return (
    <>
      <h3>Line Chart with brush and zoom</h3>
      <VictoryChart
        width={600}
        height={470}
        scale={{ x: 'time' }}
        containerComponent={
          <VictoryZoomContainer
            zoomDimension="x"
            zoomDomain={zoomDomain}
            onZoomDomainChange={(domain: DomainPropType) =>
              setZoomDomain(domain)
            }
          />
        }
      >
        <VictoryLine
          style={{ data: { stroke: 'tomato' } }}
          data={data}
          x="a"
          y="b"
        />
      </VictoryChart>
      <VictoryChart
        padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
        width={600}
        height={100}
        scale={{ x: 'time' }}
        containerComponent={
          <VictoryBrushContainer
            brushDimension="x"
            brushDomain={zoomDomain}
            onBrushDomainChange={(domain: DomainPropType) =>
              setZoomDomain(domain)
            }
          />
        }
      >
        <VictoryAxis tickFormat={(x) => new Date(x).getFullYear()} />
        <VictoryLine
          style={{ data: { stroke: 'tomato' } }}
          data={data}
          x="a"
          y="b"
        />
      </VictoryChart>
    </>
  );
}
