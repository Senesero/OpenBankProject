import styled from 'styled-components'
import { theme } from '../../utils/theme/theme'

export const IconsWrapper = styled.div`
  width: 100%;

  ${() => theme.media.onDesktop`
    display: flex;
    justify-content: space-between;
  `}

  ${() => theme.media.onMobile`
    display: block;
  `}
`