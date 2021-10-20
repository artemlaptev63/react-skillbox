import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Loader} from '../../common/loader/loader';


export default {
  title: 'Common/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
