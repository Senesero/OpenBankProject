import React from "react";
import { AppContent, AppWrapper } from "./App.styles";

import "./App.styles.ts";
import { Step } from "./model/models";
import { Feedback } from "./views/Feedback/FeedbackContainer";
import { Form } from "./views/Form/FormContainer";
import Instructions from "./views/Instructions";
import { ProductInformation } from "./views/ProductInformation/ProductInformationContainer";
import { Wizard } from "./views/Wizard/WizardContainer";

const App: React.FC = () => {
  const steps: Step[] = [
    {
      step: 1,
      title: "Crea tu Password Manager",
      component: <ProductInformation />,
    },
    {
      step: 2,
      title: "Crea tu Password Manager",
      component: <Form />,
    },
    {
      step: 3,
      title: "",
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
