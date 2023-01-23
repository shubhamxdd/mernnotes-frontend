import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div className="fixed-top">
      {props.alert && (
        <div className="container">
          <div
            className={`alert alert-${props.alert.type} alert-dismissible fade show mt-1`}
            role="alert"
          >
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
          </div>
        </div>
      )}
    </div>
  );
}

export default Alert;
