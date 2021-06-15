import React from "react";
import { BiStar } from "react-icons/bi";
import "./Rating.css";

const Rating = ({ value, usersCount }) => {
  return (
    <div className="rating">
      <BiStar />
      <BiStar />
      <BiStar />
      <BiStar />
      <BiStar />
      <span>(1023)</span>
    </div>
  );
};

export default Rating;
