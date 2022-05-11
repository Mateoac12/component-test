import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';

export default {
    title: 'Atoms/Button',
    component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    variant: 'primary',
    children: 'Primary',
    onClick: () => {}
}

export const Secondary = Template.bind({})
Secondary.args = {
    variant: 'secondary',
    children: 'Secondary',
    onClick: () => {}
}

export const Tertiary = Template.bind({})
Tertiary.args = {
    variant: 'tertiary',
    children: 'Tertiary',
    onClick: () => {}
}
