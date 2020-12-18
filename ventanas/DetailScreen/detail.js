import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';

function ProfileScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>¡BIENVENIDOS!</Text>
        <View style={styles.logoDivec}>
          <Image style={styles.img} source={require('../../images/DivecLogo.png')} />
        </View>
        <View style={{flex:1, justifyContent:"flex-end" , padding: 10}}>
          <Text style={styles.rules}>- Se debe agendar cita con un día de anticipación.</Text>
          <Text style={styles.rules}>- Las citas están disponibles de Lunes a Viarenes apartir de las 7:00am hasta las 7:00pm.</Text>
          <Text style={styles.rules}>- Las citas tienen una duración de 1hora.</Text>
        </View>
      </View>  
    );
  }

  const styles = StyleSheet.create({
    container: {
      //margin: 20,
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center' 
    },
    text: {
      flex:.5, 
      margin: 30,
      fontSize: 25,
      fontWeight: "bold",
      
    },
    rules: {
      fontSize: 14,
      fontWeight: "bold",
      color: "#D7D7D7"
    },
    logoDivec: {
      flex: 1,
      backgroundColor: "#fff",
      alignSelf: 'center',
      borderRadius: 80,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    img: {
      flex: 1, 
      width: 350, 
      height: 350,
      resizeMode: 'contain',
    }
  });

export default ProfileScreen;
