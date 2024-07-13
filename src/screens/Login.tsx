import { Layout, LoginForm, Logo } from '@/components'
import { TextStyled, TouchableOpacityStyled, ViewStyled } from '@/styled'
import { LoginScreenProps } from '@/types'
import React from 'react'


const LoginScreen = ({ navigation }: LoginScreenProps) => {
  return (
    <Layout>
      <ViewStyled className='w-full flex flex-row justify-start items-center px-2'>
        <TouchableOpacityStyled onPressOut={() => navigation.goBack()}>
          <TextStyled className='text-lg font-semibold text-text-primary'>{`<`} Back</TextStyled>
        </TouchableOpacityStyled>
      </ViewStyled>
      <ViewStyled className='mt-10'>
        <Logo />
      </ViewStyled>
      <ViewStyled className='w-full flex justify-start items-start mt-4'>
        <LoginForm navigation={navigation} />
      </ViewStyled>
    </Layout>
  )
}

export default LoginScreen