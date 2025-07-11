
import React from "react";

export function Card({ children, className }) {
  return <div className={`border rounded-lg shadow p-4 bg-white ${className || ""}`}>{children}</div>;
}

export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}
