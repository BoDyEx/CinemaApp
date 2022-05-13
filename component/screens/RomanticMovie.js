import React,{useState,useEffect} from 'react';
import {   View, StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import { collection, getDocs} from 'firebase/firestore/lite';
import FilmItem from '../FilmItem';
import { db } from '../../db/Config';




const RomanticMovie=({ navigation, route })=>{
  const[movies,setmovies]=useState([]);

  useEffect(async() => {
    //Runs only on the first render
    const movieCol = collection(db, 'romantic_movie');
    const movie_Snapshot = await getDocs(movieCol);
    const movie_List = movie_Snapshot.docs.map(doc => doc.data());
    setmovies(movie_List);
  }, []);

  
      

  return(
    
    <View style={styles.mainContanier}>

        <FlatList 
          data={movies}
          renderItem={({item})=>(
            <TouchableOpacity         
              onPress={() => navigation.navigate('InfoMovie',{item})}
            >
              <FilmItem  
                  link={item.image_link} 
                  name={item.name_film}
              />
            </TouchableOpacity>
             
             )}
             

         />

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
  
    txt:{
        fontSize:0,
        textAlign:"center"
    },



});



export default RomanticMovie;


