import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import homepage from "./component/homepage";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="homepage">
        
       
        <Stack.Screen name="Cinema" component={homepage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

