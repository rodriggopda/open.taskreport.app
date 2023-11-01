import { ActivityIndicator, Dimensions, View } from 'react-native'
import { ResizeMode, Video } from 'expo-av'

import { THEME } from '../../configs/theme'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { Navigation } from '../../configs/types/navigation'
import { init } from '../../infra/database/setup'

export function Start({ navigation }: Navigation) {

  useEffect(() => {
    Promise.resolve(init())
      .then(() => {
        setTimeout(() => {
          navigation.replace('Home')
        }, 5000)
      })
  }, [])

  return (
    <View style={{ position: 'relative', maxWidth: Dimensions.get('screen').width, maxHeight: Dimensions.get('screen').height, backgroundColor: THEME.secondary.dark, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar backgroundColor='transparent' />
      <Video
        resizeMode={ResizeMode.COVER}
        shouldPlay
        source={require('../../../assets/mp4/entering-open-task-report-fhd.mp4')}
        style={{ width: Dimensions.get('screen').width, flex: 1 }} />
      {/*<Text>Welcome to Open Task Report</Text>
      <View style={{ marginTop: 20 }} />
      <ActivityIndicator size='large' color={THEME.primary.yellow} />*/}
      <ActivityIndicator style={{ position: 'absolute', bottom: 30 }} size='large' color={THEME.primary.yellow} />
    </View>
  )
}