import React, {useState,useContext} from 'react'; // Hooks para estado y contexto
import { View, Text, StyleSheet ,Alert,TouchableOpacity, ScrollView} from 'react-native'
import {TextInput} from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker"; //comp. para seleccionar dia
import RNPickerSelect from 'react-native-picker-select'; // comp para seleccionar la hora disponible
import { Button, Avatar }  from 'react-native-paper';
import FirebaseContext from '../../context/firebase/firebaseContext'; // Contexto para acceder a firestore
import UserContext from '../../context/user/userContext'// contexto para acceder a la info del usuario
import Toast from 'react-native-simple-toast';

import {citasRepetidas} from '../../utils/functions'; // // Recibe el arreglo de todas las citas de un dia y regresa un arreglo con las horas que ya se han repetido 3 veces

import Icon from 'react-native-vector-icons/FontAwesome';

import Calendario from '../../UI/calendarioUI';
import Reloj from '../../UI/relojUI';
import 'intl';
import 'intl/locale-data/jsonp/es';



const CalendarPicker = (props) => {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);    
    const [date,setDate] = useState('')
    const [time,setTime] = useState('')
    const [subject,setSubject] = useState('')    
    const [horasItems,setHorasItems] = useState(itemsDefault)

    const {carrera,nombre,codigo,centro} = useContext(UserContext) // Obtener los datos del usuario del context
    const {firebase} = useContext(FirebaseContext); //Obtener las funciones de firebase
  
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const confirmarFecha = (dia) => {
      setDate(dia)
      hideDatePicker();
      agregarItemsElements()
      // console.log(dia.getDate())
    };

    const itemsDefault = [     
      {label: '07:00', value: '0700', key : '0700'},
      {label: '08:00', value: '0800', key : '0800'},
      {label: '09:00', value: '0900', key : '0900'},
      {label: '10:00', value: '1000', key : '1000'},
      {label: '11:00', value: '1100', key : '1100'},
      {label: '12:00', value: '1200', key : '1200'},
      {label: '13:00', value: '1300', key : '1300'},
      {label: '14:00', value: '1400', key : '1400'},
      {label: '15:00', value: '1500', key : '1500'},
      {label: '16:00', value: '1600', key : '1600'},
      {label: '17:00', value: '1700', key : '1700'},
      {label: '18:00', value: '1800', key : '1800'},
      {label: '19:00', value: '1900', key : '1900'},]

    const confirmarCita = () => {
      if (date == ''|| time == ''){
        Alert.alert("Algunos campos no han sido seleccionados","Por favor revíselos")
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
        // firebase.db.collection('citas').add(cita)                    
        agregarItemsElements()
        //Prueba              
    }
    const agregarCita = async (cita) => {
      try{
       const cite = await firebase.db.collection("cita").add(cita)
        .then(refDoc => {
          // console.log(`La cita fue correctamente agregada ${refDoc}`)
          Toast.show("La cita ha sido agregada correctamente")
          props.navigation.navigate('Explore')
        }).catch(error=>{
          console.log(error) 
          Toast.show("Ocurrió algún error intenté más tarde",Toast.LONG)
        })     
          
      }catch(e){
        console.log(e)
      }
    }

    //Items del RNPicker Select    
    var itemsElements = { }
    agregarItemsElements =  () => {
      
      const todayParse = `${date.getFullYear()}-${(date.getMonth())}-${date.getDate()}` // Parsea la fecha de hoy a cadena: "YYYY-MM-DD"      
       firebase.db.collection("cita").where("day", "==", todayParse).onSnapshot(manejarSnapshot) // Traer solo los de la fecha seleccionada
      // .then(c=>console.log(c))
      // .catch(error=>console.log(error))
      
    }

    function manejarSnapshot(snapshot){
      const citasDia = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      });
      
      const horasNoDisponibles = citasRepetidas(citasDia)
      itemsElements = itemsDefault.filter(item=> {
        const encontrado = horasNoDisponibles.find(cita=> cita == item.value)        
        if(encontrado){
          return false
        } 
        return true
      } )
        setHorasItems(itemsElements)
        // console.log(horasItems)
    }

    const dayCalendarRender = () => {
      if(date){
        return date.getDate().toString()
      }
      else {
        return "0"
      }
    }
    const monthCalendarRender = () => {
      if(date){
        var options = { month: 'long'};
        const mes = new Intl.DateTimeFormat('es-ES', options).format(date)
        return mes.toString()
      }
      else {
        return "Seleccione el día"
      }
    }
    const timeClockRender = () => {
      if(time){
        const hora = time.substr(0,2)
        const minutos = time.substr(2,4)
        return hora+":"+minutos
      }
      else{
        return "00:00"
      }
    }
    return (  
        <View style={{backgroundColor:"white",flex:1}}>        
          <View style={styles.container}>
          
            <View>
              <Text style={styles.title}>Agenda tu cita</Text>
            </View>
              <View style={{alignItems:"center",justifyContent:"space-evenly",flex:1}}>
                <View style={styles.calendario}>
                  <TouchableOpacity
                    onPress={showDatePicker}>
                      <Calendario 
                      dia={dayCalendarRender()}                
                      mes={monthCalendarRender()}
                      // mes ={new Intl.DateTimeFormat('es-ES', date).format(Xmas95)}
                    />
                  
                  </TouchableOpacity>            
                </View>
                <Reloj 
                  time={timeClockRender()}                
                >
                {horasItems&&(
                <RNPickerSelect                               
                  style={styles.pickerSelectHour}
                  onValueChange={(itemValue, itemIndex) =>setTime(itemValue)}
                  items={horasItems}
                  
                />)}
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
                style={styles.inputAsunto}
                label="Asunto:"
                multiline={true}
                numberOfLines={3}
                placeholder="Escribe tu asunto aqui:"
                // value={subject}
                onChangeText={text=>setSubject(text)}
              />
            </View>

            <Button style={styles.citaBtn}
              
              onPress={ () => confirmarCita() }   
            >
            <Text style={styles.textoCita}>Confirmar Cita</Text>
            </Button>
          </View>
                
        </View>
    );
}

 const styles = StyleSheet.create({
  container:{    
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    // backgroundColor:'blue',
    flex:4,
    
  },
  title:{
    fontWeight:'bold',
    fontSize:28,
    textAlign:'center',
    color:'white',
    marginTop:20
  },
  textoCita:{
    color:"white",
    fontSize:24

  },

  titleNothing:{
    color:'red',
    fontSize:23,
    textAlign:'center',
    margin:10

  },
  citaBtn:{
    width:"80%",
    backgroundColor:"#EBB331",
    borderRadius:30,
    height:40,    
    alignItems:"center",
    justifyContent:"center",
    alignSelf:"center",   
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,     
  },

  pickerSelectHour:{                
    //Componente picker
  },
  containerBottom:{
    flex:2,
    justifyContent:"space-around",
    // alignItems:"center",    
    // backgroundColor:"red"
  },
  calendario:{
    // marginVertical:30,

  },
  inputAsunto:{
    // marginBottom:20
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  containerInputAsunto:{
    marginHorizontal:20,
    minWidth:200
  }
 })
export default CalendarPicker;
