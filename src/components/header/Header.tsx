// * react
import { useEffect, useState } from "react";

// * context - hook
import { useMainContext } from "@/hooks/useMainContext";

// * router
import { Link, NavLink } from "react-router-dom";

// * images
import { LogoImg } from "@/assets";

// * components (icons)
import { Switch, Modal } from "antd";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

// API
import axios from "../../api";

// Store
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { setCategories } from "../../store/categories/categorieSlice";

// ====================================================================

const Header = () => {
  const [categorieState, setCategorieState] = useState<ICategories[]>([]);
  const [showCategories, setShowCategories] = useState(false);
  const [showMenuItems, setShowMenuItems] = useState(false);
  const { mode, setMode } = useMainContext()!;

  // ===============================================================

  // Store - hooks
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.Categories);

  window.addEventListener("click", () => {
    setShowCategories(false);
    setShowMenuItems(false);
  });

  // Navigating
  const landingNavigate = (section_id: string) => {
    setShowMenuItems(false);
    setTimeout(() => {
      scrollTo({
        top: document.getElementById(section_id)?.offsetTop,
      });
    }, 200);
  };

  // Theme change button
  const handleModebutton = (checked: boolean) => {
    localStorage.setItem("mode", JSON.stringify(checked));
    setMode(checked);
  };

  async function getCategories() {
    try {
      const response = await axios.get("categories");
      const data = await response.data;

      if (response.status === 200) {
        dispatch(setCategories(data.data));
        setCategorieState(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategories();
    setCategorieState(categories);
  }, []);

  return (
    <>
      <header className={mode ? "header dark" : "header"}>
        <Modal />
        <div className="container">
          <div className="header-inner">
            <a href="/" className="logo">
              <img src={LogoImg} alt="Logo" />
            </a>
            <div>
              <ul
                className={showMenuItems ? "header-menu show" : "header-menu"}
                onClick={(event) => event.stopPropagation()}
              >
                {showMenuItems ? (
                  <h1
                    className="menu-title"
                    onClick={() => setShowMenuItems(false)}
                  >
                    Close
                  </h1>
                ) : (
                  ""
                )}
                <button
                  className="header-menu_item"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowCategories(!showCategories);
                  }}
                >
                  Каталог
                  <IoIosArrowDown />
                  <ul
                    className={
                      showCategories && showMenuItems
                        ? "categories active"
                        : "categories"
                    }
                  >
                    {categorieState.map((category, index) => (
                      <Link
                        to={`/shopping/${category.slug}`}
                        key={index}
                        className="category"
                        onClick={() => setShowMenuItems(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </ul>
                </button>
                <li className="header-menu_item">
                  <NavLink to="/" onClick={() => landingNavigate("clients")}>
                    Довольные клиенты
                  </NavLink>
                </li>
                <li className="header-menu_item">
                  <NavLink to="/" onClick={() => landingNavigate("rate")}>
                    Оцените нас
                  </NavLink>
                </li>
                <li className="header-menu_item">
                  <NavLink to="/" onClick={() => landingNavigate("about")}>
                    О нас{" "}
                  </NavLink>
                </li>
              </ul>
              <Switch checked={mode} onChange={handleModebutton} />
              <button
                className="bar-menu"
                onClick={(event) => {
                  event.stopPropagation();
                  setShowMenuItems(!showMenuItems);
                }}
              >
                <AiOutlineMenu />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
