import Title from '../components/Title';

export default {
  title: 'Components/Title',
  component: Title,
};

const Template = (args) => <Title {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: 'Example',
  color: '#fff',
};
