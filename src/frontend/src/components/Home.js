import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "3rem 1rem 5rem",
        color: "#0d3b66",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      {/* Hero section */}
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          background: "linear-gradient(180deg, #ffffff 0%, #f9fbfd 100%)",
          borderRadius: "16px",
          padding: "3rem 2rem",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          border: "1px solid #e5e9ef",
        }}
      >
        <h1
          style={{
            fontSize: "2.3rem",
            fontWeight: "800",
            marginBottom: "1.5rem",
            color: "#0d3b66",
          }}
        >
          VoteGuard’s Mission
        </h1>

        <p style={{ fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "1rem" }}>
          <strong>VoteGuard</strong> is a research-driven transparency project that examines the
          relationship between voting accessibility, verified voter fraud, and proposed policy
          reforms such as the{" "}
          <strong>Safeguard American Voter Eligibility (SAVE) Act</strong>.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "1rem" }}>
          The SAVE Act would require documentary proof of U.S. citizenship—such as a passport or
          birth certificate—to register for federal elections. Research shows this requirement
          would <strong>disenfranchise millions of eligible citizens </strong>
          lacking these documents, particularly low-income, rural, elderly, and minority voters.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "2rem" }}>
          VoteGuard compares <strong>U.S. Census CVAP data</strong> with{" "}
          <strong>Heritage Foundation fraud records</strong> to visualize the disproportionate impact
          of these restrictions—and to demonstrate, through verified data, that large-scale voter
          fraud is exceedingly rare.
        </p>

        <Link
          to="/map"
          style={{
            display: "inline-block",
            backgroundColor: "#0d3b66",
            color: "white",
            padding: "12px 26px",
            borderRadius: "8px",
            fontWeight: "600",
            fontSize: "1rem",
            textDecoration: "none",
            transition: "all 0.2s ease-in-out",
            boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#f4d35e";
            e.target.style.color = "#0d3b66";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#0d3b66";
            e.target.style.color = "white";
          }}
        >
          View Interactive Map →
        </Link>
      </div>

      {/* Divider */}
      <div
        style={{
          height: "2px",
          background: "#f4d35e",
          width: "80px",
          margin: "3rem auto",
          borderRadius: "2px",
        }}
      />

      {/* Data sources */}
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "1rem" }}>
          Data Sources
        </h2>
        <ol
          style={{
            textAlign: "left",
            display: "inline-block",
            lineHeight: "1.8",
            fontSize: "1rem",
          }}
        >
          <li>
            <strong>Citizen Voting Age Population (CVAP)</strong> —{" "}
            <a
              href="https://www.census.gov/programs-surveys/decennial-census/about/voting-rights/cvap.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0d3b66", textDecoration: "underline" }}
            >
              U.S. Census Bureau
            </a>
          </li>
          <li>
            <strong>Election Fraud Database</strong> —{" "}
            <a
              href="https://www.heritage.org/voterfraud"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0d3b66", textDecoration: "underline" }}
            >
              Heritage Foundation
            </a>
          </li>
        </ol>
        <p
          style={{
            color: "#4a5568",
            fontSize: "0.95rem",
            marginTop: "1rem",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          VoteGuard employs publicly available, verifiable datasets.
        </p>
      </div>
    </div>
  );
}

export default Home;
