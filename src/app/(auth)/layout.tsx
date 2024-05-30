import React from "react";

interface SetupLayoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: SetupLayoutProps) {
  return (
    <div className=" flex items-center justify-center h-full">{children}</div>
  );
}
