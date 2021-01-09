const redux = require('redux')
const createStore = redux.createStore

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUSersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUSersSucces= (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUSersFailure= (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch (action) {
      case FETCH_USERS_REQUEST:
          return {
              ...state,
              loading: true
          }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            return state
    }
}


const store = createStore(reducer)
