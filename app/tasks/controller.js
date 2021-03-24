import Controller from '@ember/controller';
import { action } from '@ember/object';

import { store, pinTask, archiveTask } from '../store';

export default class TaskController extends Controller {
  @action
  pinTask(task) {
    store.dispatch(pinTask(task));
  }

  @action
  archiveTask(task) {
    store.dispatch(archiveTask(task));
  }
}