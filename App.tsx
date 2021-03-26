import React from 'react'
import { MenuProvider } from 'react-native-popup-menu'
import Navigation from './src/routes/Navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <MenuProvider>
        <Navigation />
      </MenuProvider>
    </SafeAreaProvider>
  )
}


export default App