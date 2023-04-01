import ProductAPI from "@/api/ProductAPI";
import { Homepage } from "@/components/pages/Homepage";

export default Homepage;

// Из-за отсутствующего бэка
const totalPages = 10;

export async function getStaticProps(ctx) {
  const products = await ProductAPI.getProducts(+ctx.params.page);
  return {
    props: {
      products,
      lastPage: totalPages
    },
    revalidate: 360
  };
}

export async function getStaticPaths() {
  const paths = Array.from({ length: totalPages }).map((_, index) => ({
    params: { page: (index + 1).toString() }
  }));

  return {
    paths: paths,
    fallback: false
  };
}
