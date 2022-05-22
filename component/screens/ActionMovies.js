import React,{useState,useEffect} from 'react';
import {   Text,View, StyleSheet,FlatList,TouchableOpacity , SafeAreaView,ImageBackground, Button} from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../db/Config';
import FilmItem from '../FilmItem';




const ActionMovie=({ navigation, route })=>{
  const[movies,setmovies]=useState([]);
  
  const {myuser}=route.params;

  useEffect(async() => {
    //Runs only on the first render
    const movieCol = collection(db, 'action_movie');
    const movie_Snapshot = await getDocs(movieCol);
    const movie_List = movie_Snapshot.docs.map(doc => doc.data());
    setmovies(movie_List);
  }, []);

  
      

  return(
    <ImageBackground source={require("../backgroundApp.jpg")} resizeMode="cover" style={styles.image}>
      <TouchableOpacity 
          style={styles.adminbtn}
          onPress={() => navigation.navigate('Profile',{myuser})}
      
              >
            <Text style={styles.admintxtbtn}>صفحتك</Text>
        </TouchableOpacity>


          <FlatList 
            data={movies}
            renderItem={({item})=>(
              <TouchableOpacity         
                onPress={() => navigation.navigate('InfoMovie',{item,myuser})}
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
    adminbtn:{
      backgroundColor:"#53E8C6",
      width:"25%",
      padding:10,
      borderRadius:20,
      alignSelf:'flex-start'


    },

    admintxtbtn:{
      color:"white",
      fontSize:10,
      alignSelf: "center",
    },
  


});



export default ActionMovie;


