import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import CalendarioUI from './calendarioUI';
import RelojUI from './relojUI';
import { Dialog } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-vector-icons/Ionicons';
import { ThemeProvider } from '@react-navigation/native';

const Cita = ({cita}) => {          
    const {nombre,codigo,date,day,startDateTime,time,centro,carrera,subject} = cita
    
     const dia = new Date(date*1000)
     const arrayDay = day.split('-')
     const startTime = new Date(startDateTime*1000)
     

     removeCitasPasadas = () => {
        const pastCites = new Date(startDateTime)    
        pastCites.setFullYear(arrayDay[0])
        console.log(Date.now())
        if(pastCites< Date.now()){
            console.log("es antes")         
        }
     }

    return ( 
        <SafeAreaView style={styles.cont}>
            <View style={styles.card}>
                 
                <View style={styles.container}>
                    <Text> Fecha: {dia.getDay()} - {dia.getMonth()} - {arrayDay[0]}  </Text>
                    {startDateTime 
                    ? (<Text>Hora: {`${startTime.getHours()} : ${startTime.getMinutes()}`} </Text>)
                    : (<Text>Hora: {time} </Text>)    
                    }                
                    <Text>Nombre: {nombre}</Text>
                    <Text>Código: {codigo}</Text>
                    <Text>Centro: {centro}</Text>
                    <Text>Carrera: {carrera}</Text>
                    <Text>Asunto: {subject}</Text>
                </View>
                <Button style={styles.DBtn} onPress={() => console.log("Button tapped")}>
                    <Text style={styles.BText}>Eliminar Cita</Text>
                </Button>
            </View>
        </SafeAreaView>
     );
}


const styles = StyleSheet.create({
    container:{
        marginVertical:5,
        alignItems:'center',
        /*borderColor:'gray',
        borderWidth: 2,
        marginHorizontal:10*/
        
    },
    cont: {
        flex: 1,
    },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 5,
        flex: 1,
        margin: 15,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      DBtn: {
        width: "50%",
        backgroundColor: "#B54A1C",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center", 
        alignSelf:"center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
      },
      BText: {
        color: "white"
      },
      negrita:{
        fontWeight: 'bold',
      },
})

export default Cita;