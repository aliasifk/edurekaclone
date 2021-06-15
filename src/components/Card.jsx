import React, { useState } from "react";
import "./Card.css";
import Rating from "./Rating";

import { SiAmazonaws } from "react-icons/si";

const Card = ({ name, details, rating, count, nextBatch }) => {
  const [isHovered, setHover] = useState(false);

  return (
    <article
      className="card clickable"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <head className="card__header">
        <SiAmazonaws className="card__header__icon" size="100" />
        AWS Certification Training - Solutions Architect
      </head>
      <body className="card__body">
        <p>AWS Certification Training - Solutions Arc..</p>
        <span className="card__body__review">Review</span>
        <Rating />
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
            <li>Introduction</li>
            <li>Deployment</li>
            <li>Experience</li>
          </ul>
          <button className="card__hover__btn">View Details</button>
        </section>
      )}
    </article>
  );
};

export default Card;
