import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert } from 'react-native';
// Vi bruger Legacy Camera API, da det er den eneste der virker i dette projekt. Den ny Camera API virker kun med Typescript
import { Camera, CameraType } from 'expo-camera/legacy';
import { GlobalStyles } from "../styles/GlobalStyle";

// QRCodeScanner komponenten fungerer som skærm, der aktiverer telefonens kamera til scanning af QR-koder
export default function QRCodeScanner({ route, navigation }) {
    const { station } = route.params; // Henter station parameter fra forrige skærm
    const [hasPermission, setHasPermission] = useState(null); // Tilstand til kamera-tilladelse
    const [scanned, setScanned] = useState(false); // Tilstand til at spore, om QR-koden er scannet

    // useEffect bruges til at anmode om kamera-tilladelse, når skærmen åbnes
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    // Håndterer QR-kode-scanningen, viser data og navigerer til Reservationsskærmen
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true); // Opdaterer tilstanden til scannet
        Alert.alert('QR Code scanned', `Data: ${data}`); // Viser en besked med QR-kode dataen
        navigation.navigate('Reservation', { station }); // Navigerer til ReservationView med station-data
    };

    // Funktion til at simulere en scanning og fortsætte til Reservationsskærmen uden en rigtig scanning
    const handleFakeScan = () => {
        // Simulerer en scanning og navigerer videre til ReservationView
        navigation.navigate('Reservation', { station });
    };

    // Viser en besked, mens der afventes kamera-tilladelse
    if (hasPermission === null) {
        return (
            <View style={GlobalStyles.container}>
                <Text>Requesting camera permission...</Text>
            </View>
        );
    }

    // Viser en besked, hvis kamera-tilladelsen blev afvist
    if (hasPermission === false) {
        return (
            <View style={GlobalStyles.container}>
                <Text>No access to camera. Please enable it in settings.</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            {/* Kameraet aktiveres og bruges til at scanne QR-koden. */}
            <Camera 
                style={{ flex: 1 }} 
                type={CameraType.back} // Brug Legacy API CameraType til bagkameraet
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} // Scanning deaktiveres efter første scanningsforsøg
            />
            {/* Knap til at simulere en vellykket scanning for tests */}
            <TouchableOpacity style={GlobalStyles.confirmButton} onPress={handleFakeScan}>
                <Text style={GlobalStyles.buttonText}>Done</Text>
            </TouchableOpacity>
            {/* Knap til at nulstille scanningstilstanden, så brugeren kan scanne igen */}
            {scanned && (
                <TouchableOpacity 
                    style={GlobalStyles.confirmButton} 
                    onPress={() => setScanned(false)}
                >
                    <Text style={GlobalStyles.buttonText}>Tap to Scan Again</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}
