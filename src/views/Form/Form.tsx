import React from "react";
import Text from "../components/Text/Text";

const Form: React.FC = () => {
  return (
    <>
      <Text>
        En primer lugar, debes crear una contraseña diferente para sus
        pertenencias electrónicas.
      </Text>
      <Text>No podrás recuperar tu contraseña, asi que recuérdala bien.</Text>
      <>AQUI LOS INPUTS</>
      <Text>
        También puedes crear una pista que te ayude a recordar tu contraseña
        maestra.
      </Text>
      <>AQUI PISTA INPUTS</>
    </>
  );
};

export default Form;
