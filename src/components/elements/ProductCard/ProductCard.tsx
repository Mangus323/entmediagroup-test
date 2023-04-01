import React from "react";
import { Badge } from "@/components/elements/Badge/Badge";
import { IProduct } from "@/types/product";
import s from "./ProductCard.module.scss";

interface ProductCardProps extends IProduct {}

export const ProductCard = (props: ProductCardProps): JSX.Element => {
  const { title, image, badge, brand } = props;

  return (
    <div className={s.container}>
      <p className={s.title}>
        {title}
        {badge && <Badge type={badge} />}
      </p>
      <img src={image} className={s.image} />
      <p className={s.brand}>{brand}</p>
    </div>
  );
};
