// import { NEW_CLIENT } from './types'
export const NEW_CLIENT = "NEW_CLIENT"

export const newClient = (id, firstName, lastName, email, phone, language, pronouns) => {
    return {
        type: NEW_CLIENT,
        data: {
            id,
            firstName,
            lastName,
            email,
            phone,
            language,
            pronouns
        }
    }
}

