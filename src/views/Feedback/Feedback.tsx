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

const Feedback: React.FC = () => {
  const isLoading = useSelector((store: WizardProfileState) => store.isLoading);
  const apiResponse = useSelector(
    (store: WizardProfileState) => store.apiResponse
  );

  const isSuccess = apiResponse === 200;
  const title = isSuccess
    ? "¡Tu Password Manager ya está creado!"
    : "Ha habido un error";
  const subtitle = isSuccess
    ? "Contaseña Maestra modificada con éxito. A partir de ahora puedes usar la contraseña para acceder a...."
    : "No hemos podido modificar tu Contraseña Maestra. Inténtelo más tarde.";

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <ContentWrapper>
      <IconWrapper>{isSuccess ? <SuccessIcon /> : <ErrorIcon />}</IconWrapper>
      <div>
        <Text isSubtitle bold>
          {title}
        </Text>
        <Text>{subtitle}</Text>
      </div>
    </ContentWrapper>
  );
};

export default Feedback;
