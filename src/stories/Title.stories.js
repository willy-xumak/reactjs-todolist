import Title from '../components/Title';

export default {
  title: 'components/Title',
  component: Title,
};

const Template = (args) => <Title {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: 'Example',
  color: '#000',
};
