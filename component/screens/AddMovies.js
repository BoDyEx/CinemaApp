import  React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity ,Picker,ScrollView,Alert} from 'react-native';
import { collection, getDocs ,doc, setDoc,deleteDoc} from 'firebase/firestore';
import { db } from '../../db/Config';


const AddMovie=({ navigation, route })=> {
  const[name_film,setname_film]=useState("");
  const[image_link,setimage_link]=useState("");
  const[film_link,setfilm_link]=useState("");
  const[actors,setactors]=useState("");
  const[cover_link,setcover_link]=useState("");
  const[temp,settemp]=useState([]);
  const key=Math.random().toString();

  
  const [selectedValue, setSelectedValue] = useState("action_movie");

      const SetData=async()=>{
          if(name_film===""||image_link===""||film_link===""||actors===""||cover_link===""){
              alert("Not enough data")
          }

          else{
          await setDoc(doc(db, selectedValue , key), {
              name_film: name_film,
              image_link:image_link,
              film_link:film_link,
              key:key,
              actors:actors,
              cover_link:cover_link,
              

          }
          
    
          )
          alert("movie added")

        };
        

  }





  
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.txt}>ادخل اسم الفليم</Text>
      <TextInput
              style={styles.input}
              placeholder="مثال : فول الصين العظيم"
              onChangeText={setname_film}
              

            />    

      <Text style={styles.txt}>اسماء الممثلين</Text>
       <TextInput
              style={styles.input}
              placeholder="احمد حلمى و عادل امام وحسن حسنى"
              onChangeText={setactors}

            />    


      <Text style={styles.txt}>لينك صورة الفليم</Text>
       <TextInput
              style={styles.input}
              placeholder="ضع هنا اى لينك لصوره"
              onChangeText={setimage_link}

            />    
      <Text style={styles.txt}>لينك غلاف الفليم</Text>
       <TextInput
              style={styles.input}
              placeholder="ضع لينك غلاف الفليم"
              onChangeText={setcover_link}

            />    
      <Text style={styles.txt}>معرف الفليم على اليوتيوب</Text>
       <TextInput
              style={styles.input}
              placeholder="3MucVBL49Gw"
              onChangeText={setfilm_link}

            />  

        <Text style={styles.txt}>اختر نوع الفليم</Text>


<Picker
        selectedValue={selectedValue}
        style={ styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="اكشن" value="action_movie" />
        <Picker.Item label="رومانسى" value="romantic_movie" />
        <Picker.Item label="كرتون" value="cartoon_movie" />

        <Picker.Item label="كوميدى" value="comdy_movie" />
      </Picker>
    <TouchableOpacity 
        style={styles.button}
        onPress={SetData}
    
            >
          <Text style={styles.txtbtn}>اضف </Text>
    </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#223654',
    padding: 20,
  },
  input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:15,
    borderColor:'#53E8C6',
    textAlign: 'right',
    color:"white"

  },
  txt:{
    alignSelf:'center',
    color:"white",
    fontSize:15,
  },

  txtbtn:{
    color:"white",
    fontSize:20,
    alignSelf: "center",

    
    
  },
  button:{
    backgroundColor:"#53E8C6",
    width:"50%",
    padding:10,
    borderRadius:30,
    marginTop:20,
    marginHorizontal:"25%"


    
    
  },
  picker:{
      color:"#53E8C6",
      borderColor:"#53E8C6",
      borderWidth:2,
      borderRadius:15,
      margin:5,
      
  },

 
});

export default AddMovie;

