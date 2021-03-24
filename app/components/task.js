import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class Task extends Component {
  // Computed property for the component (to assign a value to the task state checkbox)
  get isArchived() {
    return this.args.task.state === 'TASK_ARCHIVED';
  }

  @action
  pin() {
    this.args.pin?.(this.args.task.id);
  }

  @action
  archive() {
    this.args.archive?.(this.args.task.id);
  }
}