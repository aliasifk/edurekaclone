import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCourse } from "../service/fakeCourseService";

import "./SubjectPage.css";

const SubjectPage = ({ match, history }) => {
  const [course, setCourse] = useState({});

  useEffect(() => {
    const result = getCourse(match.params.id);
    setCourse(result);
  }, []);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <article className="course-details">
      <h3>Instructor-led DevOps Certification Training live online classes</h3>
      <section className="course-details__container">
        <table className="course-details__table">
          {course.batch &&
            course.batch.map((b) => {
              const date = new Date(b.date);

              const month = monthNames[date.getMonth()]
                .substring(0, 3)
                .toUpperCase();

              return (
                <tr
                  className={`course-details__table__row ${
                    b.status === "SOLD OUT" && "disabled"
                  }`}
                >
                  <td className="course-details__table__c1">{`${month} ${date.getDate()}`}</td>
                  <td className="course-details__table__c2">
                    {b.day}
                    {b.info && b.info !== "" && (
                      <span className="course-details__table__c2__info">
                        {b.info}
                      </span>
                    )}
                  </td>
                  <td className="course-details__table__c3">
                    {b.status && b.status !== "NORMAL" && (
                      <span className="course-details__table__c3__info">
                        {b.status}
                      </span>
                    )}
                    {`Timings - ${b.timings}`}
                  </td>
                </tr>
              );
            })}
        </table>
        <section className="course-details__pricing">
          <span className="course-details__pricing__head">Course Price at</span>
          <section className="course-details__pricing__prices">
            <span className="discounted">₹{course.price}</span>
            <span className="total">
              ₹{course.price * (1 - course.discount / 100)}
            </span>
          </section>
          <span className="course-details__pricing__offerdetails">10% OFF</span>
          <button
            className="course-details__pricing__button"
            onClick={() => {
              history.push(`/payments/${course._id}`);
            }}
          >
            ENROLL NOW
          </button>
        </section>
      </section>
    </article>
  );
};

export default SubjectPage;
