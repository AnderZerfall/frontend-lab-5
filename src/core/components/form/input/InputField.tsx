import type { ChangeEvent } from "react";

interface InputFieldProps {
  label: string;
  id: string;
  type?: "text" | "email" | "number";
  required?: boolean;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  min?: string;
  max?: string;
  className?: string;
}

export const InputField = ({
  label,
  id,
  type = "text",
  required = false,
  value,
  onChange,
  className = "",
  ...props
}: InputFieldProps) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        value={value}
        onChange={onChange}
        className={className}
        {...props}
      />
    </>
  );
};
