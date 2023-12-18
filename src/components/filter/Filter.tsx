import { setSelectedCategoryID } from "@/store/categories/categorieSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Filter = () => {
  const { selectedCategory, subCategories, selectedSubCategoryID } =
    useAppSelector((state) => state.Categories);

  const category = selectedCategory.split(" ");

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (subCategories.length > 0) {
      const defaultSubCategory = subCategories[0];
      dispatch(
        setSelectedCategoryID({
          id: defaultSubCategory.id,
          slug: defaultSubCategory.slug,
        })
      );
    }
  }, [selectedCategory]);

  return (
    <div className="filter">
      <p className="title-filter">
        <Link to={"/"}>{<IoIosArrowBack />}Все категории</Link>
      </p>
      <p className="selected-category">
        Категория - {category[category.length - 1]}
      </p>
      <ul className="subCategories-menu">
        {subCategories.map((subCategory, index) => (
          <li
            className={
              selectedSubCategoryID.id === subCategory.id
                ? "category active"
                : "category"
            }
            key={`${subCategory.name}_${index}`}
            onClick={() =>
              dispatch(
                setSelectedCategoryID({
                  id: subCategory.id,
                  slug: subCategory.slug,
                })
              )
            }
          >
            {subCategory.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
