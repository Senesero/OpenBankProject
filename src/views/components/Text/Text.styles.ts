import styled from 'styled-components'
import { ColorsInterface } from '../../../utils/theme/colors'
import { theme } from '../../../utils/theme/theme'

interface Props {
  isTitle?: boolean
  isSubtitle?: boolean
}

interface LineProps {
  inlineColor?: string
}

export const TextWrapper = styled.label<Props>`
  display: block;
  text-align: left;
  color: ${theme.colors.darkBlue};

  font-weight: normal;
  font-size: 15px;
  line-height: 1.2;
  
  ${p => p.isTitle && `
    font-weight: bold;
    font-size: 30px;
  `}

  ${p => p.isSubtitle && `
    font-weight: bold;
    font-size: 20px;
  `}
`

export const Line = styled.div<LineProps>`
    background-color: ${p => p.inlineColor};
    width: 30px;
    height: 5px;
    margin: auto 0;
    justify-content: center;
    align-items: center;
`