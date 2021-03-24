import { hbs } from 'ember-cli-htmlbars';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Task',
  component: 'task',
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

const Template = args => ({
  template: hbs`<Task @task={{this.task}} @pin={{fn this.onPinTask}} @archive={{fn this.onArchiveTask}}/>`,
  context: args,
});

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
  ...actionsData,
};

export const Pinned = Template.bind({});
Pinned.args = {
  ...Default.args,
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  ...Default.args,
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};