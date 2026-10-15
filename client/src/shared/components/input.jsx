const variants = {
  default:
    "bg-white text-slate-900 placeholder:text-slate-400 border border-slate-300 rounded-lg shadow-sm focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none",
  white:
    "bg-white text-slate-900 placeholder:text-slate-400 border border-slate-300 rounded-lg shadow-sm focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none",
  transparent:
    "bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-none",
  slate:
    "bg-slate-100 text-slate-900 placeholder:text-slate-400 border border-slate-200 rounded-lg focus:bg-white focus:border-red-500 focus:outline-none",
  waite:
    "bg-slate-100 text-slate-900 placeholder:text-slate-400 border border-slate-200 rounded-lg focus:bg-white focus:border-red-500 focus:outline-none",
  none: "text-slate-900",
};

const baseclass = "text-slate-900 placeholder:text-slate-400 outline-none transition duration-200";

export default function Input({
  variant = "default",
  className = "",
  type = "text",
  ...props
}) {
  const selectedVariant = variants[variant] ?? variants.default;

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
