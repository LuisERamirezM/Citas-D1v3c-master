import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, TextInput, StatusBar, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


function ComentariosScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.containerTop}>
          <Text style ={styles.textTitle}>Envíanos un correo a: </Text>
          <Text style ={styles.textBody}>cucei@gmail.com: </Text>
        </View>      
        <View style={styles.containerBottom}>
          <Text style ={styles.textTitle}>Visita la página web: </Text>
          <Text style ={styles.textBody}>cucei.com.mx </Text>
        </View>   
      </View>

    </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    flex: 1,
    margin:15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  containerTop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerBottom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
    
  },
  textTitle: {
    color: "#7991FE",
    fontSize: 25,
    fontWeight: "bold"
  },
  textBody: {
    color: "#FE822D",
    fontSize: 25,

  },
});

export default ComentariosScreen;