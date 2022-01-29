import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import Graph from './graph';
import styles from './styles';

const ResultsPage = (props) => {

	zhist = props.zhist
	xhist = props.xhist
	yhist = props.yhist
	timehist = props.timehist

	return(
		<View style={styles.container}>
			<Text>Results</Text>
			<Text>Z</Text>
			<Graph data={zhist} color={"green"}/>
			<Text>X</Text>
			<Graph data={xhist} color={"blue"}/>
			<Text>Y</Text>
			<Graph data={yhist} color={"red"}/>
		</View>
	)
}

export default ResultsPage;