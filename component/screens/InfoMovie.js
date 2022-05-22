import React,{useState,useEffect} from 'react';
import { Text , View, TextInput,StyleSheet,Image,TouchableOpacity,ScrollView} from 'react-native';
import { collection, getDocs ,doc, setDoc,deleteDoc,addDoc} from 'firebase/firestore';
import firestore from '@react-native-firebase/firestore';

import { db } from '../../db/Config';
import { user } from '../../db/auth/auth';



const InfoMovie=({ navigation, route })=>{
      const { item,myuser } = route.params;
      const [name_film,setname_film]=useState("");
      const[ename_film,setename_film]=useState("");


      

      const deletMovie=async()=>{    
        try {
          await deleteDoc(doc(db, "action_movie", item.key)).then(
            ()=> { navigation.navigate('Home',{myuser})} 
            );
          console.log("Document deleted with ID: ");
        } catch (error) {
          console.error("Error deleting document: ", error);
        }
      };

  



  
      

  return(
    
    <View style={styles.container}>

      <Image
        style={styles.cover}
        source={{
          uri:item.cover_link
        }}
      />  

      <ScrollView style={{padding:'5%'}}>

      <Text style={styles.txt}>اسم الفليم</Text>

      <Text style={styles.txtName}>{item.name_film}</Text>

        {/*admin */}
      {
        myuser[0].role==="Admin"?<View style={styles.admin}>
        <TouchableOpacity 
          style={styles.adminbtn}
          onPress={() => navigation.navigate('WatchPage',{item})}
      
              >
            <Text style={styles.admintxtbtn}>عدل</Text>
        </TouchableOpacity>
        <TextInput   onChangeText={setename_film}  value={ename_film} style={styles.admintxt}/>
  
        </View>
        :<View></View>
      }
      
    


      <Text style={styles.txt}>اسماء الممثلين</Text>
      <Text style={styles.txt2}>{item.actors} </Text>

        {/*admin */}
        {
        myuser[0].role==="Admin"?
        <View style={styles.admin}>
        <TouchableOpacity 
          style={styles.adminbtn}
          onPress={() => navigation.navigate('WatchPage',{item})}
      
              >
            <Text style={styles.admintxtbtn}>عدل</Text>
        </TouchableOpacity>
        <TextInput   onChangeText={setename_film}  value={ename_film} style={styles.admintxt}/>
  
        </View>
        :<View></View>
      }
      
     

      <TouchableOpacity 
        style={styles.adminbtn}
        onPress={deletMovie}
    
            >
          <Text style={styles.admintxtbtn}>حذف</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('WatchPage',{item})}
    
            >
          <Text style={styles.txtbtn}>شاهد الان</Text>
      </TouchableOpacity>



    

      </ScrollView>
    </View>
  );
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#223654",
    
      },
      cover: {
        width:'100%',
        height: "35%",
        borderColor:"#53E8C6",
        opacity:"75%",
      },
      txt:{
        color:"#53E8C6",
        fontSize:20,
        margin:10,
      },
        txtName:{
        color:"white",
        fontSize:25,
        textDecorationLine: 'underline',
        textAlign:"center",
        borderWidth:2,
        padding:10,
        borderColor:"white",
        borderRadius:10,
        
      },
      txt2:{
        color:"white",
        fontSize:15,
        textAlign:"center",
        borderWidth:2,
        padding:10,
        borderColor:"white",
        borderRadius:10,
        
      },
      btn:{
        width:"10%",
        height:"10%",
        borderRadius: 10,
        backgroundColor: "oldlace",
        alignSelf: "center",
        marginTop:100,


    
      },
      txtbtn:{
        color:"white",
        fontSize:20,
        alignSelf: "center",

        
        
      },
      button:{
        backgroundColor:"#53E8C6",
        width:"50%",
        padding:15,
        borderRadius:30,
        marginTop:10,
        marginHorizontal:"25%"


        
        
      },
      admin:{
        flexDirection: "row"

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
        alignSelf:'flex-start'


      },

      admintxtbtn:{
        color:"white",
        fontSize:10,
        alignSelf: "center",
      },
    



});



export default InfoMovie;


