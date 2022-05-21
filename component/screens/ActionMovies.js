import React,{useState,useEffect} from 'react';
import {   View, StyleSheet,FlatList,TouchableOpacity , SafeAreaView,ImageBackground} from 'react-native';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../../db/Config';
import FilmItem from '../FilmItem';
import { TextInput } from 'react-native-web';
import { Button } from 'react-native-elements';




const ActionMovie=({ navigation, route })=>{

  useEffect(async() => {
    //Runs only on the first render
    const movieCol = collection(db, 'action_movie');
    const movie_Snapshot = await getDocs(movieCol);
    const movie_List = movie_Snapshot.docs.map(doc => doc.data());
    setmovies(movie_List);
  }, []);

  const[movies,setmovies]=useState([]);
  const[searchItem,setsearchItem]=useState();
  const[data]=useState([]);
  console.log(movies) ;

  const search = (searchItem) => {    
    let mmm = movies ;
    if(searchItem.length == 0){
      setmovies(mmm); 
      console.log("zero item");
    }else {
      let s = "";
      s = searchItem;
      let h = 0;
      
      for (let i = 0; i < movies.length; i++) {
        if( movies[i].name_film.match(s)){
          data[h] = movies[i]; 
          h++
        }
          
      }
      setmovies(data);
    }
      
  };

  return(
    <ImageBackground source={require("../backgroundApp.jpg")} resizeMode="cover" style={styles.image}>


          <TextInput
              placeholder="Search"
              onChangeText={setsearchItem}          
          />
          <Button title="search" onPress={()=>search(searchItem)} />
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


