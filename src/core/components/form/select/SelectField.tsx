import type { ChangeEvent } from "react";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label: string;
  id: string;
  options: SelectOption[];
  required?: boolean;
  multiple?: boolean;
  value: string | string[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  size?: number;
  className?: string;
}

export const SelectField = ({
  label,
  id,
  options,
  required = false,
  multiple = false,
  value,
  className,
  onChange,
  ...props
}: SelectFieldProps) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={id}
        required={required}
        multiple={multiple}
        value={value}
        onChange={onChange}
        className={className}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};
