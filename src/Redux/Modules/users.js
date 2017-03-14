const AUTH_USER = 'AUTH_USER'
const UNAUTH_USER = 'UNAUTH_USER'

const initialState = {
  isAuthed: false,
  id: ''
}

export function authUser (id) {
  return {
    type: AUTH_USER,
    id
  }
}

export function unauthUser () {
  return {
    type: UNAUTH_USER
  }
}

export default function users (state = initialState, action = null) {
  switch (action.type) {
    case AUTH_USER :
      return {
        ...state,
        isAuthed: true,
        id: action.id
      }
    case UNAUTH_USER :
      return {
        ...state,
        isAuthed: false,
        id: ''
      }
    default :
      return state
  }
}

