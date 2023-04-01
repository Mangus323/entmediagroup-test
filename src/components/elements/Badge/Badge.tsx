import React from "react";
import { BadgeType } from "@/types/product";
import clsx from "clsx";
import s from "./Badge.module.scss";

interface BadgeProps {
  type: BadgeType;
}

export const Badge = (props: BadgeProps): JSX.Element => {
  const { type } = props;
  return (
    <span
      className={clsx(
        s.container,
        type === "new" && s.container__new,
        type === "top" && s.container__top
      )}>
      {type}
    </span>
  );
};
