import {Image,StyleSheet,Text,View,Button,TouchableOpacity,ImageBackground} from "react-native";
import cinema from "../assets/cinema.jpeg";

export default function homepage({ navigation }) {
    return (
        <View style={styles.container}>
        <ImageBackground source={cinema} resizeMode="cover" style={styles.imeg}>
        <View style={styles.Button}>
          <Button title="Log in" color="#0000FF" onPress={() => {
            navigation.navigate("Login");
          }}></Button>
        </View>
        <View style={styles.Button1}>
          <Button title="Sign up" color="#0000FF" onPress={() => {
            navigation.navigate("Register");
          }}></Button>
        </View>
        </ImageBackground>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imeg: {
      flex: 1,
      padding: 20,
      alignItems: "center",
      
    },
    Button1:{
        width: 100,
        marginLeft:250,
        marginTop:-580,
  

    },
    Button:{
        width: 100,
        paddingVertical:545,
        marginRight:180,
     

    },
    
  });