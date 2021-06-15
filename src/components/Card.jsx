import React, { useState, useEffect } from "react";
import "./Card.css";
import Rating from "./Rating";
import { Link } from "react-router-dom";

import { SiAmazonaws } from "react-icons/si";

const Card = ({ course, history }) => {
  const [isHovered, setHover] = useState(false);

  return (
    <article
      className="card clickable"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => history.push(`/courses/${course._id}`)}
    >
      <head
        className="card__header"
        style={{ background: `linear-gradient${course.skin}` }}
      >
        <SiAmazonaws className="card__header__icon" size="100" />
        {course.title.toUpperCase()}
      </head>

      <body className="card__body">
        <p>{course.title}</p>
        <span className="card__body__review">Review</span>
        <Rating value={course.rating} studentsCount={course.students} />
      </body>

      {isHovered && (
        <section className="card__hover">
          <span className="card__hover__head">Next Batch</span>
          <span className="card__hover__batch">
            In 4 days -
            <span className="card__hover__batch__date"> 19th june</span>
          </span>

          <span className="card__hover__head"> What Will I learn? </span>

          <ul className="card__hover__details">
            {course.details &&
              course.details.length > 0 &&
              course.details.map((item) => <li>{item}</li>)}
          </ul>
          <button className="card__hover__btn">View Details</button>
        </section>
      )}
    </article>
  );
};

export default Card;
