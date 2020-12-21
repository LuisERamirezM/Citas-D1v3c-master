import React,{useEffect, useContext, useState} from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { useNavigation } from '@react-navigation/native';
import UserContext from '../../context/user/userContext';

const Intro = () => {
    
    const navigation = useNavigation(); //Hook de navegación


    const { addUser}  = useContext(UserContext); //Agregar los datos al context
    
    useEffect(()=>{
            getData()                 
    },[])

    const getData = async () => {
        
        try {
            const jsonValue = await AsyncStorage.getItem('user') //Leer datos            
            const user = JSON.parse(jsonValue)            //Parsear datos a un obketo
            if(user) {                //Si hay información del usuario
                navigation.navigate("HomeDrawer",{user}) 
                addUser(user)
            }
            else {                //Si es null enviar a inicio de sesión
                navigation.navigate("Login")
            }
          
        } catch(e) {
            console.log(e)
            navigation.navigate("Login") // Cualquier error mandar a Login
        }
      }
      
    return ( 
        <>
        <View style={styles.container}>
            <Image 
             style={styles.fondDivec} source={require('../../images/FondDivec.png')}  
            />
            <Image 
             style={styles.logoDivec} source={require('../../images/DivecLogo.png')}  
            />
        </View>
        </>
     );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        //backgroundColor:"#EBB331",
    },
    logoDivec:{
        flex : 1,
        alignSelf: 'center',        
        marginTop: 5,
        position:'absolute',
    },
    fondDivec:{
        flex:1,
        alignSelf: 'center',
    },
    triangleCorner: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderRightWidth: 900,
        borderTopWidth: 900,
        borderRightColor: "transparent",
        borderTopColor: "#000070",
        transform: [{ rotate: "90deg" }],
        alignItems:'flex-end',
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        //<View style={styles.triangleCorner}/>
        },
})
 
export default Intro;