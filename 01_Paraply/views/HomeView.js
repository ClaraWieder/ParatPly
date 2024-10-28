import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyle';

export default function HomeView({ navigation }) {
    return (
    <View style={GlobalStyles.container}>
        {/* Top sektion med app navn og velkomst besked */}
        <View style ={GlobalStyles.header}>
            <Text style={GlobalStyles.appName}>ParatPly</Text>
            <Text style={GlobalStyles.welcomeText}>Velkommen, Bruger!</Text>
            <Text style={GlobalStyles.subtitle}> Lokaliser paraplystationer i nærheden, lej en paraply, og returner den nemt ved enhver station.</Text>
        </View>

        {/* Border under description */}
        <View style={GlobalStyles.separator} />

        {/* Middle sektion med ikon */}
        <View style={GlobalStyles.mapContainer}>
            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb4QYSvhftk2Oj1BBZ8shufRX7bp21a_ztdg&s' }} style={GlobalStyles.mapImage} />
        </View>

        {/* Knap til at gå til MapViewScreen */}
        <TouchableOpacity style={GlobalStyles.buttonPrimary} onPress={() => navigation.navigate('Map')}>
            <Text style={GlobalStyles.buttonTextPrimary}>Lej en Paraply</Text>
        </TouchableOpacity>

        {/* Knap til at gå til reservationssiden */}
        <TouchableOpacity style={GlobalStyles.buttonSecondary} onPress={() => navigation.navigate('Reservation')}>
            <Text style={GlobalStyles.buttonTextSecondary}>Igangværende Reservationer</Text>
        </TouchableOpacity>
    <StatusBar style="auto" />
    </View>
    );
}

/*const styles = StyleSheet.create({
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

});*/