import * as Elements from '@rneui/base'
import { createTheme } from '@rneui/themed'

export interface CustomTheme {
  primary: {
    yellow: string
    green: string
    red: string
    blue: string
  }
  secondary: {
    dark: string
    darkGray: string
    white: string
  }
  sizes: {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
    xl2: number
  }
}

export const THEME: CustomTheme = {
  primary: {
    yellow: '#ECA021',
    green: '#2BCC56',
    red: '#EF4F40',
    blue: '#2A8CE7'
  },
  secondary: {
    dark: '#101010', //191919
    darkGray: '#181818',
    white: '#FFFFFF'
  },
  sizes: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xl2: 64
  }
}

export const customTheme = createTheme({
  darkColors: {
    background: THEME.secondary.darkGray
  },
  lightColors: {},
  spacing: {},
  mode: 'dark',
  components: {}
})
