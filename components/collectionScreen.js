import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import styles from './styles';
import Graph from './graph';
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons'; 
import ResultsPage from './resultsPage'; 
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

const CollectionScreen = (props) => {

  const [sound, setSound] = useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('../assets/songs/sound_new.mp3')
    );
    setSound(sound);
    console.log('Playing Sound');
    await sound.playAsync(); 
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  const [subscription, setSubscription] = useState(null);
  const [zhist, setZhist] = useState([0])
  const [xhist, setXhist] = useState([0])
  const [yhist, setYhist] = useState([0])
	const [time, setTime] = useState([new Date().valueOf()]);

  Accelerometer.setUpdateInterval(100);

  const _subscribe = () => {
    setZhist([0])
    setXhist([0])
    setYhist([0])
    setTime([new Date().valueOf()])
    playSound()
    setSubscription(
      Accelerometer.addListener(accelerometerData => {
        setZhist((prev)=>[...prev, accelerometerData.z])
        setXhist((prev)=>[...prev, accelerometerData.x])
        setYhist((prev)=>[...prev, accelerometerData.y])
        setTime((prev)=>[...prev, new Date().valueOf()])
     })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
    sound.stopAsync()
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  // const { x, y, z } = data;

	const data = {
		zhist: zhist,
		xhist: xhist,
		yhist: yhist,
		thist: time,
	};
	const result = JSON.stringify(data);

	// console.log(data)
	MediaLibrary.requestPermissionsAsync()

	saveFile = async () => {
		try{
			let fileUri = FileSystem.documentDirectory + "text.txt";
			await FileSystem.writeAsStringAsync(fileUri, result, { encoding: FileSystem.EncodingType.UTF8 });
			const asset = await MediaLibrary.createAssetAsync(fileUri)
			await MediaLibrary.createAlbumAsync("Download", asset, false)
			Alert.alert("File downloaded at" + fileUri)
			console.log(fileUri)
		} catch(error){
			console.log(error)
		}
	}

  return (

  <View style={styles.container}>

	{!subscription &&
		<ResultsPage xhist={xhist} yhist={yhist} zhist={zhist} timehist={time} ></ResultsPage>
	}

  {subscription &&
      <AntDesign style={styles.soundIcon} name="sound" size={32} color="blue" />
  }
	{subscription && 
		<Text>Collecting data...</Text> 
	}

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={subscription ? _unsubscribe : _subscribe} style={styles.button}>
          <Text>{subscription ? 'Stop collection' : 'Collect new'}</Text>
        </TouchableOpacity>

        {!subscription &&
        <TouchableOpacity style={styles.button} onPress={saveFile}>
          <Text>Download</Text>
        </TouchableOpacity>
        } 
      </View>
  

    </View>
  );
}

export default CollectionScreen;
