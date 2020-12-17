import React, {useState,useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import UserContext from '../../context/user/userContext'




// import{ AuthContext } from '../components/context';

export function DrawerContent(props) {

    const navigation = useNavigation();
    const {carrera,nombre,codigo,centro} = useContext(UserContext)    
    

    // const { signOut, toggleTheme } = React.useContext(AuthContext);
    const signOut = () =>{
        elimiinarDatos()

    }

    const elimiinarDatos = async ( ) =>{
        try {
          await AsyncStorage.removeItem('user');
            
        } catch (error) {
          console.log(error)
        }
        finally{
            navigation.navigate("Login")
        }
        
      }
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props} style={{flex: 1, backgroundColor:"#121EB2"}}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{marginTop: 10, alignItems: "center"}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'data:image/jpeg;base64,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'
                                }}
                                size={60}
                                style={{flexDirection:'column'}}
                            />
                            <View style={{flexDirection:'column'}}>
                                <Title style={styles.title}>{nombre}</Title>
                                <Caption style={styles.caption}>Código: {codigo}</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>Centro: </Paragraph>
                                <Caption style={styles.caption}>{centro}</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>Carrera</Paragraph>
                                <Caption style={styles.caption}>:{carrera}</Caption>
                            </View>
                            
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Inicio"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="calendar-edit" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Agendar Cita"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="calendar-multiple-check" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Mis Citas"
                            onPress={() => {props.navigation.navigate('Explore')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="phone" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Contacto"
                            onPress={() => {props.navigation.navigate('Comentarios')}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <View style={{flex: .75, backgroundColor: "#fff", justifyContent:"flex-end"}}>
                <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="exit-to-app" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Salir"
                        onPress={() => {signOut()}}
                    />
                </Drawer.Section>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        backgroundColor: "#fff",
    },
    userInfoSection: {
      
      backgroundColor: '#000070',
      borderBottomRightRadius:20,
      borderBottomLeftRadius: 20, 
    },
    title: {
      fontSize:13,
      marginTop: 1,
      fontWeight: 'bold',
      color: "#fff"
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      alignSelf: "center",
      color: "#fff"
    },
    row: {
      marginTop: 10,
      marginBottom: 10,
      flexDirection: 'row',
      alignSelf: 'center',
    },
    section: {
      flexDirection: 'row',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        backgroundColor: "#fff",
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });