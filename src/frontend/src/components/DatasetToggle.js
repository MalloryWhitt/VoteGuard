import React from "react";

function DatasetToggle({ dataset, onChange }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <button
        onClick={() => onChange("cvap")}
        style={{
          background: dataset === "cvap" ? "#4682b4" : "#ccc",
          color: "white",
          border: "none",
          padding: "6px 10px",
          marginRight: "6px",
          cursor: "pointer",
          borderRadius: "4px",
        }}
      >
        CVAP Totals
      </button>
      <button
        onClick={() => onChange("heritage")}
        style={{
          background: dataset === "heritage" ? "#b44646" : "#ccc",
          color: "white",
          border: "none",
          padding: "6px 10px",
          cursor: "pointer",
          borderRadius: "4px",
        }}
      >
        Heritage Cases
      </button>
    </div>
  );
}

export default DatasetToggle;
