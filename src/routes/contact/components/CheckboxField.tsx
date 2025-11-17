import type { ChangeEvent } from "react";

interface CheckboxFieldProps {
  label: string;
  id: string;
  required?: boolean;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const CheckboxField = ({
  label,
  id,
  required = false,
  checked,
  onChange,
  className,
  ...props
}: CheckboxFieldProps) => {
  return (
    <div className={className}>
      <input
        type="checkbox"
        id={id}
        name={id}
        required={required}
        checked={checked}
        onChange={onChange}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
