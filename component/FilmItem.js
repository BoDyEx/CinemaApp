import React,{useState,useEffect} from 'react';
import { Text , View, Button,TextInput,StyleSheet,FlatList,Image} from 'react-native';

const FilmItem=(props)=>{
  

 
      

  return(
    
     <View>
        <Image
          style={styles.photo}
          source={{uri:props.link}}
        /> 
        <Text style={styles.txt}>{props.name}</Text>
    </View>
  );
}

const styles=StyleSheet.create({
    photo:{
        width: 250,
        height:400,  
        marginHorizontal:"18%",
        borderRadius:20,
        borderWidth:5,
        borderColor:"#53E8C6",

      }, 
    
      txt:{
          fontSize:20,
          textAlign:"center",
          color:"#EECD45",
          fontWeight:"bold",
          margin:10,
          
      },

 
  
});


export default FilmItem;


