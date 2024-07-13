import { useAuth } from '@/hooks'
import { ButtonStyled, TextInputStyled, TextStyled, TouchableOpacityStyled, ViewStyled } from '@/styled'
import { AuthUser, SignUpScreenProps } from '@/types'
import React, { FC, useState } from 'react'

interface SignUpFormProps {
  navigation: SignUpScreenProps['navigation']
}

const SignUpForm: FC<SignUpFormProps> = ({ navigation }) => {
  const [form, setForm] = useState<Omit<AuthUser, 'id'> & { confirmPassword: string }>({
    email: '',
    name: '',
    password: '',
    confirmPassword: ''
  })

  const { signUp } = useAuth()

  return (
    <ViewStyled className='w-full px-6 justify-center items-center gap-4'>
      <TextStyled className='font-bold text-2xl text-center text-text-primary'>
        Register
      </TextStyled>
      <ViewStyled className='w-full flex justify-start items-start gap-y-4'>
        <TextStyled className='text-base text-text-primary font-semibold text-left w-fit'>Name</TextStyled>
        <TextInputStyled
          value={form?.name}
          placeholder='Name'
          className='w-full py-3 px-2 h-fit placeholder:text-base placeholder:text-black bg-text-primary rounded-xl'
          onChangeText={(t) => setForm(prev => ({ ...prev, name: t }))}
        />
      </ViewStyled>
      <ViewStyled className='w-full flex justify-start items-start gap-y-4'>
        <TextStyled className='text-base text-text-primary font-semibold text-left w-fit'>Email</TextStyled>
        <TextInputStyled
          value={form?.email}
          placeholder='Email'
          className='w-full py-3 px-2 h-fit placeholder:text-base placeholder:text-black bg-text-primary rounded-xl'
          onChangeText={(t) => setForm(prev => ({ ...prev, email: t }))}
          autoCapitalize='none'
          autoCorrect={false}
        />
      </ViewStyled>
      <ViewStyled className='w-full flex justify-start items-start gap-y-4'>
        <TextStyled className='text-base text-text-primary font-semibold text-left w-fit'>Password</TextStyled>
        <TextInputStyled
          value={form?.password}
          placeholder='Password'
          className='w-full py-3 px-2 h-fit placeholder:text-base placeholder:text-black bg-text-primary rounded-xl'
          onChangeText={t => setForm(prev => ({ ...prev, password: t }))}
          secureTextEntry
          autoCorrect={false}
        />
      </ViewStyled>
      <ViewStyled className='w-full flex justify-start items-start gap-y-4'>
        <TextStyled className='text-base text-text-primary font-semibold text-left w-fit'>Confirm Password</TextStyled>
        <TextInputStyled
          value={form.confirmPassword}
          placeholder='Confirm password'
          className='w-full py-3 px-2 h-fit placeholder:text-base placeholder:text-black bg-text-primary rounded-xl'
          onChangeText={t => setForm(prev => ({ ...prev, confirmPassword: t }))}
          secureTextEntry
          autoCorrect={false}
        />
      </ViewStyled>
      <ViewStyled className='w-full flex justify-start items-center gap-y-4'>
        <TouchableOpacityStyled
          className='w-fit bg-button-bg px-4 py-1.5 rounded-xl'
        >
          <ButtonStyled title='Sign Up' onPress={() => signUp(form)}/>
        </TouchableOpacityStyled>
      </ViewStyled>
      <ViewStyled className='w-full flex justify-start items-center gap-y-4'>
        <TextStyled className='text-center justify-self-center items-center text-base text-text-primary'>
          Already have an Account? 
          <TouchableOpacityStyled className='pl-2' onPress={() => navigation.navigate('login')}>
            <TextStyled className='text-blue-600 text-base text-center items-center justify-self-center'>Login</TextStyled>
          </TouchableOpacityStyled>
        </TextStyled>
      </ViewStyled>
    </ViewStyled>
  )
}

export default SignUpForm