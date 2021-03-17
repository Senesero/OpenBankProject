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
import { useTranslation } from "react-i18next";

const ProductInformation: React.FC = () => {
  const { t } = useTranslation();
  const acceptConditions = useSelector(
    (store: WizardProfileState) => store.acceptConditions
  );
  const dispatch = useDispatch();

  const subtitleSection = (subTitle: string, text: string) => (
    <div>
      <Text isSubtitle bold>
        {t(subTitle)}
      </Text>
      <Text>{t(text)}</Text>
    </div>
  );

  return (
    <>
      <IconsWrapper>
        <IconBlock
          icon={<GroupIcon />}
          text={t("productInformation.textBlock1")}
        />
        <IconBlock
          icon={<GroupThreeIcon />}
          text={t("productInformation.textBlock2")}
        />
      </IconsWrapper>
      {subtitleSection(
        "productInformation.block1.title",
        "productInformation.block1.text"
      )}
      {subtitleSection(
        "productInformation.block2.title",
        "productInformation.block2.text"
      )}
      <CheckField
        title="productInformation.checkboxText"
        onClick={() =>
          dispatch(actions.updateAcceptConditions(!acceptConditions))
        }
        checked={acceptConditions}
      />
    </>
  );
};

export default ProductInformation;
