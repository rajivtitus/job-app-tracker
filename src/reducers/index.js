import {combineReducers} from 'redux'

import jobAppsReducer from './jobAppsReducer'
import quotesReducer from './quotesReducer'

const rootReducer = combineReducers({
      jobApps: jobAppsReducer,
      quotes: quotesReducer
})

export default rootReducer