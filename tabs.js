
import React, { useState } from "react";

export function Tabs({ children, defaultValue, className }) {
  const [value, setValue] = useState(defaultValue);
  const childrenWithProps = React.Children.map(children, (child) =>
    React.isValidElement(child) ? React.cloneElement(child, { value, setValue }) : child
  );
  return <div className={className}>{childrenWithProps}</div>;
}

export function TabsList({ children, className }) {
  return <div className={`flex flex-wrap gap-2 mb-4 ${className || ""}`}>{children}</div>;
}

export function TabsTrigger({ children, value: tabValue, value, setValue, className }) {
  const isActive = tabValue === value;
  return (
    <button
      onClick={() => setValue(tabValue)}
      className={`px-3 py-1 rounded border ${isActive ? "bg-blue-500 text-white" : "bg-gray-200"} ${className || ""}`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children, value: tabValue, value }) {
  return tabValue === value ? <div>{children}</div> : null;
}
