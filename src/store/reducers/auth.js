import { LOGIN, LOGOUT } from '@/constants'

export const initState = {
  credentials: {
    isAuthenticated: null
  }
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      state = {
        ...state,
        credentials: action.value
      }
      break
    case LOGOUT:
      state = {
        ...state,
        credentials: {}
      }
      break
    default:
      return state
  }

  return state
}

export default reducer
