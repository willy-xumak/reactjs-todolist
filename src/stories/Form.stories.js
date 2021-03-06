import Form from '../components/Form';

export default {
  title: 'components/Form',
  component: Form,
  argTypes: { insertNewTodo: { action: 'insertNewToDo' } },
};

const Template = (args) => <Form {...args} />;

export const Default = Template.bind({});
