import styled from 'styled-components'
import { theme } from '../../utils/theme/theme'

interface Props {
  disabled?: boolean
  primary?: boolean
  secondary?: boolean
}

export const ButtonRaw = styled.input<Props>`  
  ${p => p.disabled ? `
    cursor: not-allowed;
  ` : `
    cursor: pointer;
  `}
  
  border: none;

  margin: 10px 10px;
  height: 40px;
  width: 200px;

  ${p => p.primary && !p.disabled && `
    text-decoration:none;
    background-color: ${theme.colors.darkBlue};
    color: ${theme.colors.white};
    font-weight: bold;
  `}

  ${p => p.primary && p.disabled &&  `
    text-decoration:none;
    background-color: ${theme.colors.darkGrey};
    color: ${theme.colors.white};
    font-weight: bold;
  `}

  ${p => p.secondary && `
    text-decoration:none;
    background-color: transparent;
    color: ${p => p.disabled ? theme.colors.darkGrey : theme.colors.darkBlue};
    font-weight: bold;
  `}
`