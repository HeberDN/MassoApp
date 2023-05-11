import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import Catalogo from './src/telas/Catalogo';
import mock from './src/mocks/catalogo';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if(!fonteCarregada){
    return null;
  }

  return (
    <SafeAreaView style ={{flex:1}}>
      <StatusBar />
      <Catalogo {...mock} />
    </SafeAreaView>
  );
}

