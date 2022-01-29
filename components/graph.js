import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from "react-native-chart-kit";

const Graph = (props) => {

    const dados = props.data
    const color = props.color

    return (
		<LineChart
			data={{
				datasets: [
				{
					data: dados }
				]
			}}
			width={Dimensions.get("window").width*0.9} // from react-native
			height={100}
			// yAxisInterval={0.1} // optional, defaults to 1
			chartConfig={{
				backgroundColor: color,
				decimalPlaces: 2, // optional, defaults to 2dp
				color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
				labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
				style: {
				borderRadius: 16
				},
				propsForDots: {
				r: "2",
				strokeWidth: "1",
				stroke: "#ffa726"
				}
			}}
			bezier
			style={{
				marginVertical: 8,
				borderRadius: 16
		}}
		/>

    );
}

export default Graph;
