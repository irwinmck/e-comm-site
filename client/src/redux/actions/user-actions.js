import axios from 'axios'
import {
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_ERROR,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS
} from '../constants'

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST })
    const reqConfig = { headers: { 'Content-Type': 'application/json' } }
    const { data } = await axios.post('/api/users/login', { email, password }, reqConfig)
    localStorage.setItem('userDetails', JSON.stringify(data))
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
  }

  catch (err) {
    const message = err.response && err.response.data.message ? err.response.data.message : err.message
    dispatch({ type: USER_LOGIN_ERROR, payload: message })
  }
}

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST })
    const reqConfig = { headers: { 'Content-Type': 'application/json' } }
    const { data } = await axios.post('/api/users', { name, email, password }, reqConfig)
    localStorage.setItem('userDetails', JSON.stringify(data))
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data })
  }

  catch (err) {
    const message = err.response && err.response.data.message ? err.response.data.message : err.message
    dispatch({ type: USER_REGISTER_ERROR, payload: message })
  }
}

export const logout = () => (dispatch) => {
  localStorage.setItem('userDetails', null)
  dispatch({ type: USER_LOGOUT })
}