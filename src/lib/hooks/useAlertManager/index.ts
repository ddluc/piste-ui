import React from 'react';

export type Alert = {
  id?: string,
  title: string
  content: React.ReactNode
  duration?: number
};

export const useAlertManager = () => {

  const [alerts, setAlerts] = React.useState<Alert[]>([]);

  const getAlertIndex = (id: string): number | null => {
    // Don't add item if it already exists
    const index = alerts.findIndex((val) => val.id === id);
    if (index >= 0) return index;
    return null;
  };

  const addAlert = (alert: Alert): void => {
    const index = getAlertIndex(alert.id);
    // Don't add item if it exists in the hook state
    if (index != null) return;
    const result = [{ ...alert, duration: alert.duration } as Alert, ...alerts];
    setAlerts(result);
  };

  const removeAlert = (id: string): void => {
    // Don't attempt to remove item if it doesn't exist in the hook state
    const index = getAlertIndex(id);
    if (index == null) return;
    const result = [...alerts.slice(0, index), ...alerts.slice(index + 1)];
    setAlerts(result);
  };

  return {
    addAlert,
    removeAlert,
    alerts
  };

};
