const variants = {
  default: "border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500",
  transparent: "bg-transparent focus:outline-none",
  slate: "bg-slate-100 focus:outline-none",
  waite: "bg-slate-100 focus:outline-none",
  none: "",
};

const baseclass = "outline-none transition duration-200";

export default function Input({
  variant = "default",
  className = "",
  type = "text",
  ...props
}) {
  const selectedVariant = variants[variant] ?? "";

  return (
    <input
      type={type}
      className={`
        ${baseclass}
        ${selectedVariant}
        ${className}
      `}
      {...props}
    />
  );
}
