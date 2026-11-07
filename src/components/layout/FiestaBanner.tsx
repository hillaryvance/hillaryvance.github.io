import { useId, type CSSProperties } from "react";
import { colors } from "../../theme";
import "./FiestaBanner.css";

const flagColors = [
  colors.coral,
  colors.teal,
  colors.yellow,
  colors.blue,
  colors.lavender,
  colors.sage,
  "#F1B46D",
] as const;
const tileWidth = 504;
const flagSpacing = tileWidth / flagColors.length;

// Match both the position and tangent of the cord at each attachment.
function cordAttachment(x: number) {
  const progress = x / (tileWidth / 2);
  const t = progress <= 1 ? progress : progress - 1;
  const curve = t * t * (3 - 2 * t);
  const slope =
    ((progress <= 1 ? 34 : -34) * 6 * t * (1 - t)) / (tileWidth / 2);
  return {
    y: progress <= 1 ? 6 + 34 * curve : 40 - 34 * curve,
    angle: (Math.atan(slope) * 180) / Math.PI,
  };
}

export function FiestaBanner() {
  const id = useId().replace(/:/g, "");
  const patternId = `${id}-flags`;
  const sheenId = `${id}-sheen`;
  const shadowId = `${id}-shadow`;

  return (
    <svg
      className="fiesta-banner"
      aria-hidden="true"
      focusable="false"
      width="100%"
      height="120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={sheenId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.28" />
          <stop offset="45%" stopColor="#fff" stopOpacity="0" />
          <stop offset="100%" stopColor="#69483D" stopOpacity="0.1" />
        </linearGradient>
        <filter id={shadowId} x="-25%" y="-15%" width="150%" height="150%">
          <feDropShadow
            dx="0"
            dy="3"
            stdDeviation="2"
            floodColor="#69483D"
            floodOpacity="0.16"
          />
        </filter>
        {/* Pixel-sized tiles keep pennants in proportion at every screen width. */}
        <pattern
          id={patternId}
          x="20"
          width={tileWidth}
          height="120"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 0 6 C 84 6 168 40 252 40 C 336 40 420 6 504 6"
            fill="none"
            stroke="#A78064"
            strokeWidth="2.5"
          />
          <path
            d="M 0 5 C 84 5 168 39 252 39 C 336 39 420 5 504 5"
            fill="none"
            stroke="#FFF5E6"
            strokeWidth="0.8"
            strokeOpacity="0.75"
          />
          {/* Each swag is fastened at the menu edge, with the cord dipping below. */}
          {[0, tileWidth].map((x) => (
            <g key={x} transform={`translate(${x} 0)`}>
              <path
                d="M 0 -2 V 6"
                stroke="#A78064"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle
                cy="6"
                r="3.5"
                fill="#C7A27B"
                stroke="#FFF5E6"
                strokeWidth="1"
              />
              <circle cx="-0.8" cy="5" r="1" fill="#FFF5E6" opacity="0.8" />
            </g>
          ))}
          {flagColors.map((color, index) => {
            const x = flagSpacing * (index + 0.5);
            const { y, angle } = cordAttachment(x);
            return (
              <g
                key={color}
                transform={`translate(${x} ${y}) rotate(${angle})`}
              >
                <g
                  className="fiesta-banner__flag"
                  style={
                    {
                      "--flag-delay": `${-index * 0.8}s`,
                      "--flag-duration": `${5 + (index % 3) * 0.6}s`,
                    } as CSSProperties
                  }
                >
                  <path
                    d="M -25 0 Q -27 0 -26 3 L -1 64 Q 0 66 1 64 L 26 3 Q 27 0 25 0 Z"
                    fill={color}
                    stroke="#FFF8EF"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    filter={`url(#${shadowId})`}
                  />
                  <path
                    d="M -25 0 Q -27 0 -26 3 L -1 64 Q 0 66 1 64 L 26 3 Q 27 0 25 0 Z"
                    fill={`url(#${sheenId})`}
                  />
                  <path
                    d="M -19 7 H 19 L 0 53 Z"
                    fill="none"
                    stroke="#FFF8EF"
                    strokeOpacity="0.6"
                    strokeWidth="0.8"
                    strokeDasharray="2 3"
                  />
                  <g fill="#FFF8EF" opacity="0.8">
                    <path d="M 0 13 Q 9 21 0 29 Q -9 21 0 13 Z" />
                    <path d="M -8 21 Q 0 12 8 21 Q 0 30 -8 21 Z" />
                    <circle cy="39" r="1.6" />
                  </g>
                  <circle cy="21" r="2.4" fill={color} />
                  <path
                    d="M -23 3 H 23"
                    stroke="#FFF8EF"
                    strokeOpacity="0.45"
                    strokeWidth="1"
                  />
                </g>
              </g>
            );
          })}
        </pattern>
      </defs>
      <rect width="100%" height="120" fill={`url(#${patternId})`} />
    </svg>
  );
}
