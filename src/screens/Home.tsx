import { ButtonStyled, ImageStyled, SafeAreaViewStyled, TextStyled, ViewStyled } from '@/styled'
import { HomeScreenProps } from '@/types'
import React, { FC, useEffect, useRef } from 'react'
import { Animated, Easing, SafeAreaView, TouchableOpacity } from 'react-native'

const HomeScreen = ({ navigation }: HomeScreenProps) => {

  const scaleValue = useRef(new Animated.Value(1)).current
  const rotateValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
    const animate = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scaleValue, {
            toValue: 1.05,
            duration: 100,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(scaleValue, {
            toValue: 1,
            duration: 100,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(rotateValue, {
            toValue: 1,
            duration: 100,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(rotateValue, {
            toValue: -1,
            duration: 100,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(rotateValue, {
            toValue: 0,
            duration: 100,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ])
      ).start()
    }

    animate()
  }, [scaleValue, rotateValue])

  const scale = scaleValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.05],
  })

  const rotate = rotateValue.interpolate({
    inputRange: [-1, 1],
    outputRange: ['-5deg', '5deg'],
  })
  return (
    <SafeAreaViewStyled className='flex flex-col justify-center items-center flex-1 bg-bg-primary'>
      <ViewStyled className='flex flex-col justify-center items-center flex-1 bg-bg-primary'>
      {/* for image */}
      <ViewStyled className='flex w-full justify-center items-center'>
        <Animated.View style={{ transform: [{ scale }, { rotate }] }}>
        <ImageStyled source={require('../../assets/logo.png')} className='w-32 h-32 mb-4' />
        </Animated.View>
      </ViewStyled>
      <ViewStyled>
        <TouchableOpacity>
          <ButtonStyled
            title='Lets go'
            onPress={() => navigation.navigate('login')}
            className='cursor-pointer rounded-md !bg-slate-400'
          />
        </TouchableOpacity>
      </ViewStyled>
      

    </ViewStyled>
    </SafeAreaViewStyled>
  )
}

export default HomeScreen