import { OBTENER_PRODUCTOS_EXITO} from '../../type';

export default (state,action) => {
    switch(action.type){
        case OBTENER_PRODUCTOS_EXITO:
            return {
                ...state,
                citas:action.payload
            }
        default:
            return state
    }
}