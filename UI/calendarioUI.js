import React from 'react';
<<<<<<< HEAD
import { View , StyleSheet} from 'react-native'
import {Text} from 'react-native-paper'
const CalendarioUI = ({dia, mes}) => {
    // console.log(dia)
    // console.log(mes)
    return ( 
        <>
            <View style={styles.container}>                
                <View style={styles.topCalendar}>
                        
=======
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

const CalendarioUI = ({dia, mes}) => {  
    const date = new Date();
    const mounth = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    return (
        <View>
            <Text style={styles.title}>Seleccione la fecha</Text>
            <View style={styles.container}>       
                <View style={styles.topCalendar} />
                <View style={styles.blankCalendar}>
                    {mes == 'Seleccione el día' 
                    ?(<Text style={styles.number}>{date.getDate()}</Text>)                   
                    : (<Text style={styles.number}>{dia}</Text>)
                    }
                    {mes == 'Seleccione el día' 
                    ?(<Text style={styles.month}>{mounth[date.getUTCMonth()]}</Text>)                   
                    : (<Text style={styles.month}>{mes}</Text>)
                    }
>>>>>>> parent of 04d776f... Revert "Revert "Agendar cita terminada""
                </View>
                <View style={styles.blankCalendar}>
                    <Text style={styles.number}>{dia}</Text>
                    <Text style={styles.month}>{mes}</Text>
                </View> 
            </View>            
            
        </>
     );
}
 
const styles = StyleSheet.create({
<<<<<<< HEAD
    container:{
        minHeight:'20%',
        justifyContent:'center',
        alignItems:'center',            
        minWidth:'30%',
        minWidth:150,
        // backgroundColor:"orange",        
=======
    title: {
        alignSelf: 'center', 
        fontSize:16, 
        marginBottom: 5,
        fontWeight: 'bold',
        color: "#707070"
    }, 
    container: {
        minHeight: '20%',
        alignItems: 'center',
        minWidth: '50%',
        borderColor: '#018D8D',
        borderWidth: 2,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
>>>>>>> parent of 04d776f... Revert "Revert "Agendar cita terminada""
    },
    topCalendar:{        
        minWidth:150,
        minHeight:20,        
        backgroundColor:"#FFE232",
        width:"100%"
        
        
    },
    blankCalendar:{
        width:"100%",
        minWidth:150,
        minHeight:130,
        backgroundColor:'white',        
        maxHeight:'80%',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:5
    },
    number:{
        fontSize:60,
        color:"#707070"
    },
    month:{
        fontSize:30,
        color:"#707070"
    }

})
export default CalendarioUI;