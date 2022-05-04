import ToDoList from '../components/ToDoList';

export default {
  title: 'components/ToDoList',
  component: ToDoList,
};

const Template = (args) => <ToDoList {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};