import { ImageStyled } from '@/styled'
import clsx from 'clsx'
import React, { FC, useEffect, useRef } from 'react'
import { Animated, Easing } from 'react-native'

interface LogoProps {
  className?: string
}

const Logo: FC<LogoProps> = ({
  className = '',
}) => {

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
    <Animated.View style={{ transform: [{ scale }, { rotate }] }}>
      <ImageStyled source={require('../../assets/logo.png')} className={clsx('w-32 h-32 mb-6', className)} />
    </Animated.View>
  )
}

export default Logo