import React from "react";

export default function Button({
  text = "Search",
  fullWidth = false,
  height = 56,
  fontSize = 16,
  shadowSize = 8,
  borderColor = "#E63946",
  bg = "#ffffff",
  color = "#0B1F3F",
  hoverBg = "#0B1F3F",
  hoverColor = "#ffffff",
  activeShadowSize = 4,
}) {
  return (
    <>
      <button
        className={`brutal-btn ${fullWidth ? "brutal-btn--full" : ""} `}
        style={{
          "--btn-height": `${height}px`,
          "--btn-font-size": `${fontSize}px`,
          "--btn-shadow": `${shadowSize}px`,
          "--btn-active-shadow": `${activeShadowSize}px`,
          "--btn-border-color": borderColor,
          "--btn-bg": bg,
          "--btn-color": color,
          "--btn-hover-bg": hoverBg,
          "--btn-hover-color": hoverColor,
        }}
      >
        {text}
      </button>

      <style jsx>{`
        .brutal-btn {
          width: auto;
          max-width: 100%;
          min-width: 160px;
          height: var(--btn-height, 56px);

          padding: 0 1.75rem;

          font-size: var(--btn-font-size, 16px);
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            sans-serif;
          font-weight: 700;
          letter-spacing: 0.06em;

          background-color: var(--btn-bg, #ffffff);
          color: var(--btn-color, #0b1f3f);

          border: 3px solid var(--btn-border-color, #e63946);
          border-radius: 0;
          outline: none;

          cursor: pointer;
          box-shadow: var(--btn-shadow, 8px) var(--btn-shadow, 8px) 0
            var(--btn-border-color, #e63946);

          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          white-space: nowrap;

          transition: transform 0.2s ease, box-shadow 0.2s ease,
            background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        }

        .brutal-btn--full {
          width: 100%;
        }

        @media (max-width: 640px) {
          .brutal-btn {
            min-width: 100%;
            height: calc(var(--btn-height, 56px) - 8px);
            font-size: calc(var(--btn-font-size, 16px) - 2px);
            box-shadow: 6px 6px 0 var(--btn-border-color, #e63946);
          }
        }

        .brutal-btn:hover {
          transform: translate(-4px, -4px);
          box-shadow: 12px 12px 0 var(--btn-border-color, #e63946);
          background-color: var(--btn-hover-bg, #0b1f3f);
          color: var(--btn-hover-color, #ffffff);
        }

        .brutal-btn:active {
          transform: translate(0, 0);
          box-shadow: var(--btn-active-shadow, 4px)
            var(--btn-active-shadow, 4px) 0 var(--btn-border-color, #e63946);
        }

        .brutal-btn:focus-visible {
          outline: 2px dashed var(--btn-border-color, #e63946);
          outline-offset: 4px;
        }
      `}</style>
    </>
  );
}
