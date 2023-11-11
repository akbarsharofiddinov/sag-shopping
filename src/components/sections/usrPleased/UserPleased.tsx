import { client1, product1 } from "@/assets";

const UserPleased = () => {
  return (
    <>
      <section className="section-usrPleased" id="clients">
        <div className="container">
          <h1 className="title">Наши довольные клиенты</h1>
          <div className="usersFeedback">
            <div className="userFeedback">
              <img src={product1} alt="feedback-product1" className="product" />
              <div className="inner">
                <div className="user">
                  <img src={client1} alt="client-avatar" className="avatar" />
                  <div>
                    <h1>Manzura Hayitova </h1>
                    <p>Mirzo Ulug’bek tumani, 16-uy</p>
                  </div>
                </div>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Blandit ipsum in elementum nunc, commodo pharetra. Rutrum cras
                  neque egestas dictumst aliquam consequat faucibus est mattis.
                  Pulvinar semper ipsum urna, tortor molestie ut. Diam ligula
                  magna pharetra risus. Rutrum cras neque egestas dictumst
                  aliquam consequat faucibus est mattis. Pulvinar semper ipsum
                  urna, tortor molestie ut. Diam ligula magna pharetra risus.
                </p>
              </div>
            </div>
            <div className="userFeedback">
              <img src={product1} alt="feedback-product1" className="product" />
              <div className="inner">
                <div className="user">
                  <img src={client1} alt="client-avatar" className="avatar" />
                  <div>
                    <h1>Manzura Hayitova </h1>
                    <p>Mirzo Ulug’bek tumani, 16-uy</p>
                  </div>
                </div>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Blandit ipsum in elementum nunc, commodo pharetra. Rutrum cras
                  neque egestas dictumst aliquam consequat faucibus est mattis.
                  Pulvinar semper ipsum urna, tortor molestie ut. Diam ligula
                  magna pharetra risus. Rutrum cras neque egestas dictumst
                  aliquam consequat faucibus est mattis. Pulvinar semper ipsum
                  urna, tortor molestie ut. Diam ligula magna pharetra risus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserPleased;
