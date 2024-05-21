import { usageInfo1, usageInfo2, usageInfo3 } from "@/assets";

const AdditionalInfo = () => {
  return (
    <section className="section-additional-info">
      <div className="container">
        <h1 className="title" style={{ width: "400px", fontSize: 28 }}>
          Полезная информация о правильной стирке и использовании ковра.
        </h1>
        <div className="info-boxes">
          <div className="info-box">
            <div className="info-doc">
              <h1 className="title">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Magnam, quasi?
              </h1>
              <p className="desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
                natus eligendi adipisci nobis debitis porro similique cum
                reprehenderit. Illum quo cumque temporibus non? Voluptatum et
                hic ad illum libero, sint cupiditate fugiat, asperiores
                voluptates molestiae eos repellat. Adipisci atque velit deleniti
                doloremque beatae, pariatur non debitis et numquam molestiae
                praesentium excepturi ipsa soluta nostrum voluptatibus facere
                iusto. Praesentium, tempora. Eius!
              </p>
            </div>
            <div className="img-box">
              <img src={usageInfo1} alt="product" />
            </div>
          </div>
          <div className="info-box">
            <div className="info-doc">
              <h1 className="title">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </h1>
              <p className="desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
                natus eligendi adipisci nobis debitis porro similique cum
                reprehenderit. Illum quo cumque temporibus non? Voluptatum et
                hic ad illum libero, sint cupiditate fugiat, asperiores
                voluptates molestiae eos repellat. Adipisci atque velit deleniti
                doloremque beatae, pariatur non debitis et numquam molestiae
                praesentium excepturi ipsa soluta nostrum voluptatibus facere
                iusto. Praesentium, tempora. Eius!
              </p>
            </div>
            <div className="img-box">
              <img src={usageInfo2} alt="product" />
            </div>
          </div>
          <div className="info-box">
            <div className="info-doc">
              <h1 className="title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum.
              </h1>
              <p className="desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
                natus eligendi adipisci nobis debitis porro similique cum
                reprehenderit. Illum quo cumque temporibus non? Voluptatum et
                hic ad illum libero, sint cupiditate fugiat, asperiores
                voluptates molestiae eos repellat. Adipisci atque velit deleniti
                doloremque beatae, pariatur non debitis et numquam molestiae
                praesentium excepturi ipsa soluta nostrum voluptatibus facere
                iusto. Praesentium, tempora. Eius!
              </p>
            </div>
            <div className="img-box">
              <img src={usageInfo3} alt="product" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
