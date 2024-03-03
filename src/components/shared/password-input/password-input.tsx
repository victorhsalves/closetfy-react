import clsx from "clsx";
import * as React from "react";

const sizes = {
  sm: "py-2 px-4 text-sm",
  md: "py-2 px-6 text-md",
  lg: "py-3 px-8 text-lg",
};

export type PasswordInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  size?: keyof typeof sizes;
  label?: string;
};

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      className = "",
      size = "md" as keyof typeof sizes,
      label,
      ...props
    },
    ref
  ) => {

    return (
      <div className="relative flex flex-col gap-2">
        {label && <label className="font-medium text-gray-700">{label}</label>}
        <input
          ref={ref}
          type={"password"}
          className={clsx(
            "rounded-[8px] border-[1px] border-gray-300 shadow-sm focus:outline-none",
            sizes[size],
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
