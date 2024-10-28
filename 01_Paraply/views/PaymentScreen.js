import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { GlobalStyles } from "../styles/GlobalStyle";
import { useState } from "react";

// Definerer hovedkomponenten til betalingsskærmen
export default function PaymentScreen({ navigation }) {
    // States til at gemme brugerens betalingsoplysninger
    const [cardNumber, setCardNumber] = useState(''); // State til kortnummer
    const [expiry, setExpiry] = useState(''); // State til kortets udløbsdato
    const [cvv, setCVV] = useState(''); // State til CVV-kode

    // Funktion, der håndterer lagring af betalingsoplysninger og navigerer tilbage til forrige skærm
    const handlePayment = () => {
        alert('Betalingsoplysninger gemt'); // Giver besked til brugeren om, at oplysningerne er gemt
        navigation.goBack(); // Navigerer tilbage til forrige skærm
    };

    // Returnerer UI-komponenterne til betalingsskærmen
    return (
        <View style={GlobalStyles.container}> 
            <Text style={GlobalStyles.stationName}>Indtast betalingsoplysninger</Text>

            <Text>Kortnummer</Text>
             {/* Tekstinput til kortnummer med numerisk tastatur */}
            <TextInput style={GlobalStyles.input} value={cardNumber} onChangeText={setCardNumber} placeholder="1234 5678 9012 3456" keyboardType="numeric"/>

            <Text>Udløbsdato</Text>
            {/* Tekstinput til udløbsdato for kortet med numerisk tastatur */}
            <TextInput style={GlobalStyles.input} value={expiry} onChangeText={setExpiry} placeholder="MM/YY" keyboardType="numeric"/>

            <Text>CVV</Text>
            {/* Tekstinput til CVV-kode med numerisk tastatur */}
            <TextInput style={GlobalStyles.input} value={cvv} onChangeText={setCVV} placeholder="123" keyboardType="numeric"/>
            
            {/* Knap til at gemme betalingsoplysninger og udløse handlePayment-funktionen */}
            <TouchableOpacity style={GlobalStyles.confirmButton} onPress={handlePayment}>
                <Text style={GlobalStyles.buttonText}>Gem Betalingsoplysninger</Text>
            </TouchableOpacity>
        </View>
    );
}