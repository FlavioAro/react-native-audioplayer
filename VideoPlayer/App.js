import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import Video from 'react-native-video';


const App = () => {

  let video_url = { uri: "https://d3ctxlq1ktw2nl.cloudfront.net/staging/2020-5-25/85272974-44100-2-056869d119926.m4a" };
  let image_url = { uri: "https://reactjs.org/logo-og.png" };

  return (
 
<View style={styles.container}>
  
    <ImageBackground source={image_url} style={styles.image}>
    </ImageBackground>
   
  <Video
      source={video_url}
      style={styles.video}
      controls={true}             
  />
  
  </View>

  );
};


var styles = StyleSheet.create({
  video: {
    width: '100%',
    height: 130,
    position: 'absolute',
    bottom: 0,
  },
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});


export default App;