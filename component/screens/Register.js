import { StyleSheet, Text, View, TextInput, Button,ImageBackground } from "react-native";
import { React, useState } from "react";
import { register } from "../../db/auth/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");


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
          title="Register" onPress={() => {
            console.log(email, password);
            register(email,password)
            .then(
              ()=> {
                navigation.navigate('fhome')} 
              )
              .catch((error) => setError(error.message));
          }}
        />

        <Text>{error}</Text>
      </View>
    </View>

  );
};

export default Register;

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