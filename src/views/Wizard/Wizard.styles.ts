import styled from 'styled-components'
import { theme } from '../../utils/theme/theme'

interface StepWrapperProps {
    isCurrentStep: boolean
    isCompleteStep: boolean
}

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
    justify-content: start;
    padding-top: 25px;
`

export const Circle = styled.div<StepWrapperProps>`
    background-color: ${theme.colors.stepperDisabled};
    ${p => p.isCurrentStep && `background-color: ${theme.colors.darkBlue}`};
    ${p => p.isCompleteStep && `background-color: ${theme.colors.primaryColor}`};
    display: flex;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;    
    color: ${theme.colors.grey};
    padding: 15px;
`

export const Line = styled.div<StepWrapperProps>`
    background-color: ${theme.colors.stepperDisabled};
    ${p => p.isCurrentStep && `background-color: ${theme.colors.darkBlue}`};
    ${p => p.isCompleteStep && `background-color: ${theme.colors.primaryColor}`};
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
    border-bottom: 18px solid ${theme.colors.white};;
`

export const ContentWwapper = styled.div`
    background-color: ${theme.colors.white};;
    width: 100%;
    height: 300px;
`

export const FooterWrapper = styled.div`
    background-color: ${theme.colors.white};
    border-top: 5px solid ${theme.colors.grey};
    display: flex;
    justify-content: space-between;
`