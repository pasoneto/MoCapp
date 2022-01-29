import React from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

const image = { uri: "/Users/pdealcan/Documents/github/accel/assets/images/bgimage.jpeg" };

const WelcomeScreen = ({navigation}) => (

  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.imageBG}>
      <TouchableOpacity style={styles.buttonStart} onPress={()=>navigation.navigate('Instructions')}>
          <Text style={styles.subtitle}>Click here to begin</Text>
      </TouchableOpacity>
    </ImageBackground>
   </View>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBG: {
    flex: 1,
    justifyContent: "center"
  },
  subtitle: {
    margin: 0,
    color: "#ec602a",
    fontSize: 21,
    alignSelf: "center",
    width: 160,
    lineHeight: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(1,68,148,0.85)"
  },
  buttonStart: {
    borderRadius: 50,
  },
});

export default WelcomeScreen;

