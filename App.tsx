import { StatusBar } from 'expo-status-bar';
import { styled } from 'nativewind'

import { TextStyled, ViewStyled } from '@/styled'
import AppNavigation from '@/navigation';
import UserContextProvider from '@/context/user';


export default function App() {
  return (
    <UserContextProvider>
      <AppNavigation />
    </UserContextProvider>
  );
}