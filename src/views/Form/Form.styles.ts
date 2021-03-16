import styled from 'styled-components'
import { theme } from '../../utils/theme/theme'

export const IconsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const PasswordWrapper = styled.div`
  display: flex;

  ${() => theme.media.onMobile`
    display: block;
  `}
`