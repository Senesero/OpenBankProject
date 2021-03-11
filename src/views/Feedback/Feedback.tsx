import React from "react";

interface Props {
  isSuccess?: boolean;
}

const Feedback: React.FC<Props> = ({ isSuccess }) => {
  return <>Feedback {isSuccess}</>;
};

export default Feedback;
