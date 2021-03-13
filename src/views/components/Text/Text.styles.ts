import styled from 'styled-components'
import { ColorsInterface } from '../../../utils/theme/colors'
import { theme } from '../../../utils/theme/theme'

interface Props {
  isTitle?: boolean
  isSubtitle?: boolean
  isSamll?: boolean
}

interface LineProps {
  inlineColor?: string
}

export const TextWrapper = styled.div`
  margin: 10px 0;
`

export const Label = styled.label<Props>`
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
    font-size: 17px;
  `}

  ${p => p.isSamll && `
    font-size: 13px;
  `}
`

export const Line = styled.div<LineProps>`
    background-color: ${p => p.inlineColor};
    width: 50px;
    height: 4px;
    margin: 5px 0;
    justify-content: center;
    align-items: center;
`