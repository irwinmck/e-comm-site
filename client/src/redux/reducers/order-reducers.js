import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_ERROR,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_ERROR,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_ERROR,
  ORDER_PAY_RESET,
  ORDERS_USER_REQUEST,
  ORDERS_USER_SUCCESS,
  ORDERS_USER_ERROR
} from '../constants'

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return { loading: true }

    case ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload
      }

    case ORDER_CREATE_ERROR:
      return {
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}

const orderDetailsInitState = {
  loading: true,
  orderItems: [],
  shippingAddress: {}
}

export const orderDetailsReducer = (state = orderDetailsInitState, action) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: action.payload
      }

    case ORDER_DETAILS_ERROR:
      return {
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}

export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return {
        loading: true
      }

    case ORDER_PAY_SUCCESS:
      return {
        loading: false,
        success: true
      }

    case ORDER_PAY_ERROR:
      return {
        loading: false,
        error: action.payload
      }

    case ORDER_PAY_RESET:
      return {}

    default:
      return state
  }
}

export const ordersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDERS_USER_REQUEST:
      return {
        loading: true
      }

    case ORDERS_USER_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      }

    case ORDERS_USER_ERROR:
      return {
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}