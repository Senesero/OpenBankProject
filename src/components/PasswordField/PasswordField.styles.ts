import styled from 'styled-components'
import { theme } from '../../utils/theme/theme'

export const ComponentWrapper = styled.div`
  width: 250px;
  margin-top: 20px;
  margin-bottom: 20px;

  ${() => theme.media.onDesktop`    
    margin-right: 50px;
  `}

  ${() => theme.media.onMobile`
    width: 100%;
  `}
`

export const InputWrapper = styled.div`
  height: 35px;
  border: 2px solid #ddd;
  display: flex;
  margin-top: 10px;
`

export const InputRaw = styled.input`
  width: 100%;
  border: none;
`

export const IconWrapper = styled.div`
  width: 25px;
  height: 25px;
  padding: 5px;
`