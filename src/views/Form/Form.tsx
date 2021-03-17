import React from "react";
import { containCapitalLetters, containNumber } from "../../utils/strings";
import ClueField from "../../components/ClueField/ClueField";
import PasswordField from "../../components/PasswordField/PasswordField";
import Text from "../../components/Text/Text";
import { PasswordWrapper } from "./Form.styles";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import { useTranslation } from "react-i18next";

const Form: React.FC = () => {
  const { t } = useTranslation();
  const [password, setPassword] = React.useState("");
  const [errorPassword, setErrorPassword] = React.useState("");
  const [confirmationPassword, setConfirmationPassword] = React.useState("");
  const [
    errorConfirmationPassword,
    setErrorConfirmationPassword,
  ] = React.useState("");
  const [clue, setClue] = React.useState("");

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (password.length > 0) {
      let withError = false;
      let error = t("form.inputError.text");

      if (password.length < 8) {
        withError = true;
        error = error + t("form.inputError.minimumCharacters");
      }

      if (!containCapitalLetters(password)) {
        withError = true;
        error = error + t("form.inputError.aCapitalLetter");
      }

      if (!containNumber(password)) {
        withError = true;
        error = error + t("form.inputError.aNumber");
      }

      if (withError) {
        setErrorPassword(error);
        dispatch(actions.updatePassword(""));
      } else {
        setErrorPassword("");
        if (!errorConfirmationPassword) {
          dispatch(actions.updatePassword(password));
        }
      }
    } else {
      setErrorPassword("");
      dispatch(actions.updatePassword(password));
    }
  }, [password]);

  React.useEffect(() => {
    if (confirmationPassword.length > 0) {
      if (confirmationPassword !== password) {
        setErrorConfirmationPassword(t("form.inputError.notSamePassword"));
        dispatch(actions.updatePassword(""));
      } else {
        setErrorConfirmationPassword("");
        if (!errorPassword) {
          dispatch(actions.updatePassword(password));
        }
      }
    }
  }, [password, confirmationPassword]);

  return (
    <>
      <Text>{t("form.text1")}</Text>
      <Text>{t("form.text2")}</Text>
      <PasswordWrapper>
        <PasswordField
          title={t("form.password.title")}
          placeholder={t("form.password.placeholder")}
          setInputValue={setPassword}
          error={errorPassword}
        />
        <PasswordField
          title={t("form.confirmPassword.title")}
          placeholder={t("form.confirmPassword.placeholder")}
          setInputValue={setConfirmationPassword}
          error={errorConfirmationPassword}
        />
      </PasswordWrapper>
      <Text>{t("form.text3")}</Text>
      <ClueField
        title={t("form.clue.title")}
        placeholder={t("form.clue.placeholder")}
        setInputValue={setClue}
        tooltipText={t("form.clue.tooltip")}
      />
    </>
  );
};

export default Form;
