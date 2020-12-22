import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-paper';
import Calendar from './calendarioUI';


const RelojUI = (props) => {
    const { time } = props
    console.log(time)
    const timeNow = new Date();
    return (
        <View>
            <Text style={styles.title}>Seleccione la hora</Text>
            <View style={styles.container}>
                <View style={styles.circle}>
                    {time == '00:00'
                        ? (<Text style={styles.time}>{timeNow.getHours()}:{timeNow.getMinutes()}</Text>)
                        : (<Text style={styles.time}>{time}</Text>)
                    }
                    {props.children}
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
        color: "#707070",

    },
    container: {
        // flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'red',   
        width: "100%",
        minHeight: 120,
        // position:"absolute" 
    },
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
    }
})
export default RelojUI;