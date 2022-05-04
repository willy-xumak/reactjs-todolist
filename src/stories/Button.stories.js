import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { handleClickEvent: { action: 'handleClick' } },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Click Me',
  color: '#fff',
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
