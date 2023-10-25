import axios from "axios"
const fdgbtdevAPI = axios.create({
  baseURL: "https://fdgbt-dev-124441.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return fdgbtdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_gahana_list(payload) {
  return fdgbtdevAPI.get(`/api/v1/gahana/`)
}
function api_v1_gahana_create(payload) {
  return fdgbtdevAPI.post(`/api/v1/gahana/`, payload)
}
function api_v1_gahana_retrieve(payload) {
  return fdgbtdevAPI.get(`/api/v1/gahana/${payload.id}/`)
}
function api_v1_gahana_update(payload) {
  return fdgbtdevAPI.put(`/api/v1/gahana/${payload.id}/`, payload)
}
function api_v1_gahana_partial_update(payload) {
  return fdgbtdevAPI.patch(`/api/v1/gahana/${payload.id}/`, payload)
}
function api_v1_gahana_destroy(payload) {
  return fdgbtdevAPI.delete(`/api/v1/gahana/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return fdgbtdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_oqoo_list(payload) {
  return fdgbtdevAPI.get(`/api/v1/oqoo/`)
}
function api_v1_oqoo_create(payload) {
  return fdgbtdevAPI.post(`/api/v1/oqoo/`, payload)
}
function api_v1_oqoo_retrieve(payload) {
  return fdgbtdevAPI.get(`/api/v1/oqoo/${payload.id}/`)
}
function api_v1_oqoo_update(payload) {
  return fdgbtdevAPI.put(`/api/v1/oqoo/${payload.id}/`, payload)
}
function api_v1_oqoo_partial_update(payload) {
  return fdgbtdevAPI.patch(`/api/v1/oqoo/${payload.id}/`, payload)
}
function api_v1_oqoo_destroy(payload) {
  return fdgbtdevAPI.delete(`/api/v1/oqoo/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return fdgbtdevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return fdgbtdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return fdgbtdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return fdgbtdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return fdgbtdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return fdgbtdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return fdgbtdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return fdgbtdevAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return fdgbtdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return fdgbtdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return fdgbtdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return fdgbtdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_gahana_list,
  api_v1_gahana_create,
  api_v1_gahana_retrieve,
  api_v1_gahana_update,
  api_v1_gahana_partial_update,
  api_v1_gahana_destroy,
  api_v1_login_create,
  api_v1_oqoo_list,
  api_v1_oqoo_create,
  api_v1_oqoo_retrieve,
  api_v1_oqoo_update,
  api_v1_oqoo_partial_update,
  api_v1_oqoo_destroy,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
