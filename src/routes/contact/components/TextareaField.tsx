import type { ChangeEvent } from "react";
import { Tooltip } from "../../../core/components/tooltip/Tooltip";

interface TextareaFieldProps {
  label: string;
  id: string;
  required?: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  maxLength?: number;
  rows?: number;
  placeholder?: string;
  className?: string;
}
export const TextareaField = ({
  label,
  id,
  required = false,
  value,
  className,
  onChange,
  ...props
}: TextareaFieldProps) => {
  return (
    <>
      <Tooltip content="Tooltip">
        <label htmlFor={id}>{label}</label>
      </Tooltip>
      <textarea
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
