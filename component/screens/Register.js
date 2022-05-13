import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity } from "react-native";
import { register } from "../../db/auth/auth";
import { useState } from "react";
export default function Register  ({navigation}){
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  return ( 
    <View style={styles.container2} >
      <Text style={styles.txt}>انشاء حساب جديد</Text>
      <Text style={styles.label}>الايميل</Text>
      <TextInput
        style={styles.TextInput}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholder="ادخل الايميل"
      />
      <Text style={styles.label}>كلمة السر</Text>

      <TextInput
           style={styles.TextInput}
           onChangeText={setpassword}
           keyboardType="visible-password"
           secureTextEntry={true}
           placeholder="ادخل كلمة السر"
         />

      <TouchableOpacity 
          style={styles.button}
          onPress={() => {
            console.log(email, password);
            register(email,password)   
              .then(
              ()=> { navigation.navigate('Login')} 
              )
              .catch((e) => setError(e.message));
          }  
        }
                >
          <Text style={styles.txtbtn} >تسجيل</Text>
      </TouchableOpacity>
      
      <Text>{error}</Text>

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
   
txt:{
  color:"#EECD45",
  fontSize:20,
  alignSelf: "center",
},
label:{
  fontSize:15,
  color:"#EECD45",
  
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
 });