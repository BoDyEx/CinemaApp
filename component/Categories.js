import {Image,StyleSheet,Text,View,Button,TouchableOpacity,ImageBackground} from "react-native";

export default function Categories({ navigation }) {
    return (
       <View style={styles.container}>
               <Text style={styles.txt}>اختر نوع الفليم</Text>

       <TouchableOpacity 
          style={styles.button}
          onPress={() => {
            navigation.navigate("ActionMovie");
          }}
          >
          <Text style={styles.txtbtn} >اكشن</Text>
      </TouchableOpacity>

      <TouchableOpacity 
          style={styles.button}
          onPress={() => {
            navigation.navigate("ComdyMovie");
          }}
          >
          <Text style={styles.txtbtn} >كوميدى</Text>
      </TouchableOpacity>

      <TouchableOpacity 
          style={styles.button}
          onPress={() => {
            navigation.navigate("RomanticMovie");
          }}
          >
          <Text style={styles.txtbtn} >رومانسى</Text>
      </TouchableOpacity>

      <TouchableOpacity 
          style={styles.button}
          onPress={() => {
            navigation.navigate("CartoonMovie");
          }}
          >
          <Text style={styles.txtbtn} >كرتون</Text>
      </TouchableOpacity>
      
       </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:"#223654",
      padding:15,
    },
          
      txt:{
        color:"#EECD45",
        fontSize:20,
        alignSelf: "center",
        marginTop:"25%",
      },
      txtbtn:{
        color:"#223654",
        fontSize:20,
        alignSelf: "center",
        fontWeight:"bold", 
      },
      button:{
        width:"80%",
        padding:10,
        borderRadius:30,
        marginTop:20,
        alignSelf:"center",
        backgroundColor:"#53E8C6"
        
      },
  });