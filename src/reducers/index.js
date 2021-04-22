import {combineReducers} from 'redux'

import {LOGOUT_USER} from '../constants/actionTypes'
import jobAppsReducer from './jobAppsReducer'
import quotesReducer from './quotesReducer'
import userReducer from './userReducer'

const appReducer = combineReducers({
      jobApps: jobAppsReducer,
      quotes: quotesReducer,
      user: userReducer,
})

const rootReducer = (state, action) => {
      if (action.type === LOGOUT_USER) {
            localStorage.clear()
            state = undefined;
      }

      return appReducer(state, action);
}

export default rootReducer