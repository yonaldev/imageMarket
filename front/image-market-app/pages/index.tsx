import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";

// Components
import { default as Layout } from "../components/layouts";
import { default as ListProducts } from "../components/ListProducts";
import { default as Search } from "../components/Search";

// Services
import { searchProduct } from "../services/ProductService";

// Types
import { Product } from "../types/Product.types";

const Home: NextPage = () => {
  const [products, setProducts] = useState<Array<Product>>([]);

  const handleOnChange = async (event: any) => {
    const input = event.target.value;

    if (input.length > 1) {
      const { result } = await searchProduct(input);
      setProducts(result);
    }

    if (input.length === 0) setProducts([]);
  };

  return (
    <Layout>
      <div className="flex">
        <div style={{ minWidth: 400 }}>
          <Image
            src="/assets/products.jpg"
            alt="Imagen de productos de ropa"
            height={580}
            width={400}
          />
        </div>
        <div className="flex flex-col w-full items-center">
          <Search handleOnChange={handleOnChange} />
          <ListProducts products={products} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
