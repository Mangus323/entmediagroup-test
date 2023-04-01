import React from "react";
import { Pagination } from "@/components/blocks/Pagination/Pagination";
import { DefaultLayout } from "@/components/layouts/DefaultLayout/DefaultLayout";
import { ProductsGrid } from "@/components/sections/ProductsGrid/ProductsGrid";
import { IProduct } from "@/types/product";

interface HomepageProps {
  products: IProduct[];
  lastPage: number;
}

export const Homepage = (props: HomepageProps): JSX.Element => {
  const { products, lastPage } = props;
  return (
    <>
      <DefaultLayout>
        <ProductsGrid products={products} />
        <Pagination lastPage={lastPage} />
      </DefaultLayout>
    </>
  );
};
