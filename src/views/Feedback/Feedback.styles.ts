import styled from 'styled-components'
import { ReactComponent as Success } from "../../assets/img/success.svg";
import { ReactComponent as Error } from "../../assets/img/error.svg";

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

export const IconWrapper = styled.div`
    margin-right: 20px;
`

export const SuccessIcon = styled(Success)`
    height: 50px;
`

export const ErrorIcon = styled(Error)`
    height: 50px;
`