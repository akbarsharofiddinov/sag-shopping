import { useMainContext } from "@/hooks/useMainContext";
import { Button, Modal } from "antd";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const MyModal: React.FC<IProps> = ({ children }) => {
  const { setModal, productID } = useMainContext()!;

  window.addEventListener("keydown", (e) => {
    if (e.keyCode === 27) {
      setModal(false);
    }
  });

  const { modal } = useMainContext()!;

  const handleBuy = () => {
    alert("Товар куплен")
    setModal(false);
  };

  const handleCancel = () => {
    setModal(false);
  };

  return (
    <>
      <div
        className={modal ? "modal active" : "modal"}
        onClick={() => setModal(false)}
      >
        <div
          className="modal-inner"
          onClick={(e) => e.stopPropagation()}
          style={productID ? {} : { backgroundColor: "transparent" }}
        >
          {productID ? (
            <Modal
              title="Xarid qilish"
              open={modal}
              onCancel={handleCancel}
              footer={[
                <Button key={"Yuborish"} type="primary" onClick={handleBuy}>
                  Yuborish
                </Button>,
              ]}
            >
              <form className="modal-form">
                <input type="text" placeholder="Ism" />
                <input type="tel" placeholder="Telefon raqam" />
              </form>
            </Modal>
          ) : (
            <>{children}</>
          )}
        </div>
      </div>
    </>
  );
};

export default MyModal;
