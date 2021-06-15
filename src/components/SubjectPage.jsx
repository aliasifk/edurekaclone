import React from "react";

const SubjectPage = ({ match }) => {
  return `Subject : ${match.params.id}`;
};

export default SubjectPage;
