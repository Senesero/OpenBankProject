import React from "react";
import { containCapitalLetters, containNumber } from "../../utils/strings";
import ClueField from "../components/ClueField/ClueField";
import PasswordField from "../components/PasswordField/PasswordField";
import Text from "../components/Text/Text";
import { PasswordWrapper } from "./Form.styles";

interface Props {
  updatePassword: (password: string) => void;
}

const FormComponent: React.FC<Props> = ({ updatePassword }) => {
  const [password, setPassword] = React.useState("");
  const [erroPassword, setErroPassword] = React.useState("");
  const [confirmationPassword, setConfirmationPassword] = React.useState("");
  const [
    errorConfirmationPassword,
    setErrorConfirmationPassword,
  ] = React.useState("");
  const [clue, setClue] = React.useState("");

  React.useEffect(() => {
    if (password.length > 0) {
      let withError = false;
      let error = "La contraseña tiene que contener: ";

      if (password.length < 8) {
        withError = true;
        error = error + "mínimo 8 caracteres, ";
      }

      if (!containCapitalLetters(password)) {
        withError = true;
        error = error + "al menos una mayúscula, ";
      }

      if (!containNumber(password)) {
        withError = true;
        error = error + "al menos un número,";
      }

      if (withError) {
        setErroPassword(error);
      } else {
        setErroPassword("");
      }
    } else {
      setErroPassword("");
    }
    updatePassword(password);
  }, [password]);

  React.useEffect(() => {
    if (confirmationPassword.length > 0) {
      if (confirmationPassword !== password) {
        setErrorConfirmationPassword("Las contraseñas no coinciden");
      } else {
        setErrorConfirmationPassword("");
      }
    }
  }, [password, confirmationPassword]);

  return (
    <>
      <Text>
        En primer lugar, debes crear una contraseña diferente para sus
        pertenencias electrónicas.
      </Text>
      <Text>No podrás recuperar tu contraseña, asi que recuérdala bien.</Text>
      <PasswordWrapper>
        <PasswordField
          title="Crea tu Contraseña Maestra"
          placeholder="Introduce tu contraseña"
          setInputValue={setPassword}
          setError={erroPassword}
        />
        <PasswordField
          title="Repite tu Contraseña Maestra"
          placeholder="Repite tu contraseña"
          setInputValue={setConfirmationPassword}
          setError={errorConfirmationPassword}
        />
      </PasswordWrapper>
      <Text>
        También puedes crear una pista que te ayude a recordar tu contraseña
        maestra.
      </Text>
      <ClueField
        title="Crea tu pista para recordar tu contraseña (opcional)"
        placeholder="Introduce tu pista"
        setInputValue={setClue}
        tooltipText="Texto de información"
      />
    </>
  );
};

export default FormComponent;
