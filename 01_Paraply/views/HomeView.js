import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

export default function HomeView({ navigation }) {
    return (
    <View style={styles.container}>
        {/* Top sektion med app navn og velkomst besked */}
        <View style ={styles.header}>
            <Text style={styles.appName}>ParatPly</Text>
            <Text style={styles.welcomeText}>Velkommen, Bruger!</Text>
            <Text style={styles.subtitle}> Lokaliser paraplystationer i nærheden, lej en paraply, og returner den nemt ved enhver station.</Text>
        </View>

        {/* Border under description */}
        <View style={styles.separator} />

        {/* Middle sektion med ikon */}
        <View style={styles.mapContainer}>
            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb4QYSvhftk2Oj1BBZ8shufRX7bp21a_ztdg&s' }} style={styles.mapImage} />
        </View>

        {/* Knap til at gå til MapViewScreen */}
        <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate('Map')}>
            <Text style={styles.buttonTextPrimary}>Lej en Paraply</Text>
        </TouchableOpacity>

        {/* Knap til at gå til reservationssiden */}
        <TouchableOpacity style={styles.buttonSecondary} onPress={() => navigation.navigate('Reservation')}>
            <Text style={styles.buttonTextSecondary}>Igangværende Reservationer</Text>
        </TouchableOpacity>
    <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        padding: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 40,
        marginTop: 10,
    },
    appName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    welcomeText: {
        fontSize: 22,
        fontWeight: '600',
        color: '#000',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '400',
        color: '#555',
        textAlign: 'center',
    },
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: '#ccc',
        marginBottom: 20,
    },
    mapContainer: {
        width: '100%',
        height: 250,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapImage: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain',
    },
    icon: {
        width: 100,
        height: 100,
        alignItems: 'center',
        marginBottom: 10,
    },
   
    buttonPrimary: {
        backgroundColor: '#000',
        paddingVertical: 15,
        borderRadius: 5,
        marginBottom: 15,
        width: '100%',
        alignItems: 'center',
    },
    buttonTextPrimary: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
    },
    buttonSecondary: {
        backgroundColor: '#000',
        paddingVertical: 15,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    buttonTextSecondary: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
    },

});

/* Forklaring af koden:
navigation Prop: Vi bruger navigation fra react-navigation, som bliver tilføjet automatisk, når du bruger navigation i en Stack.Navigator. Dette giver os mulighed for at skifte mellem skærmene (f.eks. "Map" og "Reservation").

Button Komponent: Vi har tilføjet to knapper:

Den første knap navigerer til kortet (MapView), hvor brugeren kan finde paraplystationer.
Den anden knap navigerer til reservationsskærmen (ReservationView), hvor brugeren kan se sine reservationer.
Styles: Vi har brugt StyleSheet til at style layoutet og placere teksten centralt samt give knapperne en lidt forskellig farve og margin. */