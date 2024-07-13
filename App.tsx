import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styled } from 'nativewind'

const ViewStyled = styled(View)
const TextStyled = styled(Text)

export default function App() {
  return (
    <ViewStyled className="flex-1 items-center justify-center bg-white">
      <TextStyled className='italic'>Open up App.tsx to start working on your app!</TextStyled>
      <StatusBar style="auto" />
    </ViewStyled>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
