import { ADD_USER } from '../../type';
import React,{useReducer} from 'react';

import UserReducer from './userReducer';
import UserContext from './userContext';

const UserState = props => {
    //Estado inicial
    const initialState = {
        nombre:"",
        codigo:"",
        nip:"",
        centro:"",
        carrera:""
    }

    // useReducer con dispatch para ejecutar las funciones 
    const [state,dispatch] = useReducer(UserReducer,initialState);

    const addUser = (user)=>{        
        dispatch({
            type:ADD_USER,
            payload:user
        })
    }

    return(
        <UserContext.Provider
            value={{
                nombre:state.nombre,
                codigo:state.codigo,
                nip:state.nip,
                centro:state.centro,
                carrera:state.carrera,
                addUser                
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}
export default UserState