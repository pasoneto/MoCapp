import React from 'react';
import {View, Alert, useEffect, TouchableOpacity, Text} from 'react-native';
import * as FileSystem from 'expo-file-system';


// const path = RNFS.DocumentDirectoryPath + '/test.json';

import * as MediaLibrary from 'expo-media-library';


const DownloadData = () => {

const data = {
  name: 'My name',
  age: '20',
};

MediaLibrary.requestPermissionsAsync()

saveFile = async () => {
  try{
    let fileUri = FileSystem.documentDirectory + "text.txt";
    await FileSystem.writeAsStringAsync(fileUri, "Hello World", { encoding: FileSystem.EncodingType.UTF8 });
    const asset = await MediaLibrary.createAssetAsync(fileUri)
    await MediaLibrary.createAlbumAsync("Download", asset, false)
    Alert.alert("File downloaded at" + fileUri)
    console.log(fileUri)
  } catch(error){
    console.log(error)
  }

}

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={saveFile}>
        <Text>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DownloadData;