import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';

function ProfileScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>¡BIENVENIDOS A DIVEC CITAS!</Text>
        <View style={{flex:1, justifyContent:"flex-end" , padding: 10}}>
          <Text style={styles.negrita}>INSTRUCCIONES:</Text>
          <Text style={styles.rules}>- Agendar cita con un día de anticipación.</Text>
          <Text style={styles.rules}>- Las citas están disponibles de lunes a viernes a partir de las 7:00 a.m. hasta las 7:00 p.m.</Text>
          <Text style={styles.rules}>- Las citas tienen una duración de 1 hr.</Text>
        </View>
        <View style={styles.logoDivec}>
          <Image style={styles.img} source={require('../../images/DivecCitas.png')} />
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
    },
    negrita: {
      fontWeight: 'bold',
  
    }
  });

export default ProfileScreen;
