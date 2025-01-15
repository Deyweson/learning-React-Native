import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./routes";


export default function Routes(): JSX.Element {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}