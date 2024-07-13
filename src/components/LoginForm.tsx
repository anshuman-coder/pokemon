import { ButtonStyled, TextInputStyled, TextStyled, TouchableOpacityStyled, ViewStyled } from '@/styled'
import { LoginScreenProps } from '@/types'
import React, { FC } from 'react'

interface LoginFormProps {
  navigation: LoginScreenProps['navigation']
}

const LoginForm: FC<LoginFormProps> = ({ navigation }) => {
  return (
    <ViewStyled className='w-full px-4 justify-center items-center gap-4'>
      <TextStyled className='font-bold text-2xl text-center text-text-primary'>
        Login
      </TextStyled>
      <ViewStyled className='w-full flex justify-start items-start gap-y-4'>
        <TextStyled className='text-base text-text-primary font-semibold text-left w-fit'>Email</TextStyled>
        <TextInputStyled placeholder='Email' className='w-full py-3 px-2 h-fit placeholder:text-base placeholder:text-black bg-text-primary rounded-xl' />
      </ViewStyled>
      <ViewStyled className='w-full flex justify-start items-start gap-y-4'>
        <TextStyled className='text-base text-text-primary font-semibold text-left w-fit'>Passoword</TextStyled>
        <TextInputStyled placeholder='Password' className='w-full py-3 px-2 h-fit placeholder:text-base placeholder:text-black bg-text-primary rounded-xl' />
      </ViewStyled>
      <ViewStyled className='w-full flex justify-start items-center gap-y-4'>
        <TouchableOpacityStyled
          className='w-fit bg-button-bg px-4 py-1.5 rounded-xl'
        >
          <ButtonStyled title='Login' />
        </TouchableOpacityStyled>
      </ViewStyled>
      <ViewStyled className='w-full flex justify-start items-center gap-y-4'>
        <TextStyled className='text-center justify-self-center items-center text-base text-text-primary'>
          Already have an Account? 
          <TouchableOpacityStyled className='pl-2' onPress={() => navigation.navigate('sign_up')}>
            <TextStyled className='text-blue-600 text-base text-center items-center justify-self-center'>SignUp</TextStyled>
          </TouchableOpacityStyled>
        </TextStyled>
      </ViewStyled>
    </ViewStyled>
  )
}

export default LoginForm