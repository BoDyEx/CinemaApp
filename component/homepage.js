import {Image,StyleSheet,Text,View,Button,TouchableOpacity,ImageBackground} from "react-native";
import cinema from "../assets/cinema.jpeg";

export default function homepage({ navigation }) {
    return (
        <View style={styles.container}>
        <ImageBackground source={cinema} resizeMode="cover" style={styles.imeg}>
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
      
    }
  });