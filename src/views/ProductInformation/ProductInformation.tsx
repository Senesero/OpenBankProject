import React from "react";
import { theme } from "../../utils/theme/theme";
import Text from "../components/Text/Text";
import { ProductInformationWrapper } from "./ProductInformation.styles";

const ProductInformation: React.FC = () => {
  return (
    <ProductInformationWrapper>
      <Text isTitle inlineColor={theme.colors.orange}>
        Crea tu Password Manager
      </Text>
      <Text isSubtitle>Cómo funciona</Text>
      <Text>
        En primer lugar, debes crear una contraseña diferente para sus
        pertenencias electrónicas. No podrás recuperar tu contraseña, así que
        recuérdala bien.
      </Text>
    </ProductInformationWrapper>
  );
};

export default ProductInformation;
