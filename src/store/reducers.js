import * as types from "./constants"

const initialState = { userAccountConnector: [] }

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.USERACCOUNTCONNECTOR_POST_REGISTRATION_CREATE:
    case types.USERACCOUNTCONNECTOR_POST_REGISTRATION_CREATE_SUCCEEDED:
    case types.USERACCOUNTCONNECTOR_POST_REGISTRATION_CREATE_FAILED:
      return Object.assign({}, state, {
        userAccountConnector: [...state.userAccountConnector, action.response]
      })
    default:
      return state
  }
}
