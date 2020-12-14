import React,{useReducer} from 'react';

import { OBTENER_PRODUCTOS_EXITO } from '../../type';

import FirebaseReducer from './firebaseReducer'
import FirebaseContext from './firebaseContext'

import firebase from '../../firebase';

const FirebaseState = props => {    

    const obtenerDatos = () => {
        try {
            firebase.db.collection("cita")
            .onSnapshot(manejarSnapshot)
            
            function manejarSnapshot(snapshot) {
                let citas = snapshot.docs.map(doc =>{
                    return{
                        id: doc.id,
                        ...doc.data()
                    }
                }) ;            
                
                //Tenemos resultados de la base de datos                
                dispatch({
                    type:OBTENER_PRODUCTOS_EXITO,
                    payload:citas
                });
             }
        } catch (error) {
            console.log(error)
        }
        

        
    }
    //Initial state
    const initialState = {
        citas: [],     
    }

    //Use Reducer para disparar las acciones
    const [state,dispatch] = useReducer(FirebaseReducer,initialState);

    const agendarCita = (cita) =>{

        try{
            firebase.db.collection("cita").add(cita)
        }catch(e){
            console.log(e)
        }
    }
    return(
        <FirebaseContext.Provider
            value={{            
                citas:state.citas,    
                firebase,
                agendarCita,
                obtenerDatos
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState;