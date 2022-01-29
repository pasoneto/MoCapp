import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import styles from './styles';

const images = [
	"https://source.unsplash.com/1024x768/?nature",
	"https://source.unsplash.com/1024x768/?water",
	"https://source.unsplash.com/1024x768/?girl",
	"https://source.unsplash.com/1024x768/?tree",
   ]

const InstructionScreen = ({navigation}) => {

	return(
		<View>
			<SliderBox images={images} />

			<TouchableOpacity style={styles.buttonStart} onPress={()=>navigation.navigate('Collection')}>
				<Text style={styles.subtitle}>Click here to begin</Text>
			</TouchableOpacity>

		</View>
	)
}

export default InstructionScreen;