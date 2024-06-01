import React from 'react'

const Alert = ({ message, type }) => {
  const alertClass = type === 'sucess' ? 'alert-sucess' : 'alert-danger';
  return (
    <div className={alertClass} role="alert">
      {message}
    </div>
  );
};

export default Alert;
