import React,{useState,useEffect} from 'react';
import {  Text, View, StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import { collection, getDocs} from 'firebase/firestore';
import { getAuth, signOut } from "firebase/auth";
import FilmItem from '../FilmItem';
import { db } from '../../db/Config';
import { Button } from 'react-native-elements';
import { auth } from '../../db/Config';



const Profile=({ navigation, route })=>{
  const {myuser}=route.params;




  
      

  return(
    
    <View style={styles.mainContanier}>
        <Text >{myuser[0].email}</Text>
        <Text >{myuser[0].role}</Text>
        <TouchableOpacity 
          style={styles.adminbtn}
          onPress={() => 
            signOut(auth).then(() => {
              // Sign-out successful.
              navigation.navigate('Cinema');
            }).catch((error) => {
              // An error happened.
            })
            }
      
              >
            <Text style={styles.admintxtbtn}>تسجيل خروج</Text>
        </TouchableOpacity>


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



export default Profile;


