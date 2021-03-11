import React from "react";
import { Step } from "../../model/models";
import {
  WizardWrapper,
  Circle,
  Line,
  Triangle,
  HeaderdWrapper,
  StepWrapper,
  ContentWwapper,
} from "./Wizard.styles";

interface Props {
  steps: Step[];
}

export const Wizard: React.FC<Props> = ({ steps }) => {
  return (
    <WizardWrapper>
      <HeaderdWrapper>
        {steps.map((step, index) => (
          <>
            <StepWrapper>
              <Circle>{step.title}</Circle>
              <Triangle />
            </StepWrapper>
            {index + 1 !== steps.length && <Line />}
          </>
        ))}
      </HeaderdWrapper>
      <ContentWwapper></ContentWwapper>
    </WizardWrapper>
  );
};
