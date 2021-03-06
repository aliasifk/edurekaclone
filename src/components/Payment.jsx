import React, { useEffect, useState } from "react";
import "./Payment.css";
import Paypal from "./Paypal";
import { RiVisaLine } from "react-icons/ri";
import { getCourse } from "../service/fakeCourseService";

const Payment = ({ match }) => {
  const [course, setCourse] = useState({});

  useEffect(() => {
    const result = getCourse(match.params.id);
    setCourse(result);
  }, []);

  return (
    <section className="payment">
      <body className="payment__info">
        <article className="window payment__process">
          <h3 className="payment__process__heading">Welcome Learner</h3>
          <p className="payment__process__info">
            You can now review your order and complete the purchase
          </p>
        </article>
        <article className="window payment__process">
          <h3 className="payment__process__heading">
            Batch Selection & Offers
          </h3>
        </article>
        <article className="window payment__process">
          <h3 className="payment__process__heading">Payment Details</h3>
          <p className="payment__process__info">Accepted mode of payments</p>
          <div>
            <RiVisaLine size="50" />
          </div>
          <Paypal
            description={course.title}
            amount={course.price * (1 - course.discount / 100) * (1 + 18 / 100)}
          />
        </article>
      </body>

      <article className="window payment__details">
        <p className="payment__details__heading">Order Summary</p>
        <div className="payment__details__fields">
          <div>Course Price:</div>
          <div>₹ {course.price}</div>
        </div>
        <div className="payment__details__fields discount">
          <div>Discount({course.discount}%):</div>
          <div>- ₹ {(course.price * course.discount) / 100}</div>
        </div>
        <div className="payment__details__fields total_price">
          <div>Total Price:</div>
          <div>₹ {course.price * (1 - course.discount / 100)}</div>
        </div>
        <div className="payment__details__fields">
          <div>GST(18%):</div>
          <div>₹ {(course.price * (1 - course.discount / 100) * 18) / 100}</div>
        </div>
        <div className="payment__details__fields netamount">
          <div>Net Payable Amount:</div>
          <b>₹ {course.price * (1 - course.discount / 100) * (1 + 18 / 100)}</b>
        </div>
      </article>
    </section>
  );
};

export default Payment;
