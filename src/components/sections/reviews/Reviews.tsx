import myAxios from "@/api";
import { client1, product1 } from "@/assets";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { setReviews } from "@/store/reviews/reviewSlice";
import { useEffect } from "react";

const Reviews = () => {
  const { reviews } = useAppSelector((state) => state.Reviews);
  const dispatch = useAppDispatch();

  async function getReviews() {
    try {
      const response = await myAxios.get("reviews");
      const data = await response.data;
      if (response.status === 200) {
        dispatch(setReviews(data.data));
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <>
      <section className="section-usrPleased" id="clients">
        <div className="container">
          <h1 className="title">Наши довольные клиенты</h1>
          <div className="usersFeedback">
            {reviews.map((review, index) => (
              <div className="userFeedback" key={`${review.full_name}_${index}`}>
                <div className="inner">
                  <div className="user">
                    <img src={client1} alt="client-avatar" className="avatar" />
                    <div>
                      <h1>{review.full_name}</h1>
                      <p>{review.address}</p>
                    </div>
                  </div>
                  <p className="desc">
                    {review.comment}
                  </p>
                </div>
                <img
                  src={review.img_url}
                  alt="feedback-product1"
                  className="product"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
