import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { View, Text, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';

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
                    
                    <TouchableOpacity style={styles.confirmButton} onPress={handleReservation}>
                        <Text style={styles.buttonText}>Lej en paraply</Text>
                    </TouchableOpacity>
                </>
            )}
            {/* Vis igangværende reservation, hvis den findes */}
            {currentReservation && (
                <View style={styles.reservationContainer}>
                    <Text style={styles.infoText}>Igangværende reservation: {currentReservation.umbrellas} paraply fra {currentReservation.stationName}</Text>
                    <TouchableOpacity style={styles.endButton} onPress={handleEndReservation}>
                        <Text style={styles.buttonText}>Aflsut Reservation</Text>
                    </TouchableOpacity>
                </View>
            )}
            {!station && !currentReservation && (
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
        padding: 16,
        justifyContent: 'center',
    },
    stationName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    infoText: {
        fontSize: 18,
        color: '#555',
        textAlign: 'center',
        marginBottom: 20,
    },
    reservationContainer: {
        marginTop: 40,
        alignItems: 'center',
    },
    confirmButton: {
        backgroundColor: '#000',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    endButton: {
        backgroundColor: '#000',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
