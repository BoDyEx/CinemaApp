import React,{useState,useEffect} from 'react';
import {   View, StyleSheet,FlatList,TouchableOpacity,Text,TextInput} from 'react-native';
import { collection, getDocs} from 'firebase/firestore';
import FilmItem from '../FilmItem';
import { db } from '../../db/Config';




const CartoonMovie=({ navigation, route })=>{
  const[movies,setmovies]=useState([]);
  const[tempmovies,settempmovies]=useState([]);

  const {myuser}=route.params;

  const[searchItem,setsearchItem]=useState("");

  useEffect(async() => {
    //Runs only on the first render
    const movieCol = collection(db, 'cartoon_movie');
    const movie_Snapshot = await getDocs(movieCol);
    const movie_List = movie_Snapshot.docs.map(doc => doc.data());
    settempmovies(movie_List);

    setmovies(movie_List);
  }, []);


  const search = (searchItem) => {    
    if(searchItem.length == 0){
      setmovies(tempmovies); 
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
<TouchableOpacity 
          style={styles.adminbtn}
          onPress={() => navigation.navigate('Profile',{myuser})}
      
              >
            <Text style={styles.admintxtbtn}>صفحتك</Text>
        </TouchableOpacity>
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
    
    });






export default CartoonMovie;


