import { useState } from 'react';

const useLogger = () => {
  const [logType, setLogType] = useState([]);

  const logMessage = (method, scope, message) => {
    const timestamp = new Date().toLocaleString();
    const formattedMessage = `[${scope.toUpperCase()}] [${timestamp}] ${message}`;

    switch (method) {
      case 'log':
        console.log(formattedMessage);
        break;
      case 'warn':
        console.warn(formattedMessage);
        break;
      case 'error':
        console.error(formattedMessage);
        break;
      case 'debug':
        console.debug(formattedMessage);
        break;
      default:
        console.log(formattedMessage);
    }

    // Add formatted log to the logType array for display in the UI
    setLogType((prevLogs) => [...prevLogs, formattedMessage]);
  };

  return { logMessage, logType };
};
export default useLogger;
