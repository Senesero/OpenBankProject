import styled from 'styled-components'

interface LineProps {
    color: string
    width: number
    height: number
    margin?: number | string
    padding?: number
}

export const Line = styled.div<LineProps>`
    background-color: ${p => p.color};
    width: ${p => `${p.width}px`};
    height: ${p => `${p.height}px`};
    margin: ${p => p.margin && typeof p.margin === 'string' ? p.margin : `${p.margin}px` } 0;
    padding: ${p => p.padding && `${p.padding}px`} 0;
    justify-content: center;
    align-items: center;
`