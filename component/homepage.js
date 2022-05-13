import {Image,StyleSheet,Text,View,Button,TouchableOpacity,ImageBackground} from "react-native";
import icon from "../assets/images.jpg";

export default function homepage({ navigation }) {
    return (
        <View style={styles.container}>
          
          <Image source={require('../assets/logo.png')} style={styles.imeg} />

          <TouchableOpacity 
            style={styles.button}
            onPress={() => {
              navigation.navigate("Login");
            }}        
                >
              <Text style={styles.txtbtn}>الدخول</Text>
          </TouchableOpacity>


          <TouchableOpacity 
          style={styles.buttonResgister}
            onPress={() => {
              navigation.navigate("Register");
            }}      
                >
              <Text style={styles.txtbtnResgister} >تسجيل حساب جديد</Text>
          </TouchableOpacity>
        
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#223654',
    },
    
    Button:{
      marginTop:5,
      width:100,
      borderRadius: 20,
},
Button1:{
  width:100,
  borderRadius: 20,
  marginTop:10,
  
},
text:{

  marginTop:60,
  marginLeft:50,
  position:"center",
  fontSize: 25,
  color:"white",
 textAlign: 'center'

  
  
},
imeg: {
    width: "60%",
    height: "35%",
    marginHorizontal:"20%",
    marginTop:100,

},
txtbtn:{
  color:"white",
  fontSize:15,
  alignSelf: "center",

  
  
},
txtbtnResgister:{
  color:"#EECD45",
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

buttonResgister:{
  margin:40,
  marginHorizontal:"25%",
},


  });