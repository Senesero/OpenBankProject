import React from "react";
import { Step } from "../../model/models";
import Button from "../../components/Button/Button";
import {
  WizardWrapper,
  Circle,
  Triangle,
  HeaderdWrapper,
  StepWrapper,
  ContentWwapper,
  FooterWrapper,
  ErrorTextWrapper,
  ErrorText,
} from "./Wizard.styles";
import { ReactComponent as SVG } from "../../assets/img/check.svg";
import Text from "../../components/Text/Text";
import { theme } from "../../utils/theme/theme";
import { Line } from "../../components/Line/Line.styles";
import { Snackbar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import { useTranslation } from "react-i18next";
interface Props {
  steps: Step[];
}

export const Wizard: React.FC<Props> = ({ steps }) => {
  const { t } = useTranslation();
  const [currrentStep, setCurrrentStep] = React.useState(0);
  const [showErrorSnackbar, setShowErrorSnackbar] = React.useState(false);
  const [errorSnackbar, setErrorSnackbar] = React.useState("");

  const dispatch = useDispatch();

  const getColor = (index: number): string => {
    if (currrentStep - 1 === index) {
      return theme.colors.darkBlue;
    } else if (currrentStep - 1 >= index) {
      return theme.colors.primaryColor;
    }

    return theme.colors.stepperDisabled;
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowErrorSnackbar(false);
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
            {t(steps[currrentStep].title)}
          </Text>
        )}
        {steps[currrentStep].component}
      </ContentWwapper>
      <FooterWrapper>
        <Button
          label={
            currrentStep === steps.length - 1
              ? "wizard.restartProcess"
              : "wizard.cancel"
          }
          onClick={() => {
            if (currrentStep === steps.length - 1) {
              dispatch(actions.updateAcceptConditions(false));
              setCurrrentStep(0);
            } else {
              currrentStep !== 0 && setCurrrentStep(currrentStep - 1);
            }
          }}
          disabled={currrentStep === 0}
          secondary
        />
        <Button
          label="wizard.next"
          onClick={() => {
            const onContinue = steps[currrentStep]?.onContinue;
            onContinue && onContinue();

            currrentStep !== steps.length - 1 &&
              setCurrrentStep(currrentStep + 1);
          }}
          disabled={currrentStep === steps.length - 1}
          primary
          isSubmit
          setShowErrorSnackbar={(error: string) => {
            setErrorSnackbar(error);
            setShowErrorSnackbar(true);
          }}
        />
      </FooterWrapper>
      <Snackbar
        open={showErrorSnackbar}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <ErrorTextWrapper>
          <ErrorText color={theme.colors.white} isSubtitle bold>
            {errorSnackbar}
          </ErrorText>
        </ErrorTextWrapper>
      </Snackbar>
    </WizardWrapper>
  );
};
