import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import CalendarioUI from './calendarioUI';
import RelojUI from './relojUI';
import { Dialog } from 'react-native-paper';

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
        <>   

                 
            <View style={styles.container}>
                <Text> Fecha: {dia.getDay()} - {dia.getMonth()} - {arrayDay[0]}  </Text>
                {startDateTime 
                ? (<Text>Hora: {`${startTime.getHours()} : ${startTime.getMinutes()}`} </Text>)
                : (<Text>Hora: {time} </Text>)    
            }                
                <Text>Nombre: {nombre}</Text>
                <Text>Código: {codigo}</Text>
                <Text>centro: {centro}</Text>
                <Text>carrera: {carrera}</Text>
                <Text>Asunto: {subject}</Text>
            </View>
        </>
     );
}

const styles = StyleSheet.create({
    container:{
        marginVertical:5,
        alignItems:'center',
        borderColor:'gray',
        borderWidth: 2,
        marginHorizontal:10
    }
})

export default Cita;