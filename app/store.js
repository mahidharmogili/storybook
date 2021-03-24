
import { createStore } from 'tracked-redux';

export const actions = {
  ARCHIVE_TASK: 'ARCHIVE_TASK',
  PIN_TASK: 'PIN_TASK',
  // The new actions to handle both error and loading state
+ SET_ERROR: 'SET_ERROR',
+ SET_LOADING: 'SET_LOADING',
};

// The action creators bundle actions with the data required to execute them
export const archiveTask = id => ({ type: actions.ARCHIVE_TASK, id });
export const pinTask = id => ({ type: actions.PIN_TASK, id });

+ export const setError = () => ({ type: actions.SET_ERROR });
+ export const setLoading = () => ({ type: actions.SET_LOADING });

// A sample set of tasks
const defaultTasks = [
  { id: '1', title: 'Something', state: 'TASK_INBOX' },
  { id: '2', title: 'Something more', state: 'TASK_INBOX' },
  { id: '3', title: 'Something else', state: 'TASK_INBOX' },
  { id: '4', title: 'Something again', state: 'TASK_INBOX' },
];

// Store initial state
const initialState = {
  isError: false,
  isLoading: false,
  tasks: defaultTasks,
};

// All our reducers simply change the state of a single task.
function taskStateReducer(taskState) {
  return (state, action) => {
    return {
      ...state,
      tasks: state.tasks.map(task =>
        task.id === action.id ? { ...task, state: taskState } : task
      ),
    };
  };
}

// The reducer describes how the contents of the store change for each action
const reducers = (state, action) => {
  switch (action.type) {
    case actions.ARCHIVE_TASK:
      return taskStateReducer('TASK_ARCHIVED')(state, action);
    case actions.PIN_TASK:
      return taskStateReducer('TASK_PINNED')(state, action);
+   case actions.SET_ERROR:
+     return {
+       ...state,
+       isError: true,
+     };
+   case actions.SET_LOADING:
+     return {
+       ...state,
+       isLoading: true,
+     };
    default:
      return state || initialState;
  }
};

export const store = createStore(reducers);