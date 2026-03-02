/**
 * Official Visage brand symbol — Organic Jewel.
 * Reusable SVG component with support for size, opacity, color, and custom styling.
 */
const OrganicJewel = ({
  size,
  className = "",
  opacity,
  style,
}: {
  size?: number;
  className?: string;
  opacity?: number;
  fill?: string;
  style?: React.CSSProperties;
}) => (
  <img
    src="/favicon.svg"
    alt="Visage Organic Jewel"
    className={className}
    style={{ 
      opacity, 
      ...(size ? { width: size, height: "auto" } : {}), 
      ...style 
    }}
  />
);

export default OrganicJewel;
