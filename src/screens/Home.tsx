import { Layout, Logo, Pokemons } from '@/components'
import { useAuth } from '@/hooks'
import { ButtonStyled, TouchableOpacityStyled, ViewStyled } from '@/styled'
import { HomeScreenProps } from '@/types'
import React from 'react'

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  
  const { user, isLoading } = useAuth()

  return (
    <Layout>
      {
        !user ? (
          <ViewStyled className='flex flex-col justify-center items-center flex-1 bg-bg-primary'>
            <ViewStyled className='flex w-full justify-center items-center'>
              <Logo />
            </ViewStyled>
            {
              !isLoading && (
                <ViewStyled>
                  <TouchableOpacityStyled
                    className='w-full bg-button-bg px-4 py-2.5 rounded-xl'
                  >
                    <ButtonStyled title={`Let's go`} onPress={() => navigation.navigate('login')} />
                  </TouchableOpacityStyled>
                </ViewStyled>
              )
            }
          </ViewStyled>
        ) : (
          <Pokemons />
        )
      }
    </Layout>
  )
}

export default HomeScreen