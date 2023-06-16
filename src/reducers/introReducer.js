import clients from '../data/clients'
import { NEW_CLIENT } from '../actions/formActions'

const introReducer = (state, action) => {
    if (state === undefined) {
        state = {
            clients: clients,
            numClients: clients.length
        }
    }

    switch (action.type) {
        case NEW_CLIENT:
            return {
                ...state,
                clients: state.clients.concat(action.data)
            }
        default:
            return state;
    }
}

export default introReducer;