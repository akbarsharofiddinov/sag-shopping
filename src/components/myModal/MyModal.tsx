import { useMainContext } from "@/hooks/useMainContext";
import { Button, Modal } from "antd";

const MyModal = () => {
  const { modal, setModal } = useMainContext()!;

  const handleBuy = () => {
    console.log("Buying...");
    setModal(false);
  };

  const handleCancel = () => {
    setModal(false);
  };

  return (
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
  );
};

export default MyModal;
