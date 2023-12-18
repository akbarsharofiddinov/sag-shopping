import { useMainContext } from "@/hooks/useMainContext";
import { AiFillStar } from "react-icons/ai";

interface IProps {
  data: IProduct;
  setSelectedImg: React.Dispatch<React.SetStateAction<string>>;
}

const ProductItem = ({ data: product, setSelectedImg }: IProps) => {
  const { setModal, setProductID } = useMainContext()!;

  return (
    <>
      <div className="product" key={product.id}>
        <img
          src={product.img_url}
          alt="Product"
          onClick={() => {
            setModal(true);
            setSelectedImg(product.img_url);
          }}
        />
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
        <button
          onClick={() => {
            setModal(true);
            setProductID(product.id);
          }}
        >
          Купить
        </button>
      </div>
    </>
  );
};

export default ProductItem;
