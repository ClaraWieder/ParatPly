import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import { useEffect, useState } from "react";
import MapView, { Callout, Marker } from 'react-native-maps';
import * as Location from 'expo-location'; // Expo Location API

import { collection, getDocs } from 'firebase/firestore'; // Importer kun de nødvendige Firestore-funktioner
import { db } from '../App'; // Importer Firestore-instansen fra App.js


export default function MapViewScreen({ navigation }) { // Tilføj navigation som prop
    const [stations, setStations] = useState([]); // Stationer fra Firestore
    const [loading, setLoading] = useState(true); // Loader-indikator
    const [userLocation, setUserLocation] = useState(null); // Brugerlokation

    useEffect(() => {
        // Hent paraplystationer fra Firestore
        const fetchStations = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'stations')); // Hent data fra 'stations'-samlingen
                const stationsList = querySnapshot.docs.map(doc => ({
                    id: doc.id, // Inkluder dokumentets ID for reservation
                    ...doc.data()
                }));
                setStations(stationsList); // Opdater stationer
                setLoading(false); // Stop loader
            } catch (error) {
                console.error("Error fetching stations: ", error);
                setLoading(false);
            }
        };

        // Hent paraplystationer fra Firestore
        fetchStations();

        // Hent brugerens aktuelle placering
        const fetchUserLocation = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if(status !== 'granted') {
                console.log("Placeringstilladelse nægtet.");
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setUserLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.005, // Mindre zoom for brugerens lokation
                longitudeDelta: 0.005,
            });
        };
        fetchUserLocation();
    }, []);

    const [region, setRegion] = useState({
        latitude: 55.6761, // Standard placering, hvis brugerlokation ikke er tilgængelig
        longitude: 12.5683,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    });

    // Funktion der viser en pop-up, når man trykker på en pin
    /*const handleMarkerPress = (station) => {
        Alert.alert(
            `Reserver paraply fra ${station.name}`, `Tilgængelige paraplyer: ${station.available_umbrellas}`,
            [
                {
                    text: 'Nej',
                    style: 'cancel',
                },
                {
                    text: 'Ja',
                    onPress: () => navigation.navigate('Reservation', { station }), // Naviger til ReservationView med station-data
                },
            ]
        );
    };*/

    if(loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Henter paraplystationer...</Text>
            </View>
        );
    }
    
    return (
    <View style={styles.container}>
        <MapView 
            style={styles.map} 
            region={userLocation || region} // Hvis brugerlokationen er tilgængelig, brug den
            onRegionChangeComplete={(region) => setRegion(region)}
            showsUserLocation={true} // Viser brugerens lokation som blå prik
            //followsUserLocation={true} // Følger brugerens lokation automatisk
        >
            {/* Marker for paraplystationer hentet fra Firebase */}
            {stations.map((station, index) => (
                <Marker 
                    key={index} 
                    coordinate={{ latitude: station.latitude, longitude: station.longitude }} 
                    title={station.name} 
                    //description={`${station.available_umbrellas} paraplyer tilgængelige`} 
                    //onPress={() => navigation.navigate('Reservation', { station })} // Naviger til ReservationView med station-data
                >
                    {/* Callout med stationens detaljer */}
                    <Callout tooltip>
                        <View style={styles.calloutContainer}>
                            <Text style={styles.stationName}>Station Details</Text>
                            <Text>Available Umbrellas: {station.available_umbrellas}</Text>
                            <Text>Staion Name: {station.name}</Text>
                            <Text>5.50 kr./min.</Text>
                            <TouchableOpacity style={styles.detailsButton} onPress={() => navigation.navigate('Reservation', { station })}>
                                <Text style={styles.detailsButtonText}>View Details</Text>
                            </TouchableOpacity>
                        </View>
                    </Callout>
                </Marker>
            ))}
        </MapView>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    calloutContainer: {
        width: 200,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    stationName: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },
    detailsButton: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    detailsButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});