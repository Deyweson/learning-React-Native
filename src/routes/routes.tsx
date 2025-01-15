import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import SignIn from "../screens/sing-in";
import Details from "../screens/details";


const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes(): JSX.Element {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SignIn" component={SignIn} />
      <Screen options={{ headerShown: true }} name="Home" component={Home} />
      <Screen name="Details" component={Details} />
    </Navigator>
  )
}