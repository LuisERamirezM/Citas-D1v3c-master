import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, LogBox } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import FirebaseContext from '../context/firebase/firebaseContext';


const Cita = ({ cita }) => {
  const { firebase } = useContext(FirebaseContext);
  const { nombre, codigo, date, day, startDateTime, time, centro, carrera, subject } = cita
  const hour = (time * 10) / 1000
  const dia = new Date(date * 1000)
  const arrayDay = day.split('-')

  const cancel = () => {
    Alert.alert(
      '¿Quieres cancelar la cita?',
      'Tú cita se eliminara y tendrás que agendar una nueva si quieres recuperarla.',
      [
        {
          text: 'Yes',
          onPress: () => {
            try {
              firebase.db.collection("cita").doc(cita.id).delete().then(function () {
                console.log("Document successfully deleted!");
              }).catch(function (error) {
                console.error("Error removing document: ", error);
              });

            } catch (e) {
              console.log(e)
            }
          }
        },
        {
          text: 'No',
          onPress: () => console.log("No se cancelo la cita")
        },
      ],
    );
  }
  removeCitasPasadas = () => {
    const currentDate = new Date()
    if (arrayDay[0] <= currentDate.getFullYear()) {
      if (arrayDay[1] <= currentDate.getMonth()) {
        if (arrayDay[2] <= currentDate.getDate()) {
          if (hour <= currentDate.getHours()) {
            firebase.db.collection("cita").doc(cita.id).delete().then(function () {
              console.log("Document successfully deleted!");
            }).catch(function (error) {
              console.error("Error removing document: ", error);
            });
          }
        }
      }
    }
  }
  return (
    <SafeAreaView style={styles.cont} onload={removeCitasPasadas()}>
      <View style={styles.card}>
        <View style={styles.container}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.negrita}>Fecha: </Text>
            <Text>{arrayDay[2]} - {dia.getMonth() + 1} - {arrayDay[0]}  </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.negrita}>Hora: </Text>
            <Text>{hour}:{'00'}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.negrita}>Nombre: </Text>
            <Text>{nombre}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.negrita}>Código: </Text>
            <Text>{codigo}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.negrita}>Centro: </Text>
            <Text>{centro}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.negrita}>Carrera: </Text>
            <Text>{carrera}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.negrita}>Asunto: </Text>
            <Text>{subject}</Text>
          </View>
          <TouchableOpacity style={styles.DBtn} onPress={() => cancel()}>
            <Text style={styles.BText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'column'

  },
  cont: {
    flex: 1,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    flex: 1,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  DBtn: {
    margin: 5,
    width: "30%",
    backgroundColor: "#B54A1C",
    borderRadius: 25,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  BText: {
    color: "white"
  },
  negrita: {
    fontWeight: 'bold',
  },
})

export default Cita;