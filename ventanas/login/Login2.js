import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Alert, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import UserContext from '../../context/user/userContext';

export default Login = () => {

  const navigation = useNavigation();

  const [nombre, setnombre] = useState('')
  const [codigo, setcodigo] = useState('')
  const [nip, setNip] = useState('')
  const [centro, setCentro] = useState('')
  const [carrera, setCarrera] = useState('')
  const [error, setError] = useState(false)

  //Context de Usuario 
  const { addUser } = useContext(UserContext);
  //Cuando el usuario intenté iniciar sessión
  handlerButtonSendInfo = async () => {
    const URL = "https://cuceimobile.tech/Escuela/datosudeg.php";
    await fetchGet(`${URL}?codigo=${codigo}&nip=${nip}`)
  }
  //Petición get
  fetchGet = (URL) => {
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }

      if (request.status === 200) {
        if (request.responseText) {
          analizer(request.responseText)
        }
        else {
          console.log("Vuelva a intentar más tarde")
        }

      } else {
        console.warn('error');
        return -1
      }
    };

    request.open('GET', URL);
    request.send();
  }

  // Analizar la respuesta
  analizer = (response) => {
    if (response == 0) {
      //Si no coincide con los usuarios de la base d datos mostrar mensaje de error
      setError(true)
      return
    }

    // Colocar la información en el estado
    const myArray = response.split(',')

    setnombre(myArray[2])
    setcodigo(myArray[1])
    setCentro(myArray[3])
    setCarrera(myArray[4])

    //Si no es de Cucei
    if (myArray[3] != 'CUCEI') {
      console.log("No Cucei")
      Alert.alert("Acceso de negado", "Lo sentimos por ahora solo pueden acceder usuario de CUCEI")
    }
    else {
      const user = {
        nombre: myArray[2],
        codigo: myArray[1],
        centro: myArray[3],
        carrera: myArray[4]
      }
      guardarDatos(user)
      addUser(user)
      navigation.navigate("HomeDrawer")
    }
  }

  const guardarDatos = async user => {
    try {
      const jsonValue = JSON.stringify(user)
      await AsyncStorage.setItem('user', jsonValue)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image style={styles.logoDivec} source={require('../../images/DivecCitas.png')} />
      </View>

      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>El código y el Nip no coinciden</Text>
        </View>
      )}

      <Text style={styles.label}>Código:</Text>
      <View style={styles.inputView} >
       {/* <Image
         source={require('../../images/ic_user.png')} style={styles.imageStyle} />*/}
        <TextInput
          onFocus={() => setError(false)}
          style={styles.inputText}
          placeholder="Código"
          placeholderTextColor="#305D7A"
          keyboardType='numeric'
          maxLength={12}
          onChangeText={text => setcodigo(text)} />   
      </View>

      <Text style={styles.label}>NIP:</Text>
      <View style={styles.inputView} >
        <TextInput
          onFocus={() => setError(false)}
          secureTextEntry
          style={styles.inputText}
          placeholder="NIP"
          placeholderTextColor="#305D7A"
          keyboardType='password'
          onChangeText={text => setNip(text)} />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={() => handlerButtonSendInfo()}>
        <Text style={styles.loginText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
  },
  containerImg: {
    flex: .5,
    backgroundColor: "#000070",
    width: "100%",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    marginBottom: 120
  },
  logoDivec: {
    flex: 1,
    width: 250,
    height: 250,
    resizeMode: 'contain',
    alignSelf: 'center'
  },

  inputView: {
    width: "80%",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  forgot: {
    color: "white",
    fontSize: 11
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#EBB331",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  loginText: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 16
  },
  label: {
    color: 'black',
    textAlign: 'left',
    alignContent: 'flex-end',
    width: '80%',
    marginVertical: 5,
    marginLeft: 30,
    fontWeight: 'bold',
    fontSize: 16
  },
  errorContainer: {
    height: 40,
    width: '90%',
    justifyContent: 'center'
  },
  imageStyle: {
    padding: 15,
    margin: 1,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
    alignItems: 'center'
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    fontSize: 16
  }
});