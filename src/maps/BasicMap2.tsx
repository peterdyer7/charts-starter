import React from 'react';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker
} from 'react-simple-maps';
import { geoAlbers } from 'd3-geo';
import { cantons } from '../data';

import jsonData from '../static/cantons.json';

const wrappedStyles = {
  width: '100%',
  maxWidth: 980,
  margin: '0 auto'
};

const geographyStyles = {
  fill: '#ECEFF1',
  stroke: '#607D8B',
  strokeWidth: 0.75,
  outline: 'none'
};

const mapCenter = [8.3, 46.8];

export default function BasicMap2() {
  // function projection() {
  //   return geoAlbers()
  //     .rotate([0, 0])
  //     .center([mapCenter[0], mapCenter[1]])
  //     .scale(14000)
  //     .translate([908 / 2, 551 / 2]);
  // }

  return (
    <div style={wrappedStyles}>
      <ComposableMap
        projectionConfig={{ scale: 14000, rotation: [-11, 0, 0] }}
        projection="times"
        //@ts-ignore
        // projection={() =>
        //   geoAlbers()
        //     .rotate([0, 0])
        //     .center([mapCenter[0], mapCenter[1]])
        //     .scale(14000)
        //     .translate([454, 225.5])
        // }
        width={908}
        height={551}
        style={{ width: '100%', height: 'auto' }}
      >
        <ZoomableGroup center={[mapCenter[0], mapCenter[1]]} disablePanning>
          <Geographies geography={jsonData}>
            {(geographies, projection) =>
              geographies.map((geography, i) => (
                <Geography
                  key={i}
                  geography={geography}
                  projection={projection}
                  style={{
                    default: {
                      fill: '#ECEFF1',
                      stroke: '#607D8B',
                      strokeWidth: 0.75,
                      outline: 'none'
                    },
                    hover: {
                      fill: '#607D8B',
                      stroke: '#607D8B',
                      strokeWidth: 0.75,
                      outline: 'none'
                    },
                    pressed: {
                      fill: '#FF5722',
                      stroke: '#607D8B',
                      strokeWidth: 0.75,
                      outline: 'none'
                    }
                  }}
                />
              ))
            }
          </Geographies>
          <Markers>
            {cantons.map((canton) => (
              <Marker
                key={canton.id}
                //@ts-ignore
                marker={canton}
                style={{
                  default: { fill: '#FF5722' },
                  hover: { fill: '#FFFFFF' },
                  pressed: { fill: '#FF5722' }
                }}
              >
                <circle
                  cx={0}
                  cy={0}
                  r={10}
                  style={{ stroke: '#FF5722', strokeWidth: 3, opacity: 0.9 }}
                />
              </Marker>
            ))}
          </Markers>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}
