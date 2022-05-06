import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { register } from "../../db/auth/auth";
import { useState } from "react";

export default function Register  ({navigation}){
  
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");

 
  return (
  
    <View style={styles.container2}>
      <View >
    <Text style={styles.container3}><h2>Create New Account</h2></Text>
    <label style={{fontSize:20,fontWeight: "bold",marginTop:30}} >Email</label>
    <View style={styles.container1}>
         <TextInput
           onChangeText={setEmail}
           keyboardType="email-address"
           placeholder="Enter Email"

         />
       </View>
           <label style={{fontSize:20,fontWeight: "bold",marginTop:0}} >Password</label>
      <View style={styles.container1}>
      <TextInput
           onChangeText={setpassword}
           keyboardType="visible-password"
           secureTextEntry={true}
           placeholder="Enter password"
         />
      </View>
      
       <View  style={styles.Button}>
       <Button
          title="Register" 
          onPress={() => {
            console.log(email, password);
            register(email,password)   
              .then(
              ()=> { navigation.navigate('Login')} 
              )
              .catch((e) => setError(e.message));
          } 
        
        } color="#53E8C6"
        />
        <Text>{error}</Text>

       
      </View>
      </View>
</View>
  );
};
 
 
 
 const styles = StyleSheet.create({          
   container2:{
     backgroundColor:"#223654",
     marginTop:0,
   },
   container3:{
     marginLeft:50,
     marginTop:112,
     width: 300,
     position:"center",
     fontFamily: "Cochin",
     fontSize: 20,
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


Button:{
  width: 90,
  marginTop:85,
  marginLeft:150,
  borderRadius: 20,
  overflow: "hidden",
},


   
 });
        

