import styled from 'styled-components'
import { theme } from './utils/theme/theme'

export const AppWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${theme.colors.grey};
`

export const AppContent = styled.div`
  width: 950px;
`