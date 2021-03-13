import React from "react";
import Text from "../../components/Text/Text";
import { ContentWrapper } from "./IconBlock.styles";

interface Props {
  icon: JSX.Element;
  text: string;
}

const IconBlock: React.FC<Props> = ({ icon, text }) => (
  <ContentWrapper>
    {icon}
    <Text isSamll>{text}</Text>
  </ContentWrapper>
);

export default IconBlock;
