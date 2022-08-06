/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AlertController, AlertControllerProps } from '../index';
import { useAlertManager, Alert } from '../../../hooks/useAlertManager';
import { Block } from '../../Block';
import { Button } from '../../Button';

export default {
  title: 'Core/Alert',
  component: AlertController,
  args: {
  } as AlertControllerProps
} as ComponentMeta<typeof AlertController>;

const Template: ComponentStory<typeof AlertController> = (args: AlertControllerProps) => {

  const { alerts, addAlert, removeAlert } = useAlertManager();

  const handleButtonClick = () => {
    const id = `${Math.floor(Math.random() * 1000)}`;
    const alert: Alert = {
      id,
      title: `Alert id #${id}`,
      content: '',
      duration: 5000
    };
    addAlert(alert);
  };

  return (
    <>
      <Block>
        <Button type="button" onClick={handleButtonClick} text="Add New Alert" />
      </Block>
      <AlertController alerts={alerts} removeAlert={removeAlert} />
    </>
  );

};

export const Main = Template.bind({});
