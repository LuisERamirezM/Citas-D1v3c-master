import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

const CalendarioUI = ({ dia, mes }) => {
    const date = new Date();
    const mounth = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.topCalendar} />
                <View style={styles.blankCalendar}>
                    {mes == 'Seleccione el día'
                        ? (<Text style={styles.number}>{date.getDate()}</Text>)
                        : (<Text style={styles.number}>{dia}</Text>)
                    }
                    {mes == 'Seleccione el día'
                        ? (<Text style={styles.month}>{mounth[date.getUTCMonth()]}</Text>)
                        : (<Text style={styles.month}>{mes}</Text>)
                    }
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',
        color: "#707070"
    },
    container: {
        borderRadius: 5,
        minHeight: '20%',
        alignItems: 'center',
        minWidth: '50%',
        borderColor: '#018D8D',
        borderWidth: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    topCalendar: {
        minHeight: 15,
        backgroundColor: "#018D8D",
        width: "100%"
    },
    blankCalendar: {
        width: "100%",
        minHeight: 130,
        backgroundColor: 'white',
        maxHeight: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    number: {
        fontSize: 60,
        color: "#707070",
        borderBottomWidth: .2,
    },
    month: {
        fontSize: 15,
        color: "#707070"
    }

})
export default CalendarioUI;