import React,{useState,useEffect} from 'react';
import { Text , View, Button,TextInput,StyleSheet,FlatList,Image} from 'react-native';

const FilmItemCard=(props)=>{
  
  return(
    
     <View>
        <Image
          style={styles.photo}
          source={{uri:props.link}}
        /> 
    </View>
  );
}

const styles=StyleSheet.create({
    photo:{
        width: 150,
        height:250,  
        borderRadius:20,
        margin:10,

      }, 


 
  
});


export default FilmItemCard;


