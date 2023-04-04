import React from "react";

interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  disabled?: boolean;
  outline?: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  secondary,
  fullWidth,
  large,
  disabled,
  outline,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
  buttonStyle
  ${fullWidth ? "w-full" : "w-fit"}
  ${large ? "text-xl px-5 py-3" : "text-md px-4 py-2"}
  ${outline ? "bg-transparent border-white text-white" : ""}
  ${
    secondary
      ? "bg-white text-black border-black"
      : "bg-sky-500 text-white border-sky-500"
  }
  `}
    >
      {label}
    </button>
  );
};

export default Button;
