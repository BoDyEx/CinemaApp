
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import homepage from "./component/homepage";
import Register from "./component/screens/Register";
import LoginScreen from './component/screens/Login';
import fhome from "./component/fhome";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="homepage">
      
      <Stack.Screen name="Cinema" component={homepage} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={fhome} options={{title:"Movies"}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

