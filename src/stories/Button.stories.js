import Button from '../components/Button';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: { handleClickEvent: { action: 'handleClick' } },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Click Me',
  color: '#000',
  backgroundColor: 'transparent',
  size: 'md',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Click Me',
  color: 'white',
  backgroundColor: 'green',
  size: 'lg',
};
