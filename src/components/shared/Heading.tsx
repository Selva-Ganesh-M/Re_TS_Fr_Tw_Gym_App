import React from "react";

type Props = {
  children: React.ReactNode;
};

const Heading = ({ children }: Props) => {
  return <div className="font-montserrat text-3xl font-bold">{children}</div>;
};

export default Heading;
