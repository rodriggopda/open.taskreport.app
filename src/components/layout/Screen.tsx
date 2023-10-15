import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { THEME } from '../../configs/theme'
import { StatusBar } from 'expo-status-bar'

export type ScreenProps = {
  children: React.ReactNode
}

export function Screen({ children }: ScreenProps) {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={THEME.secondary.dark} />
      <View style={styles.screen}>
        {children}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 22,
    minHeight: '100%',
    backgroundColor: THEME.secondary.dark
  }
})
