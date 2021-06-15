import React from "react";
import { BiStar } from "react-icons/bi";
import "./Rating.css";

const Rating = ({ value, studentsCount }) => {
  return (
    <section className="rating">
      <BiStar />
      <BiStar />
      <BiStar />
      <BiStar />
      <BiStar />
      <span className="rating__value">{value}</span>
      <span className="rating__students">{studentsCount}</span>
    </section>
  );
};

export default Rating;
