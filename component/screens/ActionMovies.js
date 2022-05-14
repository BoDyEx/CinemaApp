import React,{useState,useEffect} from 'react';
import {   View, StyleSheet,FlatList,TouchableOpacity , SafeAreaView} from 'react-native';
import { collection, getDocs ,doc, setDoc} from 'firebase/firestore/lite';
import { db } from '../../db/Config';
import FilmItem from '../FilmItem';
import InfoMovie from './InfoMovie';




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
    
    <View style={styles.mainContanier}>

     <View>

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
    </View>
  );
}

const styles=StyleSheet.create({
  mainContanier:{
      paddingTop:5,
      backgroundColor:"#223654",
    }, 
  
    txt:{
        fontSize:0,
        textAlign:"center"
    },
   


});



export default ActionMovie;


