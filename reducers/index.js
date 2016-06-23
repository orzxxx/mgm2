import {combineReducers} from "redux"
import counter from "./counter"
import {INCREMENT_COUNTER, DECREMENT_COUNTER, UNDO_COUNTER, REDO_COUNTER} from "../actions/counter"
import undoable, { includeAction } from 'redux-undo'
import {reducer as formReducer} from 'redux-form';


const rootRouter = combineReducers({
  form: formReducer,
  counter: undoable(counter, {
    filter: includeAction([INCREMENT_COUNTER, DECREMENT_COUNTER]),
    limit: 10,
    debug: true,
    undoType: UNDO_COUNTER,
    redoType: REDO_COUNTER
  })
})

export default rootRouter
/*import { combineReducers } from 'redux'
import counter from './counter'

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
  counter
})

export default rootReducer*/
