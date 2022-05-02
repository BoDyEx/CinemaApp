import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { login } from "../../db/auth/auth";

import { useState } from "react";

export default function Login  ({navigation}){
  
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");

  const openRegisterScreen = () => {
    navigation.navigate('Register');
  }; 
  return (
  
    <View style={styles.container2}>
    <Text style={styles.container3}><h2>Create New Account</h2></Text>
    <label style={{fontSize:20}} >Email</label>
    <View style={styles.container1}>
         <TextInput
           onChangeText={setEmail}
           keyboardType="email-address"
           
         />
       </View>
       <View
         style={styles.Body}
       >
           <label style={{fontSize:20,marginTop:2}} >Password</label>
         <TextInput
           onChangeText={setpassword}
           keyboardType="visible-password"
           secureTextEntry={true}
           style={styles.container1}
         />
       </View>
       <View>
       <Button
          title="Login"
          onPress={() => {
            console.log(email, password);
            login(email,password)   
              .then(
              ()=> { navigation.navigate('Home')} 
              )
              .catch((e) => setError(e.message));
          } 
        
        }color="#FB081F"
        />
                    <Button title="register" style={styles.button} onPress={openRegisterScreen} />

        <Text>{error}</Text>
      </View>
    </View>
  );
};
 
 
 
 const styles = StyleSheet.create({
     container1: {
       marginTop: 5,
       flex:1 , borderColor: "black", borderWidth: 2,
       height: 100,
       borderRadius:2,
       borderRadius: 20,
      overflow: "hidden"
       }  ,          
   container2:{
     backgroundColor:"#8bc34a",
     marginTop:150,
     borderRadius: 20,
     overflow: "hidden"
   },
   container3:{
     marginLeft:80,
     width: 300,
     position:"center",
   }
   
 });
        

