import { Select } from "antd";

const Rate = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
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
          <textarea placeholder="Ваше сообщение"></textarea>
          <button>Отправить</button>
        </form>
      </div>
    </section>
  );
};

export default Rate;
