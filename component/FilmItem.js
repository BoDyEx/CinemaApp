import React,{useState,useEffect} from 'react';
import { Text , View, StyleSheet,Image} from 'react-native';

const FilmItem=(props)=>{
  
  return(
    
     <View >
       
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
        borderWidth:2,
        borderColor:"#53E8C6",
        borderRadius:5,

      }, 
    
      txt:{
          fontSize:20,
          textAlign:"center",
          color:"#EECD45",
          fontWeight:"bold",
          margin:10,
          
      },
       shadowProp: {
        shadowColor: '#030E19',
        shadowOffset: {width: 2, height: -10},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },

 
  
});


export default FilmItem;


