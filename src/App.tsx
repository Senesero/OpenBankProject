import React from "react";
import { AppContent, AppWrapper } from "./App.styles";

import "./App.styles.ts";
import { Step } from "./model/models";
import Feedback from "./views/Feedback/Feedback";
import Form from "./views/Form/Form";
import Instructions from "./views/Instructions";
import ProductInformation from "./views/ProductInformation/ProductInformation";
import { Wizard } from "./views/Wizard/Wizard";

const App: React.FC = () => {
  const steps: Step[] = [
    {
      step: 0,
      title: "1",
      component: <ProductInformation />,
    },
    {
      step: 1,
      title: "2",
      component: <Form />,
    },
    {
      step: 2,
      title: "3",
      component: <Feedback />,
    },
  ];

  return (
    <AppWrapper>
      <AppContent>
        <Wizard steps={steps} />
        <Instructions />
      </AppContent>
    </AppWrapper>
  );
};

export default App;
