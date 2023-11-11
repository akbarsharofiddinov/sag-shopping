import ProductItem from "./ProductItem/ProductItem";
import { Filter } from "..";

const Products = () => {
  const products: IProduct[] = [
    {
      id: 1,
      name: "Isfaxon",
      price: 1298000,
      product_id: "HN12345_YJ32",
      rate: 5,
    },
    {
      id: 2,
      name: "Isfaxon",
      price: 1298000,
      product_id: "HN12345_YJ32",
      rate: 5,
    },
    {
      id: 3,
      name: "Isfaxon",
      price: 1298000,
      product_id: "HN12345_YJ32",
      rate: 5,
    },
    {
      id: 4,
      name: "Isfaxon",
      price: 1298000,
      product_id: "HN12345_YJ32",
      rate: 5,
    },
    {
      id: 5,
      name: "Isfaxon",
      price: 1298000,
      product_id: "HN12345_YJ32",
      rate: 5,
    },
    {
      id: 6,
      name: "Isfaxon",
      price: 1298000,
      product_id: "HN12345_YJ32",
      rate: 5,
    },
    {
      id: 7,
      name: "Isfaxon",
      price: 1298000,
      product_id: "HN12345_YJ32",
      rate: 5,
    },
  ];

  // const getProducts = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5500/products");
  //     const data = await response.json();
  //     if (response.status === 200) {
  //       setProducts([...data]);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <section className="section-products">
      <div className="container">
        <h1 className="title">Наши товары</h1>
        {products ? (
          <div className="section-inner">
            <Filter />
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
    </section>
  );
};

export default Products;
