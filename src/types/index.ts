import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  home: undefined
  login: undefined
  sign_up: undefined
  pokemons: undefined
}

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'home'>
export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'login'>
export type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'sign_up'>

export interface AuthUser {
  id: string
  name: string
  email: string
  password: string
}
