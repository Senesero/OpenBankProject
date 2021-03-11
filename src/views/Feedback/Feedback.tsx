import React from "react";

import success from "./success.png";
import error from "./error.png";

interface Props {
  isSuccess?: boolean;
}

const Step3: React.FC<Props> = ({ isSuccess }) => {
  return <img alt="" src={isSuccess ? success : error} />;
};

export default Step3;
