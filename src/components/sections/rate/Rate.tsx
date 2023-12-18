import { Select } from "antd";
import { useState } from "react";

const Rate = () => {
  const [worker, setWorker] = useState("Lucy");
  const [message, setMessage] = useState("");

  const handleChange = (value: string) => {
    setWorker(value);
  };

  return (
    <section className="section-rate" id="rate">
      <div className="container">
        <h1 className="title">Оцените нас !</h1>
        <form>
          <div className="rating-box">
            <Select
              defaultValue="lucy"
              style={{ width: "60%" }}
              onChange={handleChange}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
              value={worker}
            />
            <div className="rate-scores">
              <p>Оцените нас:</p>
              <ul>
                <li>😡</li>
                <li>😕</li>
                <li>😊</li>
                <li>🤩</li>
              </ul>
            </div>
          </div>
          <textarea
            id="message"
            placeholder="Ваше сообщение"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            onClick={(e) => {
              e.preventDefault();
              alert(`Сообщение для ${worker} успешно отправлено
Сообщение: ${message}
              `);
            }}
          >
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
};

export default Rate;
