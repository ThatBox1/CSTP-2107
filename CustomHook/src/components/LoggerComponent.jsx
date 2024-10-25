import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, Box } from '@mui/material';
import useLogger from './useLogger';

const LoggerComponent = () => {
  const [scope, setScope] = useState('');
  const [message, setMessage] = useState('');
  const [method, setMethod] = useState('log');
  const {logType, logMessage } = useLogger();

  const handleSubmit = () => {
    logMessage(method, scope, message);
  };

  return (
    <Box sx={{ p: 2, border: '1px solid black', maxWidth: '600px', margin: 'auto' }}>
      <Box display="flex" flexDirection="row" justifyContent="space-between" mb={2}>
        
        {/* Scope input  */}
        <TextField
          label="SCOPE"
          value={scope}
          onChange={(e) => setScope(e.target.value)}
        />
        
        {/* Select log type  */}
        <Select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        >
          <MenuItem value="log">LOG</MenuItem>
          <MenuItem value="warn">WARN</MenuItem>
          <MenuItem value="error">ERROR</MenuItem>
          <MenuItem value="debug">DEBUG</MenuItem>
        </Select>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>

      {/* Message input  */}
      <TextField
        label="Message"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      {/* Displaying logs in console  */}
      <Box mt={4} p={2} border="1px solid gray">
        <h3>Console</h3>
        {logType.map((log, index) => (
          <Box key={index} sx={{ mb: 1 }}>
            {log}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default LoggerComponent;
