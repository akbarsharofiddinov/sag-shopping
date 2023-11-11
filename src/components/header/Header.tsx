import { LogoImg } from "@/assets";
import { useMainContext } from "@/hooks/useMainContext";
import { Switch, Modal } from "antd";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showMenuItems, setShowMenuItems] = useState(false);
  const { mode, setMode } = useMainContext()!;

  window.addEventListener("click", () => {
    setShowCategories(false);
  });

  const catalogs = [
    "Каталог-1",
    "Каталог-2",
    "Каталог-3",
    "Каталог-4",
    "Каталог-5",
  ];

  const landingNavigate = (section_id: string) => {
    setShowMenuItems(false);
    setTimeout(() => {
      scrollTo({
        top: document.getElementById(section_id)?.offsetTop,
      });
    }, 200);
  };

  const handleModebutton = (checked: boolean) => {
    localStorage.setItem("mode", JSON.stringify(checked));
    setMode(checked);
  };

  return (
    <>
      <header className={mode ? "header dark" : "header"}>
        <Modal />
        <div className="container">
          <div className="header-inner">
            <a href="/">
              <img src={LogoImg} alt="Logo" />
            </a>
            <div>
              <ul
                className={showMenuItems ? "header-menu show" : "header-menu"}
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
                  <ul
                    className={
                      showCategories ? "categories active" : "categories"
                    }
                  >
                    {catalogs.map((catalog, index) => (
                      // <li className="category" key={`${catalog}-${index}`}>
                      //   <a href="/shopping">{catalog}</a>
                      // </li>
                      <Link
                        to={"/shopping"}
                        key={index}
                        className="category"
                        onClick={() => setShowMenuItems(false)}
                      >
                        {catalog}
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
                onClick={() => setShowMenuItems(!showMenuItems)}
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
