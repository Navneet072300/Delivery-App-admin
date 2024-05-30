import { UserButton } from "@clerk/nextjs";
import React from "react";

export default function page() {
  return (
    <div>
      Hello <UserButton afterSignOutUrl="/" />
    </div>
  );
}
