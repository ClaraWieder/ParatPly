import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeView({ navigation }) {
    return (
    <View style={styles.container}>
        <Text style={styles.welcomeText}>Velkommen til ParatPly!</Text>
        {/* Knap til at gå til MapViewScreen*/}
        <Button title="Find paraply på kort" onPress={() => navigation.navigate('Map')} color="#4CAF50" />
        
        {/* Lidt plads mellem knapperne */}
        <View style={{ height: 20 }} />
        
        {/* Knap til at gå til reservationssiden */}
        <Button title="Se mine reservationer" onPress={() => navigation.navigate('Reservation')} color="#2196F3" />
    
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
    welcomeText: {
        fontSize: 24,
        marginBottom: 40,
        fontWeight: 'bold',
    },
});

/* Forklaring af koden:
navigation Prop: Vi bruger navigation fra react-navigation, som bliver tilføjet automatisk, når du bruger navigation i en Stack.Navigator. Dette giver os mulighed for at skifte mellem skærmene (f.eks. "Map" og "Reservation").

Button Komponent: Vi har tilføjet to knapper:

Den første knap navigerer til kortet (MapView), hvor brugeren kan finde paraplystationer.
Den anden knap navigerer til reservationsskærmen (ReservationView), hvor brugeren kan se sine reservationer.
Styles: Vi har brugt StyleSheet til at style layoutet og placere teksten centralt samt give knapperne en lidt forskellig farve og margin. */