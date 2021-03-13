import React from "react";
import { Label } from "../../components/Text/Text.styles";
import { ContentWrapper } from "./IconBlock.styles";

interface Props {
  icon: JSX.Element;
  text: string;
}

const IconBlock: React.FC<Props> = ({ icon, text }) => (
  <ContentWrapper>
    {icon}
    <Label isSamll>{text}</Label>
  </ContentWrapper>
);

export default IconBlock;
