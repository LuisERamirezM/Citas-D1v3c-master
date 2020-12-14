import React from 'react';
import { View , StyleSheet} from 'react-native'
import {Text} from 'react-native-paper'
const CalendarioUI = ({dia, mes}) => {
    // console.log(dia)
    // console.log(mes)
    return ( 
        <>
            <View style={styles.container}>                
                <View style={styles.topCalendar}>
                        
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
    container:{
        minHeight:'20%',
        justifyContent:'center',
        alignItems:'center',            
        minWidth:'30%',
        minWidth:150,
        // backgroundColor:"orange",        
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