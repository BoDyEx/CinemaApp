
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import homepage from "./component/homepage";
import Register from "./component/screens/Register";
import LoginScreen from './component/screens/Login';
import fhome from "./component/Categories";
import { Header } from "react-native-elements";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
   
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#53E8C6'}}}  initialRouteName="homepage">

      <Stack.Screen  name="Cinema" component={homepage}  />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={fhome} options={{title:"Categories"}}/>


      </Stack.Navigator>
    </NavigationContainer>
   
  );
}
