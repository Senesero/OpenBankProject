import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppContent, AppWrapper } from "./App.styles";

import "./App.styles.ts";
import { Step } from "./model/models";
import Feedback from "./views/Feedback/Feedback";
import Form from "./views/Form/Form";
// import Instructions from "./views/Instructions";
import ProductInformation from "./views/ProductInformation/ProductInformation";
import { Wizard } from "./views/Wizard/Wizard";
import * as actions from "./redux/actions";
import { WizardProfileState } from "./redux/configureStore";

const App: React.FC = () => {
  const password = useSelector((store: WizardProfileState) => store.password);
  const dispatch = useDispatch();

  const steps: Step[] = [
    {
      step: 1,
      title: "wizard.stepTitle",
      component: <ProductInformation />,
    },
    {
      step: 2,
      title: "wizard.stepTitle",
      component: <Form />,
      onContinue: () => {
        dispatch(actions.updateLoading(true));
        dispatch(actions.apiResponseRequest(password));
      },
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
        {/* <Instructions /> */}
      </AppContent>
    </AppWrapper>
  );
};

export default App;
