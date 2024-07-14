import { pokemons } from '@/constaints/Pokemon'
import { TextStyled, ViewStyled } from '@/styled'
import React from 'react'
import PokemonCard from './PokemonCard'
import { useAuth } from '@/hooks'

const Pokemons = () => {
  const { user } = useAuth()
  return (
    <ViewStyled className='w-full flex justify-center items-center'>
      <ViewStyled className='w-full flex flex-row justify-between items-center px-10 py-5 rounded-b-xl border-b border-solid border-text-primary shadow-md shadow-button-bg'>
        <TextStyled className='text-text-primary text-base font-semibold italic'>{user?.name}</TextStyled>
        <TextStyled className='text-text-primary text-base font-semibold italic'>{user?.email}</TextStyled>
      </ViewStyled>
      <ViewStyled className='flex flex-row flex-wrap justify-evenly items-center w-full'>
        {
          pokemons.map((pokemon, i) => (
            <PokemonCard key={i} {...pokemon} />
          ))
        }
      </ViewStyled>
    </ViewStyled>
  )
}

export default Pokemons