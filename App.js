import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Graph from './components/graph' 
import CollectionScreen from './components/collectionScreen';
import WelcomeScreen from './components/welcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './components/styles';
import InstructionScreen from './components/instructionScreen';
import TimeTest from './components/time';
import DownloadData from './components/downloadData';

export default function App() {


  const Stack = createNativeStackNavigator();


  return (

    // <TimeTest></TimeTest>
    // <CollectionScreen></CollectionScreen>
    // <DownloadData></DownloadData>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={{headerStyle: {backgroundColor: "rgba(0,68,148,255)",}, headerTitle: (props) => <Text style={styles.headerStyle}>MocApp</Text> }}
        />
        <Stack.Screen 
          name="Collection" 
          component={CollectionScreen}
        />
        <Stack.Screen
          name="Instructions"
          component={InstructionScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

