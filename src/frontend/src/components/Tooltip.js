import React from "react";

function Tooltip({ dataset, tooltip, pinnedState, onClose }) {
  if (!tooltip) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: tooltip.y + 10,
        left: tooltip.x + 10,
        background: "rgba(0,0,0,0.85)",
        color: "white",
        padding: "12px 14px",
        borderRadius: "10px",
        fontSize: "13.5px",
        pointerEvents: "auto",
        maxWidth: "340px",
        maxHeight: "300px",
        overflowY: "auto",
        zIndex: 10,
        boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
        lineHeight: "1.4em",
      }}
    >
      <strong style={{ fontSize: "15px" }}>{tooltip.state}</strong>
      <br />

      {dataset === "cvap" ? (
        <div style={{ marginTop: "6px" }}>
          {tooltip.text.split("\n").map((line, i) => {
            // Parse text into two lines of info: voters and disenfranchised
            if (i === 0) {
              return (
                <div key={i} style={{ marginBottom: "4px" }}>
                  <strong>Eligible voters:</strong>{" "}
                  {line.replace(" voters", "")}
                </div>
              );
            }
            if (i === 1) {
              const parts = line.match(
                /Potentially disenfranchised under SAVE Act: (.+)/
              );
              return (
                <div key={i}>
                  <strong>Potentially disenfranchised:</strong>{" "}
                  {parts ? parts[1] : line}
                </div>
              );
            }
            return null;
          })}
        </div>
      ) : tooltip.data.length === 0 ? (
        <>
          <em>No verified cases</em>
          <br />
        </>
      ) : (
        tooltip.data.map((c, i) => (
          <details key={i} style={{ marginTop: "6px" }}>
            <summary>
              {c.name} — <span style={{ color: "#ffb" }}>{c.type}</span>
            </summary>
            <div style={{ marginLeft: "10px", marginTop: "3px" }}>
              <p
                style={{
                  fontSize: "12px",
                  lineHeight: "1.3em",
                  whiteSpace: "normal",
                }}
              >
                {c.details}
              </p>
            </div>
          </details>
        ))
      )}

      {pinnedState && (
        <button
          onClick={onClose}
          style={{
            marginTop: "10px",
            background: "#666",
            color: "white",
            border: "none",
            padding: "5px 10px",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          Close
        </button>
      )}
    </div>
  );
}

export default Tooltip;
