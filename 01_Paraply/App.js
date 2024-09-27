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

// Opret separate Stack Navigators for hver skærm
const HomeStack = createStackNavigator();
const MapStack = createStackNavigator();
const ReservationStack = createStackNavigator();

// Stack for Home
function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeView} options={{ headerShown: null }} />
        </HomeStack.Navigator>
    );
}

// Stack for Map
function MapStackScreen() {
    return (
        <MapStack.Navigator>
            <MapStack.Screen name="Map" component={MapViewScreen} options={{ headerShown: null }} />
        </MapStack.Navigator>
    );
}

// Stack for Reservation
function ReservationStackScreen() {
    return (
        <ReservationStack.Navigator>
            <ReservationStack.Screen name="Reservation" component={ReservationView} options={{ headerShown: null }} />
        </ReservationStack.Navigator>
    );
}

// Bottom Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
    return ( 
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;
                if(route.name === 'Home') {
                    iconName = 'home';
                } else if(route.name === 'Map') {
                    iconName = 'map';
                } else if(route.name === 'Reservation') {
                    iconName = 'add';
                } 
                // Returner det rigtige Ionicons baseret på fanen
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}>
                <Tab.Screen name="Home" component={HomeStackScreen} />
                <Tab.Screen name="Map" component={MapStackScreen} />
                <Tab.Screen name="Reservation" component={ReservationStackScreen} />
            </Tab.Navigator>
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


/*// Initialiser Firebase efter min const af firebase Configurationen
export default function App() {
  // Vi kontrollerer at der ikke allerede er en initialiseret instans af firebase
  // Så undgår vi fejlen Firebase App named '[DEFAULT]' already exists (app/duplicate-app).
  if (getApps().length < 1) {
    initializeApp(firebaseConfig);
    console.log("Firebase On!");
    // Initialize other firebase products here
  }

  const Stack = createStackNavigator(); // Opret Stack navigator
  const Tab = createBottomTabNavigator(); // Initialiser en Bottom navigatorer 

  // Opret funktion kaldet StackNavigation, som skal returnere 3 Screens med "name" samt komponentnavnene HomeView, MapViewScreen og ReservationView
  const StackNavigation = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={HomeView} options={{headerShown:null}} />
        <Stack.Screen name={'Map'} component={MapViewScreen} options={{headerShown:null}} />
        <Stack.Screen name={'Reservation'} component={ReservationView} options={{headerShown:null}} />
      </Stack.Navigator>
    )
  }

  // Opret to Tab.Screen med name og component, som henholdvis skal være min StackNavigation, MapViewScreen og ReservationView
  const BottomNavigaton = () => {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name={'Home'} component={StackNavigation} options={{tabBarIcon: () => ( <Ionicons name="home" size={20} />)}} />
          <Tab.Screen name={'Map'} component={MapViewScreen} options={{tabBarIcon: () => ( <Ionicons name="map" size={20} />)}} />
          <Tab.Screen name={'Reservation'} component={ReservationView} options={{tabBarIcon: () => ( <Ionicons name="add" size={20} />)}} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }

  // Tilføj BottomNavigation i en endelig return function.
  return (
    <BottomNavigaton/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
