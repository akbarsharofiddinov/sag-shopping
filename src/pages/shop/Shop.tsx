import myAxios from "@/api";
import { Filter, Products } from "@/components";
import { useAppDispatch } from "@/store/hooks/hooks";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  setSelectedCategory,
  setSubCategories,
} from "@/store/categories/categorieSlice";

const Shop = () => {
  // ================================================================
  const dispatch = useAppDispatch();

  // ===============================================================

  // API Request

  const { slug } = useParams();

  async function getSubCategories() {
    try {
      const response = await myAxios.get(
        `sub-categories?category_slug=${slug}`
      );
      const data = await response.data;

      if (response.status === 200) {
        dispatch(setSubCategories(data.data));
        dispatch(setSelectedCategory(data.message));
      }
    } catch (error) {
      console.log(error);
    }
  }

  // ===================================================================


  useEffect(() => {
    getSubCategories();
  }, []);

    return (

        <section className="shop-page">
          <div className="container">

            <div className="section-inner">
              <Filter />
              <Products />
            </div>
            
          </div>
        </section>
      
    );
};

export default Shop;
