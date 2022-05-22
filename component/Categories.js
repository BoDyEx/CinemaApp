import React,{useState,useEffect} from 'react';

import {Image,StyleSheet,Text,View,Button,TouchableOpacity, ScrollView,FlatList,ImageBackground,TextInput} from "react-native";

import { db } from "../db/Config";
import { collection, getDocs } from 'firebase/firestore';
import FilmItemCard from "./FilmItemCard";

export default function Categories({ navigation, route }) {
  const[actionmovies,setactionmovies]=useState([]);
  const[comdymovies,setcomdymovies]=useState([]);
  const[cartoonmovies,setcartoonmovies]=useState([]);
  const[romanticmovies,setromanticmovies]=useState([]);

  const {myuser}=route.params;
  


  




  useEffect(async() => {
    //Runs only on the first render
    console.log(myuser[0].id);

    const actionmovieCol = collection(db, 'action_movie');
    const actionmovie_Snapshot = await getDocs(actionmovieCol);
    const actionmovie_List = actionmovie_Snapshot.docs.map(doc => doc.data());
    const actioncartmovie=actionmovie_List.slice(0,3)
    setactionmovies(actioncartmovie);

    const comdymovieCol = collection(db, 'comdy_movie');
    const comdymovie_Snapshot = await getDocs(comdymovieCol);
    const comdymovie_List = comdymovie_Snapshot.docs.map(doc => doc.data());
    const comdycartmovie=comdymovie_List.slice(0,2)
    setcomdymovies(comdycartmovie);

    const cartoonmovieCol = collection(db, 'cartoon_movie');
    const cartoonmovie_Snapshot = await getDocs(cartoonmovieCol);
    const cartoonmovie_List = cartoonmovie_Snapshot.docs.map(doc => doc.data());
    const cartooncartmovie=cartoonmovie_List.slice(0,2)
    setcartoonmovies(cartooncartmovie);

    const romanticmovieCol = collection(db, 'romantic_movie');
    const romanticmovie_Snapshot = await getDocs(romanticmovieCol);
    const romanticmovie_List = romanticmovie_Snapshot.docs.map(doc => doc.data());
    const romanticcartmovie=romanticmovie_List.slice(0,2)
    setromanticmovies(romanticcartmovie);
  }, []);



 
    return (
      <ImageBackground source={require('../assets/background.png')}  resizeMode="cover" style={styles.image}>
        {
        myuser[0].role==="Admin"?<View style={styles.admin}>
        <TouchableOpacity 
          style={styles.adminbtn}
          onPress={() => navigation.navigate('AddMovie')}
      
              >
            <Text style={styles.admintxtbtn}>اضافة فليم</Text>
        </TouchableOpacity>
  
        </View>
        :<View></View>
      }
      
          <ScrollView>
          <View style={styles.container}>

            <View style={[styles.Categories,styles.shadowProp]}>
              <View style={styles.bar}>
              <TouchableOpacity 
                    style={styles.button}
                    onPress={() => {
                      navigation.navigate("ActionMovie",{myuser});
                    }}
                    >
                    <Text style={styles.txtbtn} >ألمزيد</Text>
                </TouchableOpacity>
                <Text style={styles.txt}>افلام اكشن</Text>
                
              

              </View>
              <FlatList 
              style={{flexDirection:'row-reverse'}}
                horizontal={true}
                data={actionmovies}
                renderItem={({item})=>(
                  <TouchableOpacity         
                    onPress={() => navigation.navigate('InfoMovie',{item,myuser})}
                  >
                    <FilmItemCard  link={item.image_link} />
                  </TouchableOpacity>             
                  )}
                />
                      
            </View>
            <View style={[styles.Categories,styles.shadowProp]}>
              <View style={styles.bar}>
              <TouchableOpacity 
                    style={styles.button}
                    onPress={() => {
                      navigation.navigate("ComdyMovie",{myuser});
                    }}
                    >
                    <Text style={styles.txtbtn} >ألمزيد</Text>
                </TouchableOpacity>
                <Text style={styles.txt}>افلام كوميدى</Text>
                
              

              </View>
              <FlatList 
                horizontal={true}
                data={comdymovies}
                renderItem={({item})=>(
                  <TouchableOpacity         
                    onPress={() => navigation.navigate('InfoMovie',{item,myuser})}
                  >
                    <FilmItemCard  link={item.image_link} />
                  </TouchableOpacity>             
                  )}
                />
                      
            </View>


            <View style={[styles.Categories,styles.shadowProp]}>
              <View style={styles.bar}>
              <TouchableOpacity 
                    style={styles.button}
                    onPress={() => {
                      navigation.navigate("CartoonMovie",{myuser});
                    }}
                    >
                    <Text style={styles.txtbtn} >ألمزيد</Text>
                </TouchableOpacity>
                <Text style={styles.txt}>افلام كرتون</Text>
                
              

              </View>
              <FlatList 
                horizontal={true}
                data={cartoonmovies}
                renderItem={({item})=>(
                  <TouchableOpacity         
                    onPress={() => navigation.navigate('InfoMovie',{item,myuser})}
                  >
                    <FilmItemCard  link={item.image_link} />
                  </TouchableOpacity>             
                  )}
                />
                      
            </View>


            <View style={[styles.Categories,styles.shadowProp]}>
              <View style={styles.bar}>
              <TouchableOpacity 
                    style={styles.button}
                    onPress={() => {
                      navigation.navigate("RomanticMovie",{myuser});
                    }}
                    >
                    <Text style={styles.txtbtn} >ألمزيد</Text>
                </TouchableOpacity>
                <Text style={styles.txt}>افلام رومانسى</Text>
                
              

              </View>
              <FlatList 
                horizontal={true}
                flexDirection='rtl'
                data={romanticmovies}
                renderItem={({item})=>(
                  <TouchableOpacity         
                    onPress={() => navigation.navigate('InfoMovie',{item,myuser})}
                  >
                    <FilmItemCard  link={item.image_link} />
                  </TouchableOpacity>             
                  )}
                />
                      
            </View>


            
                
          </View>
          <View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.txtend}>كوميدى اكشن </Text>
            </TouchableOpacity>
          </View>

          </ScrollView>
       </ImageBackground>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex:1,
      padding:10,
    
    },
          
      txt:{
        color:"#EECD45",
        fontSize:20,
        alignSelf:'flex-start',
        marginStart:'50%'
      },
      txtbtn:{
        color:"#223654",
        fontSize:12,
        alignSelf: "center",
        fontWeight:"bold", 
      },
      button:{
        width:"15%",
        padding:5,
        borderRadius:10,
        backgroundColor:"#53E8C6",
        alignSelf:'flex-start',
        marginTop:2,
      },
      newbutton:{
        width:"80%",
        padding:10,
        borderRadius:30,
        marginTop:20,
        alignSelf:"center",
        backgroundColor:"#EECD45"
        
      },
      Categories:{
        width:"100%",
        padding:2,
        borderRadius:10,
        borderColor:"#EECD45",
        marginTop:20,
        alignSelf:"center",
       
        
        
      },
      bar:{
        flexDirection: 'row',
        width:"100%",
        height:"10%",

        

      },
      shadowProp: {
        shadowColor: '#030E19',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },

      image: {
        flex: 1,
        justifyContent: "center"
      },
      btn:{
      },
      txtend:{

      },

      admintxt:{
        color:"white",
        fontSize:10,
        textAlign:"center",
        borderWidth:2,
        padding:3,
        borderColor:"white",
        borderRadius:5,
        marginStart:"1%",
        width:"75%",



        
      },
      adminbtn:{
        backgroundColor:"#53E8C6",
        width:"25%",
        padding:10,
        borderRadius:20,
        alignSelf:'center',
        margin:10,


      },

      admintxtbtn:{
        color:"white",
        fontSize:15,
        alignSelf: "center",
      },
      
  });