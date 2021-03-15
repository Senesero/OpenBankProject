import styled from 'styled-components'
import { theme } from '../../utils/theme/theme'
import { ReactComponent as Info } from "../../assets/img/info.svg";

interface Props {
  isTitle?: boolean
  isSubtitle?: boolean
  isSamll?: boolean
  bold?: boolean
  color?: string
}

export const TextWrapper = styled.div`
  margin: 10px 0;
`

export const LabelWrapper = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
`

export const InfoIcon = styled(Info)`
  width: 20px;
  margin-left: 5px;
  color: ${theme.colors.lightBlue};
`

export const Label = styled.label<Props>`
  display: block;
  text-align: left;
  color: ${p => p.color || theme.colors.darkBlue};

  font-weight: ${p => p.bold ? 'bold' : 'normal'};
  font-size: 15px;
  line-height: 1.2;
  
  ${p => p.isTitle && `
    font-size: 30px;
  `}

  ${p => p.isSubtitle && `
    font-size: 17px;
  `}

  ${p => p.isSamll && `
    font-size: 13px;
  `}
`