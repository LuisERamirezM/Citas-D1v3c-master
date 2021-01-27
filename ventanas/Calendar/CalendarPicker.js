import React, { useState, useContext } from 'react'; // Hooks para estado y contexto
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { createStyles, maxHeight } from 'react-native-media-queries';
import { TextInput } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker"; //comp. para seleccionar dia
import { Picker } from '@react-native-picker/picker'; // comp para seleccionar la hora disponible
import { Button } from 'react-native-paper';
import FirebaseContext from '../../context/firebase/firebaseContext'; // Contexto para acceder a firestore
import UserContext from '../../context/user/userContext'// contexto para acceder a la info del usuario
import Toast from 'react-native-simple-toast';

import { citasRepetidas } from '../../utils/functions'; // // Recibe el arreglo de todas las citas de un dia y regresa un arreglo con las horas que ya se han repetido 3 veces

import Calendario from '../../UI/calendarioUI';
import Reloj from '../../UI/relojUI';
import 'intl';
import 'intl/locale-data/jsonp/es';


const CalendarPicker = (props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [subject, setSubject] = useState('')
  const [horasItems, setHorasItems] = useState(itemsDefault)
  const { carrera, nombre, codigo, centro } = useContext(UserContext) // Obtener los datos del usuario del context
  const { firebase } = useContext(FirebaseContext); //Obtener las funciones de firebase

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const confirmarFecha = (dia) => {
    hideDatePicker();
    const today = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getUTCFullYear();
    console.log(year)
    if(dia.getFullYear() > year || dia.getMonth() > month ||dia.getDate() > today){   
      setDate(dia);
      agregarItemsElements();
    }else{
      Alert.alert("¡Atención!", "Las citas deben ser agendadas como mínimo con un día de anticipación."
                +" Por favor elija otro día." );
      return
    }
  };

  const itemsDefault = [
    { label: 'Selecciona la hora', value: '0000', key: '0000'},
    { label: '08:00', value: '0800', key: '0800' },
    { label: '09:00', value: '0900', key: '0900' },
    { label: '10:00', value: '1000', key: '1000' },
    { label: '11:00', value: '1100', key: '1100' },
    { label: '12:00', value: '1200', key: '1200' },
    { label: '13:00', value: '1300', key: '1300' },
    { label: '14:00', value: '1400', key: '1400' },
    { label: '15:00', value: '1500', key: '1500' },
    { label: '16:00', value: '1600', key: '1600' },
    { label: '17:00', value: '1700', key: '1700' },
    { label: '18:00', value: '1800', key: '1800' },]

  const confirmarCita = () => {
    if (date == '' || time == '') {
      Alert.alert("Algunos campos no han sido seleccionados", "Por favor revíselos")
      return
    }
    const day = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    //Agregar la fecha seleccionada
    const cita = {
      day,
      date,
      time,
      subject,
      nombre,
      codigo,
      centro,
      carrera,
    }
    agregarCita(cita)
    agregarItemsElements()
  }
  const agregarCita = async (cita) => {
    try {
      const cite = await firebase.db.collection("cita").add(cita)
        .then(refDoc => {
          // console.log(`La cita fue correctamente agregada ${refDoc}`)
          Toast.show("La cita ha sido agregada correctamente")
          props.navigation.navigate('Explore')
        }).catch(error => {
          console.log(error)
          Toast.show("Ocurrió algún error intenté más tarde", Toast.LONG)
        })

    } catch (e) {
      console.log(e)
    }
  }
  //Items del RNPicker Select    
  var itemsElements = {}
   agregarItemsElements = () => {

    const todayParse = `${date.getFullYear()}-${(date.getMonth())}-${date.getDate()}` // Parsea la fecha de hoy a cadena: "YYYY-MM-DD"      
    firebase.db.collection("cita").where("day", "==", todayParse).onSnapshot(manejarSnapshot) // Traer solo los de la fecha seleccionada
    // .then(c=>console.log(c))
    // .catch(error=>console.log(error))

  }

  function manejarSnapshot(snapshot) {
    const citasDia = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    });

    const horasNoDisponibles = citasRepetidas(citasDia)
    itemsElements = itemsDefault.filter(item => {
      const encontrado = horasNoDisponibles.find(cita => cita == item.value)
      if (encontrado) {
        return false
      }
      return true
    })
    setHorasItems(itemsElements)
    // console.log(horasItems)
  }

  const dayCalendarRender = () => {
    if (date) {
      return date.getDate().toString() 
    }
    else {
      return "0"
    }
  }
  const monthCalendarRender = () => {
    if (date) {
      var options = { month: 'long' };
      const mes = new Intl.DateTimeFormat('es-ES', options).format(date)
      return mes.toString()
    }
    else {
      return "Seleccione el día"
    }
  }
  const timeClockRender = () => {
    if (time) {
      const hora = time.substr(0, 2)
      const minutos = time.substr(2, 4)
      return hora + ":" + minutos
    }
    else {
      return "00:00"
    }
  }
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.container}>
        <View style={{ alignItems: "center", justifyContent: "space-evenly", flex: 1 }}>
          <View style={styles.calendario}>
            <TouchableOpacity
              onPress={showDatePicker}>
              <Calendario
                dia={dayCalendarRender()}
                mes={monthCalendarRender()}
              />

            </TouchableOpacity>
          </View>
          <Reloj
            time={timeClockRender()}
          >
            {horasItems && <Picker
              selectedValue={horasItems}
              style={{height: 50, width: 150}}   
              onValueChange={(itemValue) => setTime(itemValue)}     
            >
              {
                horasItems.map(item => {
                  return <Picker.Item key={item.key} value={item.value} label={item.label} />
                })
                
              }
            </Picker> }
          </Reloj>


          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={confirmarFecha}
            onCancel={hideDatePicker}
            locale='es_ES'
            minimumDate={new Date()}
            value={new Date()}
          />

        </View>
       
      </View>
      {/**Fin container top **/}

      <View style={styles.containerBottom}>
        {/* Hay que verificar si cierra el teclado en otros dispositivos */}
        <View style={styles.containerInputAsunto}>
          <TextInput
            mode='outlined'
            style={props.style}
            theme={{ colors: { text: 'black', primary: 'rgb(1, 141, 141)' } }}
            label="Asunto:"
            placeholder="Escribe tu asunto aquí."
            placeholderTextColor='white'
            secureTextEntry={props.secureTextEntry}
            multiline={props.multiline}
            keyboardType={props.keyboardType}
            numberOfLines={2}
            onChangeText={text => setSubject(text)}
          />
        </View>
        <Button style={styles.citaBtn}
          onPress={() => confirmarCita()}
        >
          <Text style={styles.textoCita}>Confirmar Cita</Text>
        </Button>
      </View>
    </View>

  );
}
const base = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 4,
  },
  textoCita: {
    color: "white",
    fontSize: 24,

  },
  citaBtn: {
    width: "80%",
    backgroundColor: "#EBB331",
    borderRadius: 30,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  containerBottom: {
    flex: 2,
    justifyContent: "space-around",

  },
  inputAsunto: {
    backgroundColor: "transparent",
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  containerInputAsunto: {
    marginHorizontal: 20,
    minWidth: 200,
  }
};

const styles = createStyles(base,
  maxHeight(780, {
    textoCita: {
      fontSize: 20,
    },
    citaBtn: {
      width: "70%",    
      height: 30,
    },
  }),
  maxHeight(600, {
    container: {
      flex: 2,
    },
    containerBottom:{
      flex: 1.5,
    },
    citaBtn: {
      width: "65%",    
      height: 27,
    },
  }),


); 
export default CalendarPicker;