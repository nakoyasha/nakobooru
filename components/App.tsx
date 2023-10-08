import React, { useState } from 'react';
import {
  StatusBar,
  Text,
  useColorScheme,
  View,
  Switch,
  Button,
  Alert,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import {
  Colors, Header,
} from 'react-native/Libraries/NewAppScreen';
import { ImagesList } from './ImagesList';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // Status Bar 
    <View>
      <View style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />

        <View>

          <ImagesList />
        </View>
      </View>


    </View>

  )
}



export default App;
