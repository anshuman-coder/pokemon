import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  home: undefined
  login: undefined
}

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'home'>
