import styled from 'styled-components'
import { theme } from '../../utils/theme/theme'

export const WizardWrapper = styled.div`
    margin-top: 20px;
`

export const HeaderdWrapper = styled.div`
    background-color: ${theme.colors.darkGrey};
    width: 100%;
    height: 83px;
    display: flex;
    justify-content: center;
`

export const StepWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
`

export const Circle = styled.div`
    background-color: ${theme.colors.darkBlue};
    display: flex;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;    
    color: ${theme.colors.grey};
    padding: 15px;
`

export const Line = styled.div`
    background-color: ${theme.colors.darkBlue};
    width: 30px;
    height: 5px;
    margin: auto 0;
    justify-content: center;
    align-items: center;
`

export const Triangle = styled.div`
    width: 0;
    height: 0;
    border-right: 17px solid transparent;
    border-top: 7px solid transparent;
    border-left: 18px solid transparent;
    border-bottom: 18px solid yellow;
`

export const ContentWwapper = styled.div`
    background-color: yellow;
    width: 100%;
    height: 300px;
`
     