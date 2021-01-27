// This file imports and combines all reducers and exports them as reducers

import { combineReducers } from 'redux'

import posts from './posts'

export const reducers = combineReducers({ posts })