import { ImageStyled, TextStyled, TouchableOpacityStyled, ViewStyled } from '@/styled'
import React, { FC, useCallback } from 'react'

interface PokemonCardProps {
  name: string,
  url: string,
  imageUrl: string
}

const PokemonCard: FC<PokemonCardProps> = ({
  name,
  url,
  imageUrl
}) => {

  const onPokemonClick = useCallback(async () => {
    await fetch(url)
      .then(res => res.json())
      .then(data => console.log(data?.abilities))
      .catch(err => console.log(err))
  }, [url])
  return (
    <TouchableOpacityStyled className='flex justify-center items-center w-full max-w-[160px]' onPress={onPokemonClick}>
      <ViewStyled className='flex rounded-2xl bg-button-bg w-full  justify-start items-center p-2 border border-solid border-teal-100 my-4 shadow-bg-primary'>
        <ImageStyled
          source={{ uri: imageUrl }}
          className='w-28 h-28 mb-4'
        />
        <TextStyled className='text-bg-primary text-center w-full text-lg font-semibold'>{name}</TextStyled>
      </ViewStyled>
    </TouchableOpacityStyled>
  )
}

export default PokemonCard