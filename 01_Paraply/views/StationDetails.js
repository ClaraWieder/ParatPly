import { View, Text, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyle';

export default function StationDetails({ route, navigation }) {
    const { station } = route.params;

    return (
        <View style={GlobalStyles.container}>
            <Text style={GlobalStyles.stationName}>Station Details</Text>
            <Text>Available Umbrellas: {station.available_umbrellas}</Text>
            <Text>Station Name: {station.name}</Text>
            <Text>Price: 5.50 kr./min.</Text>

            <TouchableOpacity style={GlobalStyles.confirmButton} onPress={() => navigation.navigate('QRCodeScanner', { station })}>
                <Text style={GlobalStyles.buttonText}>Scan QR Code on Umbrella</Text>
            </TouchableOpacity>
        </View>
    );
}