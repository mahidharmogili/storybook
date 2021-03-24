import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'InboxScreen',
  component: 'InboxScreen',
};

const Template = args => ({
  template: hbs`<InboxScreen @error={{this.error}} @loading={{this.loading}} />`,
  context: args,
});

export const Default = Template.bind({});
Default.args = {
  loading: false,
  error: false,
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  error: true,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  loading: true,
};