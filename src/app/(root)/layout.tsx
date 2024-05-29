import React from "react";

interface SetupLayoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: SetupLayoutProps) {
  return <div>{children}</div>;
}
