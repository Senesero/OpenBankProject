import React from "react";
import { Step } from "../../model/models";
import Button from "../components/Button/Button";
import {
  WizardWrapper,
  Circle,
  Triangle,
  HeaderdWrapper,
  StepWrapper,
  ContentWwapper,
  FooterWrapper,
} from "./Wizard.styles";
import { ReactComponent as SVG } from "../../assets/img/check.svg";
import Text from "../components/Text/Text";
import { theme } from "../../utils/theme/theme";
import { Line } from "../components/Line/Line.styles";

interface Props {
  steps: Step[];
}

export const Wizard: React.FC<Props> = ({ steps }) => {
  const [currrentStep, setCurrrentStep] = React.useState(1);

  const getColor = (index: number): string => {
    if (currrentStep - 1 === index) {
      return theme.colors.darkBlue;
    } else if (currrentStep - 1 >= index) {
      return theme.colors.primaryColor;
    }

    return theme.colors.stepperDisabled;
  };

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
                color={getColor(index)}
                width={30}
                height={5}
                margin="auto"
              />
            )}
          </>
        ))}
      </HeaderdWrapper>
      <ContentWwapper>
        {steps[currrentStep].title && (
          <Text isTitle bold inlineColor={theme.colors.lightBlue}>
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
