import React from "react";
import clsx from "clsx";
import s from "./InputField.module.scss";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const InputField = (props: InputFieldProps): JSX.Element => {
  const { className, ...inputProps } = props;
  return <input className={clsx(s.input, className)} {...inputProps} />;
};
