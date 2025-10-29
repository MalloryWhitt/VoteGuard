import React, { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import * as d3 from "d3";
import DatasetToggle from "./DatasetToggle";
import Legend from "./Legend";
import Tooltip from "./Tooltip";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const stateNameMap = {
  AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas", CA: "California",
  CO: "Colorado", CT: "Connecticut", DE: "Delaware", FL: "Florida", GA: "Georgia",
  HI: "Hawaii", ID: "Idaho", IL: "Illinois", IN: "Indiana", IA: "Iowa",
  KS: "Kansas", KY: "Kentucky", LA: "Louisiana", ME: "Maine", MD: "Maryland",
  MA: "Massachusetts", MI: "Michigan", MN: "Minnesota", MS: "Mississippi",
  MO: "Missouri", MT: "Montana", NE: "Nebraska", NV: "Nevada",
  NH: "New Hampshire", NJ: "New Jersey", NM: "New Mexico", NY: "New York",
  NC: "North Carolina", ND: "North Dakota", OH: "Ohio", OK: "Oklahoma",
  OR: "Oregon", PA: "Pennsylvania", RI: "Rhode Island", SC: "South Carolina",
  SD: "South Dakota", TN: "Tennessee", TX: "Texas", UT: "Utah", VT: "Vermont",
  VA: "Virginia", WA: "Washington", WV: "West Virginia", WI: "Wisconsin",
  WY: "Wyoming", DC: "District of Columbia",
};

function USMap() {
  const [data, setData] = useState({});
  const [disenfranchisedData, setDisenfranchisedData] = useState({});
  const [dataset, setDataset] = useState("cvap");
  const [hoverTooltip, setHoverTooltip] = useState(null);
  const [pinnedState, setPinnedState] = useState(null);

  // Load CSV data for current dataset
  useEffect(() => {
    const file =
      dataset === "cvap"
        ? "/data/cvap_totals.csv"
        : "/data/heritage_data_2020.csv";

    d3.csv(file).then(rows => {
      if (dataset === "cvap") {
        const map = {};
        rows.forEach(row => (map[row.state] = +row.total || 0));
        setData(map);

        // --- Calculate disenfranchisement estimates (Brennan Center / GAO methodology) ---
        const disenfranchised = {};
        Object.entries(map).forEach(([state, total]) => {
          let multiplier = 0.09; // Default average 9%
          const highImpactStates = [
            "Alabama", "Mississippi", "Georgia", "Texas", "Louisiana",
            "Arkansas", "South Carolina", "West Virginia", "New Mexico"
          ];
          const lowImpactStates = [
            "Massachusetts", "Minnesota", "Vermont", "Connecticut",
            "New Hampshire", "Washington", "Colorado"
          ];

          if (highImpactStates.includes(state)) multiplier = 0.12;
          else if (lowImpactStates.includes(state)) multiplier = 0.06;

          disenfranchised[state] = Math.round(total * multiplier);
        });
        setDisenfranchisedData(disenfranchised);

      } else {
        const stateCases = {};
        rows.forEach(row => {
          let state = row.State || row.state || "";
          state = state.trim();
          if (stateNameMap[state]) state = stateNameMap[state];
          if (state) {
            if (!stateCases[state]) stateCases[state] = [];
            stateCases[state].push({
              name: row.Name,
              type: row["Fraud Type"],
              details: row.Details,
            });
          }
        });
        setData(stateCases);
      }
    });
  }, [dataset]);

  // Define color scale
  const colorScale =
    dataset === "cvap"
      ? d3.scaleSequentialSqrt(d3.interpolateBlues)
          .domain([0, d3.max(Object.values(data)) || 1])
      : d3.scaleSequentialSqrt(d3.interpolateReds)
          .domain([
            0,
            d3.max(Object.values(data).map(arr => arr.length)) || 1,
          ]);

  const activeTooltip = pinnedState || hoverTooltip;

  return (
    <div
      style={{
        textAlign: "center",
        position: "relative",
        width: "100%",
        overflowX: "hidden",
        paddingBottom: "2rem",
      }}
    >
      {/* Dynamic Title */}
      <h2 style={{ marginTop: "1rem" }}>
        {dataset === "cvap"
          ? "Total Eligible Voters in 2020"
          : "Verified 2020 Voter Fraud Cases"}
      </h2>

      {/* Dataset Toggle */}
      <DatasetToggle dataset={dataset} onChange={setDataset} />

      {/* Map Container */}
      <div
        style={{
          width: "90%",
          maxWidth: "1000px",
          margin: "0 auto",
          marginTop: "1.5rem",
        }}
      >
        <ComposableMap
          projection="geoAlbersUsa"
          width={900}
          height={480}
          style={{
            width: "90%",
            height: "auto",
            margin: "0 auto",
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                const stateName = geo.properties.name;
                const value =
                  dataset === "cvap"
                    ? data[stateName]
                    : (data[stateName] || []).length;

                const disenfranchised =
                  dataset === "cvap" ? disenfranchisedData[stateName] || 0 : 0;

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={value ? colorScale(value) : "#EEE"}
                    stroke="#FFF"
                    onMouseEnter={e => {
                      if (!pinnedState) {
                        if (dataset === "cvap") {
                          setHoverTooltip({
                            x: e.clientX,
                            y: e.clientY,
                            state: stateName,
                            text: `${value ? value.toLocaleString() : "N/A"} voters\nPotentially disenfranchised under SAVE Act: ${disenfranchised.toLocaleString()} (${((disenfranchised / value) * 100).toFixed(1)}%)`,
                            data: [],
                          });
                        } else {
                          setHoverTooltip({
                            x: e.clientX,
                            y: e.clientY,
                            state: stateName,
                            data: data[stateName] || [],
                          });
                        }
                      }
                    }}
                    onMouseLeave={() => !pinnedState && setHoverTooltip(null)}
                    onClick={e => {
                      if (pinnedState?.state === stateName) {
                        setPinnedState(null);
                      } else {
                        if (dataset === "cvap") {
                          setPinnedState({
                            x: e.clientX,
                            y: e.clientY,
                            state: stateName,
                            text: `${value ? value.toLocaleString() : "N/A"} voters\nPotentially disenfranchised under SAVE Act: ${disenfranchised.toLocaleString()} (${((disenfranchised / value) * 100).toFixed(1)}%)`,
                            data: [],
                          });
                        } else {
                          setPinnedState({
                            x: e.clientX,
                            y: e.clientY,
                            state: stateName,
                            data: data[stateName] || [],
                          });
                        }
                      }
                    }}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", cursor: "pointer" },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>

      {/* Tooltip */}
      <Tooltip
        dataset={dataset}
        tooltip={activeTooltip}
        pinnedState={pinnedState}
        onClose={() => setPinnedState(null)}
      />

      {/* Legend */}
      <Legend dataset={dataset} />
    </div>
  );
}

export default USMap;
