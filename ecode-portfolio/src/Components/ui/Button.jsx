export function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center px-5 py-2.5 rounded-lg transition-all ${className}`}
    >
      {children}
    </button>
  );
}
