import React, { useEffect, useState } from "react";
import { getCourses } from "../service/fakeCourseService";
import Card from "./Card";
import "./Card.css";

const Cards = ({ history }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const result = getCourses();
    //get Api calls here
    setCourses(result);
  }, []);

  return (
    <section className="cards__container">
      {courses.map((course) => (
        <Card course={course} history={history} />
      ))}
    </section>
  );
};

export default Cards;
