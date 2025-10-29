import React from "react";
import * as d3 from "d3";

function Legend({ dataset }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1rem",
        gap: "6px",
      }}
    >
      <span style={{ fontSize: "13px" }}>Low</span>
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={i}
          style={{
            width: 30,
            height: 10,
            background:
              dataset === "cvap"
                ? d3.interpolateBlues(i / 7)
                : d3.interpolateReds(i / 7),
          }}
        />
      ))}
      <span style={{ fontSize: "13px" }}>High</span>
    </div>
  );
}

export default Legend;
