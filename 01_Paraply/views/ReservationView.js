import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

export default function ReservationView({ route, navigation }) {
    /*const { station } = route.params; // Modtag stationens data fra navigationen*/
    /*const station = route?.params?.station || { name: "General reservation", availableUmbrellas: 0 }; // Håndter både specifik station og generel reservation*/
    /*const [availableUmbrellas, setAvailableUmbrellas] = useState(station.available_umbrellas); // Stationens antal paraplyer*/

    const station = route?.params?.station || null; // Få den valgte station eller null
    const [availableUmbrellas, setAvailableUmbrellas] = useState(station?.available_umbrellas || 0); // Tilgængelige paraplyer
    const [currentReservation, setCurrentReservation] = useState(null); // Hold styr på igangværende reservation

    useEffect(() => {
        if (station) {
            // Hvis vi har data om en station, sæt de tilgængelige paraplyer
            setAvailableUmbrellas(station.available_umbrellas);
        }
    }, [station]);

    // Håndter reservation af paraply
    const handleReservation = () => {
        if(availableUmbrellas > 0) {
            setAvailableUmbrellas(availableUmbrellas - 1); // Reducer antal tilgængelige paraplyer
            setCurrentReservation({ stationName: station.name, umbrellas: 1 }); // Gem reservation
            Alert.alert('Reservation succesfuld', `Du har reserveret en paraply fra ${station.name}`);
        } else {
            Alert.alert('Ingen tilgængelige paraplyer', 'Der er ingen paraplyer tilgængelige lige nu.');
        }
    };

    // Håndter afslutning af reservation
    const handleEndReservation = () => {
        setCurrentReservation(null); // Nulstil igangværende reservation
        Alert.alert('Reservation afsluttet', 'Din reservation er afsluttet.');
    };

    return (
        <View style={styles.container}>
            {/* Hvis vi har data om en station */}
            {station && (
                <>
                    <Text style={styles.stationName}>{station.name}</Text>
                    <Text style={styles.infoText}>Tilgængelige paraplyer: {availableUmbrellas}</Text>
                    <Button title="Reserver en paraply" onPress={handleReservation} />
                </>
            )}
            {/* Vis igangværende reservation, hvis den findes */}
            {currentReservation && (
                <View style={styles.reservationContainer}>
                    <Text style={styles.infoText}>Igangværende reservation: {currentReservation.umbrellas} paraply fra {currentReservation.stationName}</Text>
                    <Button title="Afslut reservation" onPress={handleEndReservation} />
                </View>
            )}
            {!station && currentReservation && (
                <Text style={styles.infoText}>Ingen igangværende reservation.</Text>
            )}
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    stationName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    infoText: {
        fontSize: 18,
        marginBottom: 40,
    },
    reservationContainer: {
        marginTop: 40,
        alignItems: 'center',
    }
});