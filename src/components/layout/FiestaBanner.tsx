import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { colors } from "../../theme";
const FiestaFlag: React.FC<{
  xOffset: number;
  animate?: boolean;
  index: number;
}> = ({ xOffset, animate = false, index }) => {
  const flagColors = [
    colors.coral,
    colors.teal,
    colors.blue,
    colors.sage,
    colors.yellow,
    colors.lavender,
    "#FF9F43",
    "#26de81",
  ];
  const color = flagColors[index % flagColors.length];
  const flagHeight = 80;

  // Calculate draping effect - creates a natural curve
  const drapeFactor = Math.sin((index / 25) * Math.PI * 4) * 15 + 10;
  const swayOffset = animate ? Math.sin(index * 0.5) * 3 : 0;

  return (
    <g transform={`translate(${xOffset}, ${drapeFactor})`}>
      {/* Flag rope/string with curve */}
      <path
        d={`M 0 0 Q 30 ${drapeFactor * 0.3} 60 0`}
        stroke="#8B4513"
        strokeWidth="3"
        fill="none"
        opacity="0.8"
      />

      {/* Triangular pennant flag with natural sway */}
      <path
        d={`M 5 0 L 55 0 L ${30 + swayOffset} ${flagHeight} Z`}
        fill={color}
        stroke="#FFFFFF"
        strokeWidth="2"
        opacity={animate ? 0.9 : 0.8}
        style={{
          transition: "all 0.6s ease-in-out",
          filter: animate
            ? "drop-shadow(0 6px 12px rgba(0,0,0,0.4))"
            : "drop-shadow(0 3px 6px rgba(0,0,0,0.3))",
          transformOrigin: "30px 0px",
          transform: animate
            ? `rotate(${swayOffset * 0.5}deg)`
            : "rotate(0deg)",
        }}
      />

      {/* Decorative pattern on flag */}
      <circle
        cx={30 + swayOffset * 0.3}
        cy="25"
        r="8"
        fill="#FFFFFF"
        opacity="0.7"
      />
      <circle
        cx={30 + swayOffset * 0.3}
        cy="25"
        r="4"
        fill={color}
        opacity="0.9"
      />

      {/* Small decorative dots that move with the flag */}
      <circle
        cx={20 + swayOffset * 0.2}
        cy="40"
        r="3"
        fill="#FFFFFF"
        opacity="0.6"
      />
      <circle
        cx={40 + swayOffset * 0.2}
        cy="40"
        r="3"
        fill="#FFFFFF"
        opacity="0.6"
      />
      <circle
        cx={30 + swayOffset * 0.4}
        cy="55"
        r="3"
        fill="#FFFFFF"
        opacity="0.6"
      />
    </g>
  );
};

export const FiestaBanner: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const flagCount = 25;
  const flagWidth = 60;
  const totalWidth = flagCount * flagWidth;

  // Create multiple attachment points for more realistic draping
  const attachmentPoints = Array.from({ length: flagCount + 1 }, (_, i) => ({
    x: i * flagWidth,
    y: 5 + Math.sin(i * 0.8) * 8, // Creates natural draping curves
  }));

  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => {
      setAnimate((prev) => !prev);
    }, 3000); // Slower animation for more realistic movement
    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="100%"
      height="120" // Increased height to accommodate draping
      viewBox={`0 0 ${totalWidth} 120`}
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      {/* Background gradient with subtle shadow */}
      <defs>
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.2" />
          <stop offset="50%" stopColor={colors.background} stopOpacity="0.1" />
          <stop offset="100%" stopColor={colors.background} stopOpacity="0.3" />
        </linearGradient>

        {/* Shadow filter for more realistic depth */}
        <filter id="bannerShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="0"
            dy="3"
            stdDeviation="2"
            floodColor="rgba(0,0,0,0.2)"
          />
        </filter>
      </defs>

      {/* Main draped rope - creates the hanging effect */}
      <path
        d={`M 0 10 ${attachmentPoints
          .map((point, i) =>
            i === 0
              ? `M ${point.x} ${point.y}`
              : `Q ${point.x - 20} ${point.y + 5} ${point.x} ${point.y}`,
          )
          .join(" ")}`}
        stroke="#8B4513"
        strokeWidth="4"
        fill="none"
        opacity="0.9"
        filter="url(#bannerShadow)"
        style={{
          transition: "all 0.3s ease-in-out",
        }}
      />

      {/* Individual flags with natural draping */}
      {Array.from({ length: flagCount }).map((_, i) => (
        <FiestaFlag
          key={i}
          xOffset={i * flagWidth}
          animate={animate && !reducedMotion}
          index={i}
        />
      ))}

      {/* Enhanced decorative elements */}
      <g opacity="0.7">
        {/* Floating sparkles that move with the banner */}
        {Array.from({ length: 12 }).map((_, i) => (
          <g key={i}>
            <circle
              cx={80 + i * 120}
              cy={15 + Math.sin(i * 0.7) * 8}
              r="2"
              fill="#FFD700"
              opacity={animate ? 1 : 0.6}
              style={{
                transition: "all 0.4s ease-in-out",
                transform: animate ? "scale(1.5)" : "scale(1)",
              }}
            />
          </g>
        ))}

        {/* Additional floating confetti */}
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={`confetti-${i}`}>
            <rect
              x={150 + i * 150}
              y={25 + Math.cos(i * 0.6) * 6}
              width="4"
              height="4"
              fill={
                [colors.coral, colors.teal, colors.yellow, colors.lavender][
                  i % 4
                ]
              }
              opacity={animate ? 0.8 : 0.4}
              style={{
                transition: "all 0.5s ease-in-out",
                transform: animate ? "rotate(45deg)" : "rotate(0deg)",
              }}
            />
          </g>
        ))}
      </g>

      {/* Attachment points to menu bar (small decorative elements) */}
      {attachmentPoints
        .slice(0, -1)
        .filter((_, i) => i % 3 === 0)
        .map((point, i) => (
          <g key={`attachment-${i}`}>
            <circle
              cx={point.x}
              cy={point.y}
              r="3"
              fill="#8B4513"
              opacity="0.7"
            />
            <circle
              cx={point.x}
              cy={point.y}
              r="1.5"
              fill="#D2691E"
              opacity="0.9"
            />
          </g>
        ))}
    </svg>
  );
};
