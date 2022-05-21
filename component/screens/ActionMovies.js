import React,{useState,useEffect} from 'react';
import {   View, StyleSheet,FlatList,TouchableOpacity , SafeAreaView,ImageBackground,Text} from 'react-native';
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

  const search = (searchItem) => {    
    if(searchItem.length == 0){
      setmovies(movies); 
    }else {
      let s = "";
      s = searchItem;
      let h = 0;
      let data = [];

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
    <View style={styles.mainContanier}>


          <TextInput
              placeholder="Search"
              onChangeText={setsearchItem} 
              style={styles.search}
         
          />
          <TouchableOpacity style={styles.button}  onPress={()=>search(searchItem)} >
          <Text style={styles.txtbtn}>search</Text>

          </TouchableOpacity>
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
    image: {
      flex: 1,
      justifyContent: "center",
      padding:2,
    },
    search:{
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius:15,
      borderColor:'#53E8C6',
      textAlign: 'left',
      color:"white"
    },
    button:{
  width:"20%",
  padding:10,
  borderRadius:30,
  marginTop:0,
  marginHorizontal:"40%",
  borderColor:"#53E8C6",
  borderWidth:0.5,
   
      
    },txtbtn:{
      color:"#53E8C6",
      fontSize:16,
      alignSelf: "center",
      fontWeight:"bold", 
    }

});



export default ActionMovie;


