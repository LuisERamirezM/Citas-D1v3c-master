import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Linking, TouchableOpacity, Alert } from 'react-native';

function ComentariosScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.containerTop}>
          <Text style={styles.textTitle}>Envíanos un correo a: </Text>
          <TouchableOpacity onPress={() => Linking.openURL('mailto:cuceimobile@cucei.udg.mx').catch(err => {
            Alert.error('An error occurred', err)
          })}>
            <Text style={styles.textBody}>cuceimobile@cucei.udg.mx</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerTop}>
          <Text style={styles.textTitle}>Visitanos en Facebook:</Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/CuceiMobile')}>
            <Text style={styles.textBody}
            >CuceiMobile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerBottom}>
          <Text style={styles.textTitle}>Visita la página web:</Text>
          <TouchableOpacity onPress={() => Linking.openURL('http://148.202.152.33/?fbclid=IwAR334R73qhpeK6jvPLeDFRJmOc88ZJtNDOLbq6_qqx0Hd1WC57eF47vwVww')}>
            <Text style={styles.textBody}
            >cucei.com.mx </Text>
          </TouchableOpacity>

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
    margin: 15,
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
    fontWeight: "bold",
  },
  textBody: {
    color: "#FE822D",
    fontSize: 25,
  },
});

export default ComentariosScreen;