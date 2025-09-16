import "./StarBorder.css";
import React from "react";

interface StarBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  speed?: string;
  thickness?: number;
  children?: React.ReactNode;
  className?: string;
}

export default function StarBorder({
  color = 'white',
  speed = '6s',
  thickness = 1,
  children,
  className = '',
  style,
  ...rest
}: StarBorderProps) {
  return (
    <div
      className={`star-border-container ${className}`}
      style={{
        padding: `${thickness}px 0`,
        ...style
      }}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div className="inner-content">{children}</div>
    </div>
  );
}