import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => setShowMenu(false);
    if (showMenu) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showMenu]);

  const handleLinkClick = (e) => {
    e.stopPropagation();
    setShowMenu(false);
  };

  const email = "mlw0135@auburn.edu";

  return (
    <header
      style={{
        backgroundColor: "#0d3b66",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.75rem 2rem",
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      {/* Left-aligned logo / site title */}
      <Link
        to="/"
        style={{
          fontWeight: "700",
          fontSize: "1.3rem",
          letterSpacing: "-0.02em",
          color: "white",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span
          style={{
            borderBottom: "2px solid #f4d35e",
            paddingBottom: "2px",
          }}
        >
          VoteGuard
        </span>
      </Link>

      {/* Center navigation links */}
      <nav style={{ display: "flex", gap: "1.8rem", alignItems: "center" }}>
        {[
          { to: "/", label: "Home" },
          { to: "/map", label: "Map" },
          { to: "/resources", label: "Resources" },
        ].map((link) => (
          <Link
            key={link.to}
            to={link.to}
            style={{
              color:
                location.pathname === link.to
                  ? "#f4d35e"
                  : "rgba(255,255,255,0.9)",
              textDecoration: "none",
              fontWeight: "500",
              fontSize: "1rem",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#f4d35e")}
            onMouseLeave={(e) =>
              (e.target.style.color =
                location.pathname === link.to
                  ? "#f4d35e"
                  : "rgba(255,255,255,0.9)")
            }
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Right-aligned contact dropdown */}
      <div style={{ position: "relative" }} onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => setShowMenu(!showMenu)}
          style={{
            background: "transparent",
            border: "1px solid #f4d35e",
            color: "white",
            fontWeight: "500",
            padding: "6px 12px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "0.95rem",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#f4d35e";
            e.target.style.color = "#0d3b66";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = "white";
          }}
        >
          Contact
        </button>

        {showMenu && (
          <div
            style={{
              position: "absolute",
              right: 0,
              top: "2.4rem",
              background: "white",
              color: "#0d3b66",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              width: "220px",
              padding: "0.5rem 0",
              textAlign: "left",
            }}
          >
            <a
              href="https://linkedin.com/in/mallorywhitt"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              style={{
                display: "block",
                padding: "10px 16px",
                color: "#0d3b66",
                textDecoration: "none",
                fontSize: "0.95rem",
              }}
              onMouseEnter={(e) => (e.target.style.background = "#fef6d8")}
              onMouseLeave={(e) => (e.target.style.background = "transparent")}
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/mallorywhitt"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              style={{
                display: "block",
                padding: "10px 16px",
                color: "#0d3b66",
                textDecoration: "none",
                fontSize: "0.95rem",
              }}
              onMouseEnter={(e) => (e.target.style.background = "#fef6d8")}
              onMouseLeave={(e) => (e.target.style.background = "transparent")}
            >
              GitHub
            </a>

            <button
              onClick={async () => {
                await navigator.clipboard.writeText(email);
                setCopied(true);
                setTimeout(() => setCopied(false), 1400);
              }}
              style={{
                display: "block",
                width: "100%",
                background: "transparent",
                border: "none",
                padding: "10px 16px",
                color: "#0d3b66",
                textAlign: "left",
                fontSize: "0.95rem",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.target.style.background = "#fef6d8")}
              onMouseLeave={(e) => (e.target.style.background = "transparent")}
            >
              {copied ? "Email copied!" : "Email"}
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
