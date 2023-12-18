import { Outlet } from "react-router-dom";
import { Footer, Header, MyModal } from "..";
import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useMainContext } from "@/hooks/useMainContext";

const Layout = () => {
  const [showToTopBtn, setShowToTopBtn] = useState(true);
  const { mode } = useMainContext()!;

  useEffect(() => {
    if (pageYOffset < 550) {
      setShowToTopBtn(false);
    }
  }, []);

  window.addEventListener("scroll", () => {
    if (pageYOffset >= 550) {
      setShowToTopBtn(true);
    } else if (pageYOffset < 550) {
      setShowToTopBtn(false);
    }
  });

  return (
    <div className={mode ? "layout dark" : "layout"}>
      <MyModal children={undefined} />
      <Header />
      <div style={{ minHeight: "72vh" }}>
        <Outlet />
      </div>
      <Footer />

      <button
        className={showToTopBtn ? "toTopButton active" : "toTopButton"}
        onClick={() => {
          scrollTo(0, 0);
        }}
      >
        <AiOutlineArrowUp />
      </button>
    </div>
  );
};

export default Layout;
