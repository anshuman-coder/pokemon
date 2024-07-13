import { SafeAreaViewStyled } from '@/styled'
import clsx from 'clsx'
import React, { FC, ReactNode } from 'react'
import { ScrollView } from 'react-native'

interface LayoutProps {
  children: ReactNode
  className?: string
}
const Layout: FC<LayoutProps> = ({
  children,
  className = ''
}) => {
  return (
    <SafeAreaViewStyled className={clsx(
      'flex flex-1 flex-col justify-start items-center bg-bg-primary overflow-y-auto p-0 m-0',
      className
    )}>
      <ScrollView style={{ width: '100%' }} contentContainerStyle={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingVertical: 20 }}>
        {children}
      </ScrollView>
    </SafeAreaViewStyled>
  )
}

export default Layout