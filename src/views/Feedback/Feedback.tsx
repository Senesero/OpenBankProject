import { CircularProgress } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import Text from "../../components/Text/Text";
import { WizardProfileState } from "../../redux/configureStore";
import {
  ContentWrapper,
  IconWrapper,
  SuccessIcon,
  ErrorIcon,
} from "./Feedback.styles";
import { useTranslation } from "react-i18next";

const Feedback: React.FC = () => {
  const { t } = useTranslation();
  const isLoading = useSelector((store: WizardProfileState) => store.isLoading);
  const apiResponse = useSelector(
    (store: WizardProfileState) => store.apiResponse
  );

  const isSuccess = apiResponse === 200;
  const title = isSuccess ? "feedback.success.title" : "feedback.error.title";
  const subtitle = isSuccess ? "feedback.success.text" : "feedback.error.text";

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <ContentWrapper>
      <IconWrapper>{isSuccess ? <SuccessIcon /> : <ErrorIcon />}</IconWrapper>
      <div>
        <Text isSubtitle bold>
          {t(title)}
        </Text>
        <Text>{t(subtitle)}</Text>
      </div>
    </ContentWrapper>
  );
};

export default Feedback;
