import React from "react";

const Base = ({title='Welcom to our blog app', children}) => {
  return (
    <div className="container-fluid">
      <h1>This is header</h1>
      {
        children
      }
      <h1>This is footer</h1>
    </div>
  );
};

export default Base;