import {Image,StyleSheet,Text,View,Button,TouchableOpacity,ImageBackground} from "react-native";
import cinema from "../assets/project.jpg";

export default function homepage({ navigation }) {
    return (
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>
              Welcome To CinemaApp
            </Text>
          </View>
          <View>
          <Image
           source={{ uri: 'cinema' }}
           style={{ width: 40, height: 40 }}
          />
          </View>
        <View style={styles.Button}>
          <Button title="Log in" color="#53E8C6" onPress={() => {
            navigation.navigate("Login");
          }}></Button>
        </View>
        <View style={styles.Button1}>
          <Button title="Sign up" color="#53E8C6" onPress={() => {
            navigation.navigate("Register");
          }}></Button>
        </View>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#223654',
    },
    
    Button:{
      marginTop:500,
      width:100,
      borderRadius: 20,
      overflow: "hidden",
      marginLeft:40
},
Button1:{
  marginTop:-34,
  width:100,
  borderRadius: 20,
  overflow: "hidden",
  marginLeft:235
},
text:{
  fontSize:20,
  marginTop:60,
  marginLeft:50,
  position:"center",
  fontFamily: "Cochin",
  fontSize: 25,
  fontWeight: "bold"
},
  });