import { createAction } from 'redux-actions';

export const addTask = createAction('TASK_ADD');
export const removeTask = createAction('TASK_REMOVE');
export const completeTask = createAction('TASK_COMPLETE');
export const renameTask = createAction('TASK_RENAME');
export const cancelRename = createAction('RENAME_CANCEL');
export const activeTask = createAction('TASK_ACTIVE');
export const changeTask = createAction('TASK_CHANGE');
export const filterAll = createAction('ALL_FILTER');
export const filterCompleted = createAction('COMPLETED_FILTER');
export const filterActive = createAction('ACTIVE_FILTER');
