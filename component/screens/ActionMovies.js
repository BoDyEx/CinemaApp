import React,{useState,useEffect} from 'react';
import {   View, StyleSheet,FlatList,TouchableOpacity , SafeAreaView,ImageBackground} from 'react-native';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../../db/Config';
import FilmItem from '../FilmItem';




const ActionMovie=({ navigation, route })=>{
  const[movies,setmovies]=useState([]);

  useEffect(async() => {
    //Runs only on the first render
    const movieCol = collection(db, 'action_movie');
    const movie_Snapshot = await getDocs(movieCol);
    const movie_List = movie_Snapshot.docs.map(doc => doc.data());
    setmovies(movie_List);
  }, []);

  
      

  return(
    <ImageBackground source={require("../backgroundApp.jpg")} resizeMode="cover" style={styles.image}>


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

    </ImageBackground>
  );
}

const styles=StyleSheet.create({
 
  
    txt:{
        fontSize:0,
        textAlign:"center"
    },
    image: {
      flex: 1,
      justifyContent: "center",
      padding:2,
    },


});



export default ActionMovie;


