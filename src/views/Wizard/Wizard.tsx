import React from "react";
import { Step } from "../../model/models";
import Button from "../components/Button/Button";
import {
  WizardWrapper,
  Circle,
  Line,
  Triangle,
  HeaderdWrapper,
  StepWrapper,
  ContentWwapper,
  FooterWrapper,
} from "./Wizard.styles";
import { ReactComponent as SVG } from "../../assets/img/check.svg";
import Text from "../components/Text/Text";
import { theme } from "../../utils/theme/theme";

interface Props {
  steps: Step[];
}

export const Wizard: React.FC<Props> = ({ steps }) => {
  const [currrentStep, setCurrrentStep] = React.useState(0);

  return (
    <WizardWrapper>
      <HeaderdWrapper>
        {steps.map((step, index) => (
          <>
            <StepWrapper key={index}>
              <Circle
                isCurrentStep={currrentStep === index}
                isCompleteStep={currrentStep > index}
              >
                {currrentStep <= index ? step.step : <SVG fill="white" />}
              </Circle>
              {currrentStep === index && <Triangle />}
            </StepWrapper>
            {index + 1 !== steps.length && (
              <Line
                isCurrentStep={currrentStep - 1 === index}
                isCompleteStep={currrentStep - 1 >= index}
              />
            )}
          </>
        ))}
      </HeaderdWrapper>
      <ContentWwapper>
        {steps[currrentStep].title && (
          <Text isTitle inlineColor={theme.colors.lightBlue}>
            {steps[currrentStep].title}
          </Text>
        )}
        {steps[currrentStep].component}
      </ContentWwapper>
      <FooterWrapper>
        <Button
          label="Cancelar"
          onClick={() =>
            currrentStep !== 0 && setCurrrentStep(currrentStep - 1)
          }
          disabled={currrentStep === 0}
          secondary
        />
        <Button
          label="Siguiente >"
          onClick={() =>
            currrentStep !== steps.length - 1 &&
            setCurrrentStep(currrentStep + 1)
          }
          disabled={currrentStep === steps.length - 1}
          primary
        />
      </FooterWrapper>
    </WizardWrapper>
  );
};
