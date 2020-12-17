import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';





function ProfileScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>¡BIENVENIDOS!</Text>
        <Text>Fechas Disponibles</Text>
  
        <Button
          title= " Ir a Inicio"
          onPress = {() => navigation.navigate('Home')}
        />
        <Button
          title= " Ir Atrás"
          onPress = {() => navigation.goBack('Details')}
        />
        
      
      </View>
      
    );
  }
  

export default ProfileScreen;
