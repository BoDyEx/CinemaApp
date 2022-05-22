import React,{useState,useEffect} from 'react';
import {   View, StyleSheet,FlatList,TouchableOpacity,Text} from 'react-native';
import { collection, getDocs} from 'firebase/firestore';
import FilmItem from '../FilmItem';
import { db } from '../../db/Config';




const CartoonMovie=({ navigation, route })=>{
  const[movies,setmovies]=useState([]);
  const {myuser}=route.params;


  useEffect(async() => {
    //Runs only on the first render
    const movieCol = collection(db, 'cartoon_movie');
    const movie_Snapshot = await getDocs(movieCol);
    const movie_List = movie_Snapshot.docs.map(doc => doc.data());
    setmovies(movie_List);
  }, []);

  
      

  return(
    
    <View style={styles.mainContanier}>
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



export default CartoonMovie;


