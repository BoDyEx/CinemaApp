import { View ,StyleSheet} from 'react-native';
import React from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';



export default function WatchPage({ navigation, route }) {
  const { item } = route.params;

  

  return (
    <View style={styles.mainContanier}>
      <View>
        <YoutubePlayer
          height={300}
          play={true}
          videoId={item.film_link}
        />
      </View>
    </View>

  );
}

const styles=StyleSheet.create({
  mainContanier:{
      flex:1,
      paddingTop:5,
      backgroundColor:"#223654",
      justifyContent:"center",
    }, 
  
    



});


 