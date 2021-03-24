

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | TaskList', function(hooks) {
  setupRenderingTest(hooks);
  const taskData = {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  };
  const tasklist = [
    { ...taskData, id: '1', title: 'Task 1' },
    { ...taskData, id: '2', title: 'Task 2' },
    { ...taskData, id: '3', title: 'Task 3' },
    { ...taskData, id: '4', title: 'Task 4' },
    { ...taskData, id: '5', title: 'Task 5' },
    { ...taskData, id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
  ];

  test('renders pinned tasks at the start of the list', async function(assert) {
    this.tasks = tasklist;
    await render(hbs`<TaskList @tasks={{this.tasks}}/>`);
    assert.dom('[data-test-task]:nth-of-type(1)').hasClass('TASK_PINNED');
  });
});