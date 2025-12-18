export function Tabs({ value, onValueChange, children }) {
  return <div>{children}</div>;
}

export function TabsList({ children, className = "" }) {
  return <div className={`flex gap-2 ${className}`}>{children}</div>;
}

export function TabsTrigger({ value, children, className = "", onClick }) {
  return (
    <button
      onClick={() => onClick?.(value)}
      className={className}
    >
      {children}
    </button>
  );
}
