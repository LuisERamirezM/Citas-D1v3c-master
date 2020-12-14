import {
    ADD_USER
} from '../../type';

export default (state,action)=>{
    switch(action.type){
        case ADD_USER:{            
            return {
                ...state,
                nombre:action.payload.nombre,
                codigo:action.payload.codigo,
                centro:action.payload.centro,
                carrera:action.payload.carrera                
            }
        }
        default:
            return state
    }
}