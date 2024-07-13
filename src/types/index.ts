import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  home: undefined
  login: undefined
  sign_up
}

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'home'>
export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'login'>
