import React from 'react';
import {
  VictoryChart,
  VictoryScatter,
  VictoryZoomContainer,
  DomainPropType
} from 'victory';

interface Props {
  data: Array<{
    x: Date;
    y: number;
  }>;
}

export default function BasicTimeseries({ data }: Props) {
  const [zoomDomain, setZoomDomain] = React.useState<DomainPropType>({
    x: [data[0].x, data[data.length - 1].x]
  });

  function getData() {}

  return (
    <>
      <h3>Basic Timeseries</h3>
      <VictoryChart
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
        <VictoryScatter data={data} />
      </VictoryChart>
    </>
  );
}
