import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';



const Cita = ({ cita }) => {
  const { nombre, codigo, date, day, startDateTime, time, centro, carrera, subject } = cita
  const hour = (time * 10) / 1000
  // const flag = hour > 10000 ? true : false;

  const dia = new Date(date * 1000)
  const arrayDay = day.split('-')

  removeCitasPasadas = () => {
    const pastCites = new Date(startDateTime)
    pastCites.setFullYear(arrayDay[0])
    console.log(Date.now())
    if (pastCites < Date.now()) {
      console.log("es antes")
    }
  }

  return (
    <SafeAreaView style={styles.cont}>
      <View style={styles.card}>
        <View style={styles.container}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.negrita}>Fecha: </Text>
            <Text>{dia.getDate()} - {dia.getMonth()} - {arrayDay[0]}  </Text>
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
          <TouchableOpacity style={styles.DBtn} onPress={() => console.log("Button tapped")}>
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