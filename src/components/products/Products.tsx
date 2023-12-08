import { useAppSelector } from "@/store/hooks/hooks";
import ProductItem from "./ProductItem/ProductItem";
import myAxios from "@/api";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>();
  const { selectedSubCategoryID } = useAppSelector((state) => state.Categories);

  async function getProducts() {
    if (selectedSubCategoryID.id) {
      try {
        const response = await myAxios.get(
          `products?sub_category_id=${selectedSubCategoryID.id}&sub_category_slug=${selectedSubCategoryID.slug}`
        );
        const data = await response.data;
        if (response.status === 200) {
          setProducts([...data.data]);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    getProducts();
  }, [selectedSubCategoryID]);

  return (
    <main className="section-products">
      <div className="container">
        <h1 className="title">Наши товары: {}</h1>
        {products ? (
          <div className="section-inner">
            <div className="products-box">
              {products.map((product) => (
                <ProductItem key={product.id} data={product} />
              ))}
            </div>
          </div>
        ) : (
          <h1>No Products</h1>
        )}
      </div>
    </main>
  );
};

export default Products;
