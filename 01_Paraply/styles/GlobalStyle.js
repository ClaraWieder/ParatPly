import { StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        justifyContent: 'flex-start',
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
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    mapImage: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain',
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
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        width: '100%',
        height: '100%',
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
    confirmButton: {
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
    infoText: {
        fontSize: 18,
        color: '#555',
        textAlign: 'center',
        marginBottom: 20,
    },
    tabBarStyle: {
        backgroundColor: '#000',
        borderTopColor: '#ccc',
        height: 60,
    },   
    reservationContainer: {
        marginTop: 40,
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
    
    
});
