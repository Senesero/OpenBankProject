import { media, MediaInterface } from './media'
import { breakpoints } from './breakpoints'
import { ColorsInterface, colors } from './colors'

export interface ThemeInterface {
  breakpoints: {
    desktop: number
  }
  media: MediaInterface
  colors: ColorsInterface
}

export const theme: ThemeInterface = {
  breakpoints,
  media,
  colors,
}
