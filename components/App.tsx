import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  useColorScheme, Image, View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { ImagesList } from './ImagesList';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { styles } from "../etc/Styles"

import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Appbar } from "react-native-paper"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const tab = createMaterialBottomTabNavigator()
var navigation;

function App(): JSX.Element {
  const scheme = useColorScheme()
  const theme = (scheme == "dark" && DarkTheme || DefaultTheme)

  return (
    <NavigationContainer
      theme={theme}
    >
      <View style={Colors.light}>
        <StatusBar
          translucent={true}
          style="auto"
          backgroundColor="rgba(0,0,0,0)"
        />
      </View>

      <Appbar.Header>
        <Appbar.Content title="Danbooru" />
      </Appbar.Header>


      <tab.Navigator
        theme={theme}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={32} />
          )
        })}
      >
        <tab.Screen name="Home" component={ImagesList} />
        <tab.Screen name="Favorites" component={ImagesList} />
        <tab.Screen name="Settings" component={ImagesList} />
      </tab.Navigator>

    </NavigationContainer>
  )
}



export default App;
