import 'react-native-gesture-handler';
import React,{useState,useEffect,useContext} from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Cita from '../../UI/cita';

import _ from 'lodash';

import FirebaseContext from '../../context/firebase/firebaseContext'; // Contexto para acceder a firestore
import UserContext from '../../context/user/userContext'// contexto para acceder a la info del usuario


function ExploreScreen({navigation}) {

  const [citasTotales, setCitasTotales] = useState([])

  const {carrera,nombre,codigo,centro} = useContext(UserContext) // Obtener los datos del usuario del context
    const {firebase} = useContext(FirebaseContext); //Obtener las funciones de firebase

    useEffect(()=>{
      obtenerCitas()
    },[])
    const obtenerCitas = () => {
      try {
        firebase.db
        .collection('cita')
        .where('codigo','==',codigo) //Solo los que estén en existencia
        .onSnapshot(manejarSnapshot);
      
        function manejarSnapshot(snapshot) {
            let citas = snapshot.docs.map(doc =>{
                return{
                    id: doc.id,
                    ...doc.data()
                }
            }) ;
            
            //Ordenar por fecha con Lodash
            citas = _.sortBy(citas,'date')
            // console.log(citas) 

            setCitasTotales(citas)
        }
      } catch (error) {
          console.log(error)
      }
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Visualiza tus Citas</Text>
       <ScrollView>
        <View style={styles.container}>                
                {citasTotales.map( cite =>{
                  // console.log(cite)
                  return (                    
                    <Cita 
                        key={cite.id}
                        cita={cite}
                    />
                )})}

                
            </View>
          </ScrollView>            
        <Button
          title= " Ir a Inicio"
          onPress = {() => navigation.navigate('Home')}

        />
        
      </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
      flex:1

    },
  })

export default ExploreScreen;