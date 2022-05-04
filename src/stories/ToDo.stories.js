import ToDo from '../components/ToDo';

export default {
  title: 'components/ToDo',
  component: ToDo,
  argTypes: {deleteTodoHandler: {action: "deleteHandler"}}
};

const Template = (args) => <div style={{ width:"24vw" }}><ToDo style={{width: "20vw"}} {...args} /></div>;

export const Primary = Template.bind({});
Primary.args = {
    todo: {
        id: '1',
        text: 'Example ToDo Item'
    }
};