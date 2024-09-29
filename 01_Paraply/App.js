import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Firebase-importer
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Firestore

// Import af mine skærme
import HomeView from './views/HomeView';
import MapViewScreen from './views/MapViewScreen';
import ReservationView from './views/ReservationView';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMfN8pxB-jYRftzQlHLzqXIUZTDmv4gPQ",
    authDomain: "paraply-291ca.firebaseapp.com",
    databaseURL: "https://paraply-291ca-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "paraply-291ca",
    storageBucket: "paraply-291ca.appspot.com",
    messagingSenderId: "829793943310",
    appId: "1:829793943310:web:33e141c44030d81a47a15f"
};

// Initialiser Firebase og Firestore
let app;
if(!getApps().length) {
    app = initializeApp(firebaseConfig);
    console.log('Firebase initialized');
} else {
    app = getApps()[0];
}

const db = getFirestore(app); // Initialiser Firestore instans
export { db }; // Eksporter Firestore instansen

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
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    >
      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen name="Map" component={MapViewScreen} />
      <Tab.Screen name="Reservation" component={ReservationView} />
    </Tab.Navigator>
  )
}

// App-funktion med Stack Navigator, der indeholder alle skærme
export default function App() {
    return ( 
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="Reservation" component={ReservationView} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
    );
  }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});