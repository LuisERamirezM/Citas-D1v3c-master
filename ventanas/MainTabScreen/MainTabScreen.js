import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

// -------------------------Ventanas--------------------------------
import DetailsScreen from '../DetailScreen/detail';
import ExploreScreen from '../ExploreScreen/ExploreScreen';
import CalendarPicker from '../Calendar/CalendarPicker'
import ComentariosScreen from '../Comentarios/comentario';

// -------------------------Navigator-------------------------------
const Stack = createStackNavigator();

// -------------------------Menu-------------------------------
const MainTabScreen = ({ navigation }) => (
  <Stack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#121EB2',
      borderBottomRightRadius:20,
      borderBottomLeftRadius: 20,   
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontWeight: 'bold',
      borderRadius: 10
    },
    headerLeftContainerStyle: {
      margin: 10,
      justifyContent: 'center'
    }

  }}>
    <Stack.Screen name="Home" component={DetailsScreen}
      options={{
        title: 'Calendario',
        headerLeft: () => (
          <Icon.Button  name="ios-menu" size={30} 
            backgroundColor='#121EB2'  onPress={() => { navigation.openDrawer() }}></Icon.Button>
        )
      }}
    />
    
    <Stack.Screen name="Profile" component={CalendarPicker} options={{
      title: 'Agendar Cita',
      headerLeft: () => (
        <Icon.Button  name="ios-menu" size={30} 
            backgroundColor='#121EB2'  onPress={() => { navigation.openDrawer() }}></Icon.Button>
      )
    }} />
    <Stack.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        title: 'Mis Citas',
        headerLeft: () => (
          <Icon.Button  name="ios-menu" size={30} 
            backgroundColor='#121EB2'  onPress={() => { navigation.openDrawer() }}></Icon.Button>
        )
      }} />
    <Stack.Screen name="Comentarios" component={ComentariosScreen} options={{
      title: 'Contacto',
      headerLeft: () => (
        <Icon.Button  name="ios-menu" size={30} 
        backgroundColor='#121EB2'  onPress={() => { navigation.openDrawer() }}></Icon.Button>
      )
    }} />
  </Stack.Navigator>
);

export default MainTabScreen;