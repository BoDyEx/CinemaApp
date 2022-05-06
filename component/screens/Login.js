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
      <View >
    <Text style={styles.container3}><h2>Welcome to your Account</h2></Text>
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
          title="Login" 
          onPress={() => {
            console.log(email, password);
            login(email,password)   
              .then(
              ()=> { navigation.navigate('Home')} 
              )
              .catch((e) => setError(e.message));
          } 
        
        } color="#53E8C6"
        />
        <Text>{error}</Text>

        <View >
        <Button title="register" onPress={openRegisterScreen} />
        </View>
      </View>
      </View>
</View>
  );
};
 const styles = StyleSheet.create({          
   container2:{
     backgroundColor:"#223654",
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
Button:{
  width: 90,
  marginTop:58,
  marginLeft:150,
  borderRadius: 20,
  overflow: "hidden",
},
 });
        

