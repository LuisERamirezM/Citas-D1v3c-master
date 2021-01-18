import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import {Avatar} from 'react-native-paper';
import Calendar from './calendarioUI';


const RelojUI = (props) => {
<<<<<<< HEAD
    const {time} = props

    return ( 
        <>
=======
    const { time } = props
    const timeNow = new Date();
    return (
        <View>
            <Text style={styles.title}>Seleccione la hora</Text>
>>>>>>> parent of 04d776f... Revert "Revert "Agendar cita terminada""
            <View style={styles.container}>
            {/* <Avatar.Text size={400} label="12" style={styles.avatar} /> */}
            
                <View style={styles.circle}>
                    <Text style={styles.time}>{time}</Text>
                    {props.children}
                </View>                     
            </View>
            
        </>
     );
}
 
const styles = StyleSheet.create({
<<<<<<< HEAD
    container:{
        // flex:1,
        justifyContent:'center',
        alignItems:'center',
=======
    title: {
        alignSelf: 'center',
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',
        color: "#707070",

    },
    container: {
        // flex:1,
        justifyContent: 'center',
        alignItems: 'center',
>>>>>>> parent of 04d776f... Revert "Revert "Agendar cita terminada""
        // backgroundColor:'red',   
        width:"100%",
        minHeight:120,            
        // position:"absolute" 
    } ,    
    circle:{        
        width:"100%",
        backgroundColor:'white',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'#018D8D',
        borderWidth:4,
        padding:8
    },
<<<<<<< HEAD
    time:{
        color:'#707070',
        fontSize:60,
        marginHorizontal:5
=======
    circle: {
        width: "100%",
        backgroundColor: 'white',
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#018D8D',
        borderWidth: 2,
        padding: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    time: {
        color: '#707070',
        fontSize: 60,
        marginHorizontal: 5
>>>>>>> parent of 04d776f... Revert "Revert "Agendar cita terminada""
    }
})
export default RelojUI;