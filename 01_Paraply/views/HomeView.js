import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

export default function HomeView({ navigation }) {
    return (
    <View style={styles.container}>
        {/* Top section with icon and title */}
        <View style ={styles.header}>
            <Image style={styles.icon} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb4QYSvhftk2Oj1BBZ8shufRX7bp21a_ztdg&s' }} />
            <Text style={styles.welcomeText}>ParatPly</Text>
        </View>
        {/* Border under description */}
        <View style={styles.separator} />
        {/* Middle section with map-like image */}
        <View style={styles.imageContainer}>
            <Image source={{ uri: 'https://i.pinimg.com/564x/ff/05/dc/ff05dc4dad240614d98afb8fe10733dc.jpg' }} style={styles.image} />
        </View>
        {/* Text description */}
        <Text style={styles.description}>
            Lokaliser paraplystationer i nærheden, reserver en paraply, og returner den nemt ved enhver station.
        </Text>
        {/* Border under description */}
        <View style={styles.separator} />
        {/* Button for "Reserver nu" */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Map')}>
            <Text style={styles.buttonText}>Reserver nu</Text>
        </TouchableOpacity>
        {/* Button for "Se mine reservationer" */}
        <TouchableOpacity style={styles.buttonSecondary} onPress={() => navigation.navigate('Reservation')}>
            <Text style={styles.buttonTextSecondary}>Se mine reservationer</Text>
        </TouchableOpacity>




        {/*<Text style={styles.welcomeText}>Velkommen til ParatPly!</Text>*/}
        {/* Knap til at gå til MapViewScreen*/}
        {/*<Button title="Find paraply på kort" onPress={() => navigation.navigate('Map')} color="#4CAF50" />*/}
        
        {/* Lidt plads mellem knapperne */}
        {/*<View style={{ height: 20 }} />*/}
        
        {/* Knap til at gå til reservationssiden */}
        {/*<Button title="Se mine reservationer" onPress={() => navigation.navigate('Reservation')} color="#2196F3" />*/}
    
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
        padding: 20,
    },
    header: {
        flexDirection: 'coloumn',
        alignItems: 'center',
        marginBottom: 20,
    },
    icon: {
        width: 100,
        height: 100,
        alignItems: 'center',
        marginBottom: 10,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    imageContainer: {
        width: '100%',
        height: 200,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    description: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginBottom: 10,
    },
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: '#ccc', // Light gray border color
        marginBottom: 20, // Space between border and buttons
    },
    button: {
        backgroundColor: '#E0E0E0',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 5,
        marginBottom: 10,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'light',
    },
    buttonSecondary: {
        backgroundColor: '#E0E0E0',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
    },
    buttonTextSecondary: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'light',
    },

});

/* Forklaring af koden:
navigation Prop: Vi bruger navigation fra react-navigation, som bliver tilføjet automatisk, når du bruger navigation i en Stack.Navigator. Dette giver os mulighed for at skifte mellem skærmene (f.eks. "Map" og "Reservation").

Button Komponent: Vi har tilføjet to knapper:

Den første knap navigerer til kortet (MapView), hvor brugeren kan finde paraplystationer.
Den anden knap navigerer til reservationsskærmen (ReservationView), hvor brugeren kan se sine reservationer.
Styles: Vi har brugt StyleSheet til at style layoutet og placere teksten centralt samt give knapperne en lidt forskellig farve og margin. */