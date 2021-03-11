import { FlattenSimpleInterpolation } from 'styled-components'
import { css } from 'styled-components'
import { breakpoints } from './breakpoints'

export interface MediaInterface {
  onMobile: (
    strings: TemplateStringsArray,
    ...args
  ) => FlattenSimpleInterpolation
  onDesktop: (
    strings: TemplateStringsArray,
    ...args
  ) => FlattenSimpleInterpolation
}

export const media: MediaInterface = {
  onMobile: (strings: TemplateStringsArray, ...args) => css`
    @media (max-width: ${breakpoints.desktop - 1}px) {
      ${css(strings, ...args)};
    }
  `,
  onDesktop: (strings: TemplateStringsArray, ...args) => css`
    @media (min-width: ${breakpoints.desktop}px) {
      ${css(strings, ...args)};
    }
  `,
}
