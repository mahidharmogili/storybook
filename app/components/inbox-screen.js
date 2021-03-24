import Component from '@glimmer/component';
import { action } from '@ember/object';

import { store, pinTask, archiveTask } from '../store';

export default class InboxScreenComponent extends Component {
  get loading() {
    return this.args.loading ?? store.getState().isLoading;
  }

  get error() {
    return this.args.error ?? store.getState().isError;
  }

  get tasks() {
    return store
      .getState()
      .tasks.filter(t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED');
  }

  @action
  pinTask(task) {
    store.dispatch(pinTask(task));
  }

  @action
  archiveTask(task) {
    store.dispatch(archiveTask(task));
  }
}