
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import homepage from "./component/homepage";
import Register from "./component/screens/Register";
import LoginScreen from './component/screens/Login';
import fhome from "./component/Categories";
import { Header } from "react-native-elements";
import AddMovie from "./component/screens/AddMovies";
import ActionMovie from "./component/screens/ActionMovies";
import InfoMovie from "./component/screens/InfoMovie";
import WatchPage from "./component/screens/WatchPage";
import ComdyMovie from "./component/screens/ComdyMovies";
import CartoonMovie from "./component/screens/CartoonMovie";
import RomanticMovie from "./component/screens/RomanticMovie";


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
   
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={
        {headerStyle:{ backgroundColor:'#53E8C6', },         
        headerTitleAlign: 'center',
        headerTintColor:"#223654"
        
      }}  
        initialRouteName="homepage"
        >

      <Stack.Screen  name="Cinema" component={homepage}  options={{title:"مشاهدة الافلام"}}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{title:"الدخول"}}/>
      <Stack.Screen name="Register" component={Register}  options={{title:"التسجيل"}}/>


      <Stack.Screen name="Home" component={fhome} options={{title:"الفئات"}}/>
      <Stack.Screen  name="ActionMovie" component={ActionMovie} options={{title:"افلام اكشن"}} />
      <Stack.Screen  name="ComdyMovie" component={ComdyMovie} options={{title:"افلام كوميدى"}} />
      <Stack.Screen  name="CartoonMovie" component={CartoonMovie} options={{title:"افلام كرتون"}} />
      <Stack.Screen  name="RomanticMovie" component={RomanticMovie} options={{title:"افلام رومانسى"}} />
      <Stack.Screen  name="InfoMovie" component={InfoMovie} options={{title:"معلومات الفليم"}} />
      <Stack.Screen  name="WatchPage" component={WatchPage}  options={{title:"شاهد الفليم"}}/>





      </Stack.Navigator>
    </NavigationContainer>
   
  );
}
