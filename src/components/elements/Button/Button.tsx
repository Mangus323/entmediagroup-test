import React from "react";
import clsx from "clsx";
import Link from "next/link";
import s from "./Button.module.scss";

type ColorType = "default" | "success" | "danger";
type SizeType = "default" | "large";
type DisplayType = "block" | "inline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ColorType;
  link?: string;
  size?: SizeType;
  display?: DisplayType;
}

export const Button = (props: ButtonProps): JSX.Element => {
  const { link, ...buttonProps } = props;
  if (link) {
    return (
      <Link href={link}>
        <ButtonBase {...buttonProps} />
      </Link>
    );
  }

  return <ButtonBase {...buttonProps} />;
};

const ButtonBase = (props: Omit<ButtonProps, "link">) => {
  const {
    className,
    children,
    color = "default",
    size = "default",
    display = "inline",
    ...buttonProps
  } = props;

  return (
    <button
      className={clsx(
        s.container,
        color === "default" && s.container__black,
        color === "success" && s.container__green,
        color === "danger" && s.container__danger,
        size === "default" && s.container__medium,
        size === "large" && s.container__large,
        display === "block" && s.container__block,
        className
      )}
      {...buttonProps}>
      {children}
    </button>
  );
};
