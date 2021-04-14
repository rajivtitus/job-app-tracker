import {combineReducers} from 'redux'

import jobAppsReducer from './jobAppsReducer'
import quotesReducer from './quotesReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
      jobApps: jobAppsReducer,
      quotes: quotesReducer,
      user: userReducer,
})

export default rootReducer