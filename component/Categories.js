import {Image,StyleSheet,Text,View,Button,TouchableOpacity,ImageBackground} from "react-native";
import cinema from "../assets/cinema.jpeg";

export default function Categories({ navigation }) {
    return (
       <View style={styles.container}>
           <View>
               <Text style={styles.text}>
               Welcome to the movies section
               </Text>
           </View>
       <View style={styles.Button1}>
          <Button title="romantic" color="#53E8C6" onPress={() => {
            navigation.navigate("Register");
          }}></Button>
        </View>
        <View style={styles.Button1}>
          <Button title="comdey" color="#53E8C6" onPress={() => {
            navigation.navigate("Register");
          }}></Button>
        </View>
        <View style={styles.Button1}>
          <Button title="action" color="#53E8C6" onPress={() => {
            navigation.navigate("Register");
          }}></Button>
        </View>
        <View style={styles.Button1}>
          <Button title="action2" color="#53E8C6" onPress={() => {
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
    Button1:{
        width:300,
        marginTop:50,
        marginLeft:40,
        borderRadius: 20,
        overflow: "hidden",
    
      },
      text:{
        fontSize:20,
        marginTop:60,
        marginLeft:35,
        position:"center",
        fontFamily: "Cochin",
        fontSize: 25,
        fontWeight: "bold"
      },
      
      
    
  });