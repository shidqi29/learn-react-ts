import React from "react";

type OscarProps = {
  children: React.ReactNode;
};

// ReactNode is a type that accepts anything that is valid JSX, for example used to passing components as children

const Oscar = ({ children }: OscarProps) => {
  return <div>{children}</div>;
};

export default Oscar;
