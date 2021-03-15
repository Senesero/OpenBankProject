import styled from 'styled-components'
import { theme } from '../../utils/theme/theme'

interface StepWrapperProps {
    isCurrentStep: boolean
    isCompleteStep: boolean
}

export const WizardWrapper = styled.div`
    width: 100%;
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
    justify-content: start;
    padding-top: 20px;
`

export const Circle = styled.div<StepWrapperProps>`
    background-color: ${theme.colors.stepperDisabled};
    ${p => p.isCurrentStep && `background-color: ${theme.colors.darkBlue}`};
    ${p => p.isCompleteStep && `background-color: ${theme.colors.primaryColor}`};
    display: flex;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;    
    color: ${theme.colors.grey};
    padding: 15px;
`

export const Triangle = styled.div`
    width: 0;
    height: 0;
    border-right: 17px solid transparent;
    border-top: 7px solid transparent;
    border-left: 18px solid transparent;
    border-bottom: 18px solid ${theme.colors.white};;
`

export const ContentWwapper = styled.div`
    background-color: ${theme.colors.white};
    padding: 30px 80px;
`

export const FooterWrapper = styled.div`
    background-color: ${theme.colors.white};
    border-top: 5px solid ${theme.colors.grey};
    display: flex;
    justify-content: space-between;
`