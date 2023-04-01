import ProductAPI from "@/api/ProductAPI";
import { Homepage } from "@/components/pages/Homepage";

export default Homepage;

export async function getStaticProps() {
  const products = await ProductAPI.getProducts(1);
  return {
    props: {
      products,
      lastPage: 10
    },
    revalidate: 360
  };
}
