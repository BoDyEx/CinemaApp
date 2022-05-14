import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity } from "react-native";
import { login } from "../../db/auth/auth";
import { useState } from "react";
import AddMovie from "./AddMovies";
export default function Login  ({navigation}){
  
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  const openRegisterScreen = () => {
    navigation.navigate('Register');
  }; 
  return (
  
    <View style={styles.container2}>
      <View >
    <Text style={styles.label} >الايميل</Text>

         <TextInput
           style={styles.TextInput}
           onChangeText={setEmail}
           keyboardType="email-address"
           placeholder=" ادخل ايميلك هنا"
           textAlign="right"

         />

       <Text style={styles.label} >كلمة السر</Text>

      <TextInput
          style={styles.TextInput}
           onChangeText={setpassword}
           keyboardType="visible-password"
           secureTextEntry={true}
           placeholder="ادخل كلمة السر هنا "
         />

<TouchableOpacity 
          style={styles.button}
          onPress={() => {
            console.log(email, password);
            login(email,password)   
              .then(
              ()=> { navigation.navigate('Home')} 
              )
              .catch((e) => setError(e.message));
          } 
        
        }     
                >
              <Text style={styles.txtbtn} >دخول</Text>
          </TouchableOpacity>
      
      
        <Text>{error}</Text>

      </View>
</View>
  );
};
 const styles = StyleSheet.create({          
   container2:{
     flex:1,
     backgroundColor:"#223654",
     padding:15,
      justifyContent:"center",   
    },
   container3:{
     marginLeft:50,
     marginTop:112,
     width: 300,
     position:"center",
     fontFamily: "Cochin",
     fontSize: 18,
    fontWeight: "bold"
   },
container1: {
  height: 50,
  marginTop:17,
  borderWidth: 5,
  borderRadius: 15,
  marginBottom: 40,
  fontSize: 20,
  padding: 10,
  backgroundColor:"#ffffff",
  borderColor:'#53E8C6'
},

label:{
  fontSize:15,
  color:"#EECD45",
  
  
},
txtbtn:{
  color:"white",
  fontSize:15,
  alignSelf: "center", 
},
button:{
  width:"50%",
  padding:10,
  borderRadius:30,
  marginTop:20,
  marginHorizontal:"25%",
  borderColor:"#53E8C6",
  borderWidth:2, 
  
},
TextInput:{
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
  borderRadius:15,
  borderColor:'#53E8C6',
  textAlign: 'right',
  color:"white"
  
},
 });
        

