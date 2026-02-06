import React from "react";

interface RouteParams {
  params: {
    id: string;
  };
}

const QuestionDetails = ({ params }: RouteParams) => {
  const { id } = params;

  return <div>Question Page: {id}</div>;
};

export default QuestionDetails;
