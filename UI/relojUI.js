import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import {Avatar} from 'react-native-paper';
import Calendar from './calendarioUI';


const RelojUI = (props) => {
    const {time} = props

    return ( 
        <>
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
    container:{
        // flex:1,
        justifyContent:'center',
        alignItems:'center',
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
    time:{
        color:'#707070',
        fontSize:60,
        marginHorizontal:5
    }
})
export default RelojUI;