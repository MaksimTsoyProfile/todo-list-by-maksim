import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { uniqueId, omit } from 'lodash';
import * as actions from '../actions';

const tasks = handleActions({
  [actions.addTask](state, { payload }) {
    const id = uniqueId();
    return {
      ...state,
      [id]: {
        id,
        name: payload.name,
        description: payload.description,
        stateTask: 'progress',
        rename: false,
      },
    };
  },
  [actions.removeTask](state, { payload }) {
    return omit(state, payload);
  },
  [actions.completeTask](state, { payload }) {
    const states = Object.keys(state).reduce((acc, key) => {
      if (key === payload) {
        return {
          ...acc,
          [key]: {
            ...state[key],
            stateTask: 'done',
          },
        };
      }
      return {
        ...state,
        ...acc,
      };
    }, {});
    return states;
  },
  [actions.activeTask](state, { payload }) {
    const states = Object.keys(state).reduce((acc, key) => {
      if (key === payload) {
        return {
          ...acc,
          [key]: {
            ...state[key],
            stateTask: 'progress',
          },
        };
      }
      return {
        ...state,
        ...acc,
      };
    }, {});
    return states;
  },
  [actions.renameTask](state, { payload }) {
    const states = Object.keys(state).reduce((acc, key) => {
      if (key === payload) {
        return {
          ...acc,
          [key]: {
            ...state[key],
            rename: true,
          },
        };
      }
      return {
        ...state,
        ...acc,
      };
    }, {});
    return states;
  },
  [actions.changeTask](state, { payload }) {
    const states = Object.keys(state).reduce((acc, key) => {
      if (key === payload.id) {
        return {
          ...acc,
          [key]: {
            ...state[key],
            name: payload.name,
            description: payload.description,
            rename: false,
          },
        };
      }
      return {
        ...state,
        ...acc,
      };
    }, {});
    return states;
  },
}, {});

const filter = handleActions({
  [actions.filterAll]() {
    return 'all';
  },
  [actions.filterActive]() {
    return 'active';
  },
  [actions.filterCompleted]() {
    return 'completed';
  },
}, 'all');

const rootReducer = combineReducers({
  tasks,
  filter,
});

export default rootReducer;
