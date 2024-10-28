import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GlobalStyles } from './styles/GlobalStyle';

// Import Firebase Firestore fra firebaseConfig.js
import { db } from './firebaseConfig'; // Ny import af db fra firebaseConfig.js

// Import af mine skærme
import HomeView from './views/HomeView';
import MapViewScreen from './views/MapViewScreen';
import ReservationView from './views/ReservationView';
import StationDetails from './views/StationDetails';
import QRCodeScanner from './views/QRCodeScanner';
import PaymentScreen from './views/PaymentScreen';

// Opret en Stack Navigator
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator(); // Bottom Tab Navigator

// Bundnavigation (Tabs)
function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if(route.name == 'Home') {
          iconName = 'home';
        } else if(route.name === 'Map') {
          iconName = 'map';
        } else if(route.name === 'Reservation') {
          iconName = 'add';
        } else if(route.name === 'Payment') {
          iconName = 'card';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarStyle: GlobalStyles.tabBarStyle, // Global stil for Tab bar
    })}
    >
      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen name="Map" component={MapViewScreen} />
      <Tab.Screen name="Reservation" component={ReservationView} />
      <Tab.Screen name="Payment" component={PaymentScreen} />
    </Tab.Navigator>
  );
}

// App-funktion med Stack Navigator, der indeholder alle skærme
export default function App() {
    return ( 
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ contentStyle: GlobalStyles.container }}>
            <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="Reservation" component={ReservationView} />
            <Stack.Screen name="StationDetails" component={StationDetails} />
            <Stack.Screen name="QRCodeScanner" component={QRCodeScanner} />
            <Stack.Screen name="Payment" component={PaymentScreen} />
          </Stack.Navigator>
        </NavigationContainer>
    );
}