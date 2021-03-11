import React from "react";
import { AppContent, AppWrapper } from "./App.styles";

import "./App.styles.ts";
import { Step } from "./model/models";
import Instructions from "./views/Instructions";
import { Wizard } from "./views/Wizard/Wizard";

const App: React.FC = () => {
  const steps: Step[] = [
    {
      step: 0,
      title: "1",
      component: <>Paso 1</>,
    },
    {
      step: 1,
      title: "2",
      component: <>Paso 2</>,
    },
    {
      step: 2,
      title: "3",
      component: <>Paso 3</>,
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
