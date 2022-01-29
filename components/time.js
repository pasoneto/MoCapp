import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const TimeTest = (props) => {

	const [time, setTime] = useState(new Date().getMilliseconds());

	useEffect(() => {
	  let TimeId = setInterval(() => setTime(new Date().getTime()), 1);
	  return () => {
	   clearInterval(TimeId);
	  };
 	});

	return(
		<View style={{position: 'absolute', top: 0, left: 0,  right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
			<Text>{time.toString()}</Text>
		</View>
	)
}

export default TimeTest;