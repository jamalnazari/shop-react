const baseClasses = `
inline-flex
items-center
justify-center
rounded-lg
font-medium
cursor-pointer
transition-colors
duration-200
disabled:opacity-50
disabled:cursor-not-allowed`

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
  danger: "bg-red-600 text-white hover:bg-red-700",
  success: "bg-green-600 text-white hover:bg-green-700",
  warning: "bg-yellow-500 text-black hover:bg-yellow-600",
  info: "bg-cyan-600 text-white hover:bg-cyan-700",
  dark: "bg-gray-900 text-white hover:bg-gray-800",
  outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  ghost: "bg-transparent text-blue-600 hover:bg-blue-50",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",

  md: "px-4 py-2 text-base",

  lg: "px-6 py-3 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className="",
  type="button",
  ...props 
}) {

  const selectedVariant =
    variants[variant] ?? variants.primary;

  const selectedSize =
    sizes[size] ?? sizes.md;

  return (
    <button
      type={type}
      className={`
        ${baseClasses}
        ${selectedVariant}
        ${selectedSize}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}