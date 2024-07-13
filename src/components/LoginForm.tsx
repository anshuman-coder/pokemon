import { useAuth } from '@/hooks'
import { ButtonStyled, TextInputStyled, TextStyled, TouchableOpacityStyled, ViewStyled } from '@/styled'
import { AuthUser, LoginScreenProps } from '@/types'
import React, { FC, useState } from 'react'

interface LoginFormProps {
  navigation: LoginScreenProps['navigation']
}

const LoginForm: FC<LoginFormProps> = ({ navigation }) => {

  const [form, setForm] = useState<Omit<AuthUser, 'id' | 'name'>>({
    email: '',
    password: ''
  })

  const { login } = useAuth()

  return (
    <ViewStyled className='w-full px-4 justify-center items-center gap-4'>
      <TextStyled className='font-bold text-2xl text-center text-text-primary'>
        Login
      </TextStyled>
      <ViewStyled className='w-full flex justify-start items-start gap-y-4'>
        <TextStyled className='text-base text-text-primary font-semibold text-left w-fit'>Email</TextStyled>
        <TextInputStyled
          placeholder='Email'
          className='w-full py-3 px-2 h-fit placeholder:text-base placeholder:text-black bg-text-primary rounded-xl'
          value={form?.email}
          onChangeText={e => setForm(prev => ({ ...prev, email: e }))}
          autoCapitalize='none'
          autoCorrect={false}
        />
      </ViewStyled>
      <ViewStyled className='w-full flex justify-start items-start gap-y-4'>
        <TextStyled className='text-base text-text-primary font-semibold text-left w-fit'>Passoword</TextStyled>
        
        <TextInputStyled
          value={form?.password}
          placeholder='Password'
          className='w-full py-3 px-2 h-fit placeholder:text-base placeholder:text-black bg-text-primary rounded-xl'
          onChangeText={e => setForm(prev => ({ ...prev, password: e }))}
          secureTextEntry
          autoCorrect={false}
        />
      </ViewStyled>
      <ViewStyled className='w-full flex justify-start items-center gap-y-4'>
        <TouchableOpacityStyled
          className='w-fit bg-button-bg px-4 py-1.5 rounded-xl'
        >
          <ButtonStyled title='Login' onPress={() => login(form)} />
        </TouchableOpacityStyled>
      </ViewStyled>
      <ViewStyled className='w-full flex justify-start items-center gap-y-4'>
        <TextStyled className='text-center justify-self-center items-center text-base text-text-primary'>
          Don't have an account?
          <TouchableOpacityStyled className='pl-2' onPress={() => navigation.navigate('sign_up')}>
            <TextStyled className='text-blue-600 text-base text-center items-center justify-self-center'>SignUp</TextStyled>
          </TouchableOpacityStyled>
        </TextStyled>
      </ViewStyled>
    </ViewStyled>
  )
}

export default LoginForm