import { useAppSelector } from "@/store/hooks/hooks";
import { Link } from "react-router-dom";

const Categories = () => {
  const { categories } = useAppSelector((state) => state.Categories);

  return (
    <section className="section-category">
      <div className="container">
        <h1 className="title">Наш каталог</h1>
        <div className="categories">
          {categories.map((category, index) => (
            <Link
              to={`/shopping/${category.slug}`}
              key={index}
              style={{ backgroundImage: `url(${category.img_url})` }}
            >
              <div className="category">
                <h1>{category.name}</h1>
                <img src={category.img_url} alt="category" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
