import React from 'react'

const ActionItem = ({ action, label, color, hasButtom,getActionHandler }) => {
  const emitAction = (event) => {
    getActionHandler(event, {action});
  };

  return (
    <p
      style={{
        color,
        cursor: "pointer",
        margin: hasButtom ? "12px" : null,
      }}
      onClick={(e) => emitAction(e)}
    >
      {label}
    </p>
  );
};

export default ActionItem
