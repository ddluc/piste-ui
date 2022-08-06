/* eslint-disable no-underscore-dangle */
import React from 'react';
import { AlertBox, AlertItem } from './bin';
import type { Alert } from '../../hooks/useAlertManager';

export interface Props {
  alerts: Alert[]
  removeAlert: (id: string) => void
}

// Declare the component
const AlertController = (props: Props): JSX.Element => {

  const { alerts, removeAlert } = props;

  return (
    <AlertBox>
      {alerts.map((alert: Alert): JSX.Element => (
        <AlertItem key={alert.id} alert={alert} removeAlert={removeAlert} />
      ))}
    </AlertBox>
  );
};

// Export the component as the default export
export default AlertController;
