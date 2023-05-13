import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap 
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-30.0, -45.0, 0],
        center: [2, -5],
        scale: 600,
      }}
      className="h-full w-full rounded-3xl "
    >
      <Geographies className=""
        geography="/features.json"
        fill="#Ffff"
        strokeWidth={1}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[34.3522, 39.1999]}
        dx={-50}
        dy={-30}
        connectorProps={{
          stroke: "#000",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#000" fontFamily="syne" fontSize={40}>
          {"Turkey"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
