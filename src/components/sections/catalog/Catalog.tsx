import { CatalogImg } from "@/assets";
import { Link } from "react-router-dom";

const Catalog = () => {
  return (
    <section className="section-catalog">
      <div className="container">
        <h1 className="title">Наш каталог</h1>
        <div className="catalogs">
          <Link to="/shopping">
            <div className="catalog">
              <h1>Ковры</h1>
              <img src={CatalogImg} alt="" />
            </div>
          </Link>
          <Link to="/shopping">
            <div className="catalog">
              <h1>Ковры</h1>
              <img src={CatalogImg} alt="" />
            </div>
          </Link>
          <Link to="/shopping">
            <div className="catalog">
              <h1>Ковры</h1>
              <img src={CatalogImg} alt="" />
            </div>
          </Link>
          <Link to="/shopping">
            <div className="catalog">
              <h1>Ковры</h1>
              <img src={CatalogImg} alt="" />
            </div>
          </Link>
          <Link to="/shopping">
            <div className="catalog">
              <h1>Ковры</h1>
              <img src={CatalogImg} alt="" />
            </div>
          </Link>
          <Link to="/shopping">
            <div className="catalog">
              <h1>Ковры</h1>
              <img src={CatalogImg} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
