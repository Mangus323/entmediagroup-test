import { IProduct } from "@/types/product";
import { faker } from "@faker-js/faker";

const ProductAPI = {
  getProducts: (page: number) => {
    // page должен использоваться на сервере, но здесь используется revalidate для кэширования
    return new Promise(resolve => {
      let items: IProduct[] = new Array(10);

      for (let i = 0; i < 12; i++) {
        const random = Math.random();
        const badge = random < 0.33 ? "top" : random < 0.66 ? "new" : null;

        items[i] = {
          brand: faker.company.name(),
          id: faker.datatype.uuid(),
          title: faker.commerce.product(),
          image: "https://jjji.ru/720x1280",
          badge: badge
        };
      }

      resolve(items);
    });
  }
};

export default ProductAPI;
