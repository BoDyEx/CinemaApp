import React,{useState,useEffect} from 'react';
import { Text , View, Button,TextInput,StyleSheet,FlatList,Image,TouchableOpacity} from 'react-native';

const InfoMovie=({ navigation, route })=>{
      const { item } = route.params;

  return(
    
    <View style={styles.container}>
      <Image
        style={styles.cover}
        source={{
          uri:item.cover_link
        }}
      />  

      <Text style={styles.txt}>اسم الفليم</Text>
      <Text style={styles.txtName}>{item.name_film}</Text>
      <Text style={styles.txt}>اسماء الممثلين</Text>
      <Text style={styles.txt2}>{item.actors} </Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('WatchPage',{item})}
    
            >
          <Text style={styles.txtbtn}>شاهد الان</Text>
      </TouchableOpacity>



    


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
        marginTop:50,
        marginHorizontal:"25%"


        
        
      },
    



});



export default InfoMovie;


