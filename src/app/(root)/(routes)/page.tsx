"use client";

import Model from "@/components/model";
import { UserButton } from "@clerk/nextjs";
import React from "react";

export default function page() {
  return (
    <div>
      <Model
        title="Create Store"
        description="This is the store"
        isOpen
        onClose={() => {}}
      >
        This is the store model
      </Model>
    </div>
  );
}
