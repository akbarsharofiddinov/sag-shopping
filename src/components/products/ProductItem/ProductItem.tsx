import { useMainContext } from "@/hooks/useMainContext";
import { AiFillStar } from "react-icons/ai";

interface IProps {
  data: IProduct;
}

const ProductItem = ({ data: product }: IProps) => {
  const { setModal } = useMainContext()!;

  return (
    <div className="product" key={product.id}>
      <img src={product.img_url} alt="Product" />
      <div className="product-body">
        <div className="top">
          <h3 className="title">{product.sub_category_name}</h3>
          <span>{product.price} сум</span>
        </div>
        <p>ID / {product.product_id}</p>
        <p className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </p>
      </div>
      <button onClick={() => setModal(true)}>Купить</button>
    </div>
  );
};

export default ProductItem;
