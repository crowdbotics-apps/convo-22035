import axios from "axios"
const userAccountConnector = axios.create({
  baseURL: "https://tstcr2020102601-21976.botics.co/rest-auth",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function useraccountconnector_post_registration_create(action) {
  return userAccountConnector.post(`/registration/`, null, {
    data: action.data
  })
}
export const apiService = { useraccountconnector_post_registration_create }
