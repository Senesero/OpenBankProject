import React from "react";
import Text from "../../components/Text/Text";
import { IconsWrapper } from "./ProductInformation.styles";
import { ReactComponent as GroupIcon } from "../../assets/img/group.svg";
import { ReactComponent as GroupThreeIcon } from "../../assets/img/group-3.svg";
import IconBlock from "./IconBlock/IconBlock";
import CheckField from "../../components/CheckField/CheckField";
import { useDispatch, useSelector } from "react-redux";
import { WizardProfileState } from "../../redux/configureStore";
import * as actions from "../../redux/actions";

const ProductInformation: React.FC = () => {
  const acceptConditions = useSelector(
    (store: WizardProfileState) => store.acceptConditions
  );
  const dispatch = useDispatch();

  const subtitleSection = (subTitle: string, text: string) => (
    <div>
      <Text isSubtitle bold>
        {subTitle}
      </Text>
      <Text>{text}</Text>
    </div>
  );

  return (
    <>
      <IconsWrapper>
        <IconBlock
          icon={<GroupIcon />}
          text="Guarda aquí todas tus contraseñas, datos o cualquier información, olvida las notas de papel y las aplicaciones no protegidas"
        />
        <IconBlock
          icon={<GroupThreeIcon />}
          text="Crea tu clave maestra: solo tú podrás acceder a tus secretos con ella."
        />
      </IconsWrapper>
      {subtitleSection(
        "Cómo funciona",
        "En primer lugar, debes crear una contraseña diferente para sus pertenencias electrónicas. No podrás recuperar tu contraseña, así que recuérdala bien"
      )}
      {subtitleSection(
        "Qué datos puedes guardar",
        "En primer lugar, debes crear una contraseña diferente para sus pertenencias electrónicas. No podrás recuperar tu contraseña, así que recuérdala bien."
      )}
      <CheckField
        title="Es mayor de eadad y que acepta que tratemos sus datos según la politica de protección de datos."
        onClick={() =>
          dispatch(actions.updateAcceptConditions(!acceptConditions))
        }
        checked={acceptConditions}
      />
    </>
  );
};

export default ProductInformation;
