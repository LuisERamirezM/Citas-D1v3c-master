
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// -------------------------Ventanas--------------------------------
import Calendario from '../Calendar/calendario';
import HomeScreen from '../HomeScreen/home';
import DetailsScreen from '../DetailScreen/detail';
import ExploreScreen from '../ExploreScreen/ExploreScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import CalendarPicker from '../Calendar/CalendarPicker'
import ComentariosScreen from '../Comentarios/comentario';

// -------------------------Navigator-------------------------------
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const Comentarios = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

// -------------------------Menu Tab Inferior-------------------------------
const MainTabScreen = () => (
<Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarColor: '#004D40',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Calendario',
          tabBarColor: '#00695C',
          tabBarIcon: ({ color }) => (
            <Icon name="calendar" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={CalendarPicker}
        options={{
          tabBarLabel: 'Agendar Cita',
          tabBarColor: '#00897B',
          tabBarIcon: ({ color }) => (
            <Icon name="create-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Mis Citas',
          tabBarColor: '#4DB6A6',
          tabBarIcon: ({ color }) => (
            <Icon name="calendar-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Comentarios"
        component={ComentariosScreen}
        options={{
          tabBarLabel: 'Comentarios',
          tabBarColor: '#36465d',
          tabBarIcon: ({ color }) => (
            <Icon name="mail" color={color} size={26} />
          ),
        }}
      />
</Tab.Navigator>

);

export default MainTabScreen;

// -------------------------Home------------------------------------
const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions= {{
      headerStyle: {
        backgroundColor : '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>       
      <HomeStack.Screen name="Home" component={HomeScreen} options = {{
        title: 'CITAS DIVEC',
        headerLeft: () => (
          <Icon.Button name= "ios-menu" size = {25}
          backgroundColor='#009387' onPress = {() => {navigation.openDrawer()}}></Icon.Button>
        )
      }}/>
    </HomeStack.Navigator>
  );
// -------------------------Detail------------------------------------
  const DetailsStackScreen = ({navigation}) => (
    <DetailsStack.Navigator screenOptions= {{
      headerStyle: {
        backgroundColor : '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <DetailsStack.Screen name="Home" component={DetailsScreen} options = {{
        title: 'Details',
        headerLeft: () => (
          <Icon.Button name= "ios-menu" size = {25}
          backgroundColor='#009387' onPress = {() => {navigation.openDrawer()}}></Icon.Button>
        )
      }}/>
    </DetailsStack.Navigator>
  );
// -------------------------Profile------------------------------------
const ProfileStackScreen = ({navigation}) => (
    <ProfileStack.Navigator screenOptions= {{
      headerStyle: {
        backgroundColor : '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <ProfileStack.Screen name="Home" component={ProfileScreen} options = {{
        title: 'Profile',
        headerLeft: () => (
          <Icon.Button name= "ios-menu" size = {25}
          backgroundColor='#009387' onPress = {() => {navigation.openDrawer()}}></Icon.Button>
        )
      }}/>
    </ProfileStack.Navigator>
  );
// -------------------------Explore------------------------------------