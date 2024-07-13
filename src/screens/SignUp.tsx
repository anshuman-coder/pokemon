import { Layout, Logo, SignUpForm } from '@/components'
import { TextStyled, TouchableOpacityStyled, ViewStyled } from '@/styled'
import { SignUpScreenProps } from '@/types'
import React from 'react'

const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
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
        <SignUpForm navigation={navigation} />
      </ViewStyled>
    </Layout>
  )
}

export default SignUpScreen