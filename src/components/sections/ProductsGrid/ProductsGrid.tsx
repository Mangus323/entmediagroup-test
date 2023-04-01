import React from "react";
import { ProductCard } from "@/components/elements/ProductCard/ProductCard";
import { IProduct } from "@/types/product";
import s from "./ProductsGrid.module.scss";

interface ProductsGridProps {
  products: IProduct[];
}

export const ProductsGrid = (props: ProductsGridProps): JSX.Element => {
  const { products } = props;

  return (
    <section className={s.container}>
      {products.map(product => (
        <ProductCard {...product} key={product.id} />
      ))}
    </section>
  );
};
