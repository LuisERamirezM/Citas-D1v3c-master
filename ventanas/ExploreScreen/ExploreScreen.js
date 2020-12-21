import 'react-native-gesture-handler';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, ScrollView, View, Text, Button } from 'react-native';
import Cita from '../../UI/cita';
import _ from 'lodash';
import FirebaseContext from '../../context/firebase/firebaseContext'; // Contexto para acceder a firestore
import UserContext from '../../context/user/userContext'// contexto para acceder a la info del usuario

function ExploreScreen() {
  const [citasTotales, setCitasTotales] = useState([]);
  const { codigo } = useContext(UserContext); // Obtener los datos del usuario del context
  const { firebase } = useContext(FirebaseContext); //Obtener las funciones de firebase

  useEffect(() => {
    obtenerCitas()
  }, [])
  const obtenerCitas = () => {
    try {
      firebase.db
        .collection('cita')
        .where('codigo', '==', codigo) //Solo los que estén en existencia
        .onSnapshot(manejarSnapshot);

      function manejarSnapshot(snapshot) {
        let citas = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        });     
        //Ordenar por fecha con Lodash
        citas = _.sortBy(citas, 'date');
        setCitasTotales(citas);
      }
    } catch (error) {
      console.log(error);
    }
  }
    return (
      <View style={{ flex: 1,  margin: 5}}>
       <ScrollView>
        <View style={styles.container}>                
                {citasTotales.map( cite =>{
                  return (                    
                    <Cita 
                        key={cite.id}
                        cita={cite}
                    />
                )})}
            </View>
          </ScrollView>            
      </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
      flex:1

    },
  })

export default ExploreScreen;