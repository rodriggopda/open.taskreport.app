import { NativeStackScreenProps } from '@react-navigation/native-stack'

type RootStackParamList = {
  Home: undefined
}

export type Navigation = NativeStackScreenProps<RootStackParamList, 'Home'>
