import { SafeAreaViewStyled } from '@/styled'
import clsx from 'clsx'
import React, { FC, ReactNode } from 'react'

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
      'flex flex-auto flex-col justify-start items-center bg-bg-primary',
      className
    )}>
      { children }
    </SafeAreaViewStyled>
  )
}

export default Layout