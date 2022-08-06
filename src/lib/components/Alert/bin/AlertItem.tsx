/* eslint-disable no-underscore-dangle */
import React from 'react';
import { AlertCard } from './AlertCard';
import type { Alert } from '../../../hooks/useAlertManager';

export type AlertState = 'pending' | 'active' | 'complete';

export interface Props {
  alert: Alert
  removeAlert: (id: string) => void
}

export const AlertItem = (props: Props): JSX.Element => {

  const { alert, removeAlert } = props;

  const [state, setState] = React.useState<AlertState>('pending');

  React.useEffect(() => {
    setState('active');
  }, []);

  React.useEffect(() => {
    if (state === 'active') {
      const timer = setTimeout(() => {
        setState('complete');
      }, alert.duration);
      return () => clearTimeout(timer);
    }
    return null;
  }, [state]);

  React.useEffect(() => {
    if (state === 'complete') {
      const timer = setTimeout(() => {
        removeAlert(alert.id);
      }, 500);
      return () => clearTimeout(timer);
    }
    return null;
  }, [state]);

  return (
    <AlertCard state={state}>
      {`${alert.id}: ${state}`}
    </AlertCard>
  );

};
