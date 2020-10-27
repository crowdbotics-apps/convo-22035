import * as types from "./constants"
export const useraccountconnector_post_registration_create = data => ({
  type: types.USERACCOUNTCONNECTOR_POST_REGISTRATION_CREATE,
  data
})
export const useraccountconnector_post_registration_createSucceeded = (
  response,
  starter
) => ({
  type: types.USERACCOUNTCONNECTOR_POST_REGISTRATION_CREATE_SUCCEEDED,
  response,
  starter
})
export const useraccountconnector_post_registration_createFailed = (
  error,
  starter
) => ({
  type: types.USERACCOUNTCONNECTOR_POST_REGISTRATION_CREATE_FAILED,
  error,
  starter
})
