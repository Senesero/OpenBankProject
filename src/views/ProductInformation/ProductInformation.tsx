import React from "react";
import Text from "../components/Text/Text";
import { IconsWrapper } from "./ProductInformation.styles";
import { ReactComponent as GroupIcon } from "../../assets/img/group.svg";
import { ReactComponent as GroupThreeIcon } from "../../assets/img/group-3.svg";
import IconBlock from "./IconBlock/IconBlock";

const ProductInformation: React.FC = () => {
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
    </>
  );
};

export default ProductInformation;
