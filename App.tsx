import { ThemeProvider } from '@rneui/themed'

import { Router } from './src/Router';
import { customTheme } from './src/configs/theme'

export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Router />
    </ThemeProvider>
  )
}