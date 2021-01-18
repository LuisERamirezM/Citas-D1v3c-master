import React from 'react';
import { View, Text } from 'react-native'
import { createStyles, maxHeight } from 'react-native-media-queries';
import { Avatar } from 'react-native-paper';
import Calendar from './calendarioUI';


const RelojUI = (props) => {
    const { time } = props
    const timeNow = new Date();
    return (
        <View>
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
const base = {
    container: {   
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        minHeight: 120,
    },
    circle: {
        width: "100%",
        backgroundColor: 'white',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#018D8D',
        borderWidth: 3,
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
        fontSize: 55,
        marginHorizontal: 20,
    }
}
const styles = createStyles(base,
    maxHeight(780, {
        circle: {
            width: "100%",
            backgroundColor: 'white',
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: '#018D8D',
            borderWidth: 3,
            padding: 3,
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
            fontSize: 27,
            marginLeft: "15%",
            marginRight: "5%",
            minWidth: "30%",
        },
    })
);
export default RelojUI;