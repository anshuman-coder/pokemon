import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  home: undefined
  login: undefined
  sign_up: undefined
}

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'home'>
export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'login'>
export type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'sign_up'>
