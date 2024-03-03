import clsx from "clsx";

const sizes = {
  sm: "py-2 px-4 text-sm",
  md: "py-2 px-6 text-md",
  lg: "py-3 px-8 text-lg",
};

export type TextInputProps = {
  className?: string
  placeholder?: string
  size?: keyof typeof sizes;
  label?: string;
};

export default function TextInput(
  {
    className = "",
    size = "md" as keyof typeof sizes,
    label,
    ...props
  }: TextInputProps
) {
  return (
    <span className="relative flex flex-col gap-2">
      {label && <label className="font-medium text-gray-700">{label}</label>}
      <input
        className={clsx(
          "rounded-[8px] border-[1px] border-gray-300 shadow-sm focus:outline-none",
          sizes[size],
          className
        )}
        {...props}
      />
    </span>
  );
}
